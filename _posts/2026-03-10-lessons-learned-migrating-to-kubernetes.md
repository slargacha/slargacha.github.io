---
layout: post
title: "Lessons Learned Migrating to Kubernetes in Production"
date: 2026-03-10
tags: [Kubernetes, Docker, DevOps, Cloud]
excerpt: "After migrating multiple production workloads to Kubernetes, here are the key lessons, pitfalls, and strategies that made all the difference."
---

Moving to Kubernetes is one of those decisions that sounds simple in a conference talk but becomes infinitely more complex when you're doing it with real traffic, real SLAs, and a real team that needs to keep shipping features.

Here's what I learned after migrating several production services to Kubernetes over the past year.

## Start with the Boring Stuff

Before touching any YAML manifests, we needed to answer fundamental questions:

- **What does our deployment process look like today?**
- **What are our actual scaling requirements?**
- **Do we have observability in place?**

Most teams jump straight into pod specs and Helm charts. We almost did too. But spending two weeks documenting our current state saved us months of debugging later.

## Resource Requests and Limits Are Not Optional

This was our first painful lesson. Without proper resource requests and limits, the Kubernetes scheduler has no idea how to place your pods efficiently.

```yaml
resources:
  requests:
    cpu: 100m
    memory: 128Mi
  limits:
    cpu: 500m
    memory: 512Mi
```

We started by monitoring our existing resource usage with Prometheus and set requests based on the P95 values. Limits were set at roughly 2-3x the requests based on observed peaks.

## Liveness vs. Readiness Probes

Getting probes wrong can cascade failures across your entire cluster. Here's the key distinction:

- **Liveness probes**: "Is the process stuck?" — Kubernetes restarts the container if this fails
- **Readiness probes**: "Can you handle traffic?" — Kubernetes removes the pod from the service if this fails

We had a bug where our liveness probe hit a database-dependent endpoint. When the database had a brief hiccup, Kubernetes restarted all our pods simultaneously, turning a minor issue into a complete outage.

**Rule of thumb**: Liveness probes should check the process, not its dependencies.

## GitOps Changed Everything

Adopting ArgoCD for GitOps-style deployments was a game-changer:

- Every change to infrastructure is a pull request
- We have a complete audit trail of who changed what and when
- Rollbacks are just reverting a commit
- No more "I ran kubectl apply on my laptop" incidents

## Monitoring from Day One

We deployed our monitoring stack *before* migrating any workloads:

- **Prometheus** for metrics collection
- **Grafana** for dashboards and alerting
- **Loki** for log aggregation

Having observability in place before the migration meant we could compare behavior and catch issues immediately rather than debugging blind.

## Key Takeaways

1. **Don't rush the migration** — incremental moves with canary deployments are safer
2. **Invest in observability first** — you can't fix what you can't see
3. **Automate everything** — manual kubectl commands in production are a risk
4. **Document your decisions** — future you will thank past you
5. **Practice failure scenarios** — chaos engineering isn't optional anymore

The migration wasn't easy, but the result — faster deployments, better scaling, and improved reliability — made it absolutely worth it.
