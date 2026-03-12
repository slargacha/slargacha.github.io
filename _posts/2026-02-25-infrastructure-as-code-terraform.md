---
layout: post
title: "Infrastructure as Code: Why Terraform Changed How I Work"
date: 2026-02-25
tags: [Terraform, IaC, AWS, Automation]
excerpt: "How adopting Terraform transformed our infrastructure management from manual chaos to reproducible, version-controlled systems."
---

There was a time when provisioning infrastructure meant logging into the AWS console, clicking through wizards, and hoping you documented every step in a wiki page that nobody would ever update.

Terraform changed that completely.

## The Problem with ClickOps

Manual infrastructure management creates several problems:

- **Drift**: The actual state diverges from what you think you have
- **No audit trail**: Who changed that security group rule? Nobody knows
- **Inconsistency**: Dev, staging, and production are "basically the same" but never truly identical
- **Slow recovery**: Recreating an environment from memory during an incident is terrifying

## The Terraform Mental Model

The core concept is simple: **you describe what you want, and Terraform figures out how to get there.**

```hcl
resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true

  tags = {
    Name        = "production-vpc"
    Environment = "production"
    ManagedBy   = "terraform"
  }
}
```

This declarative approach means:
- Your infrastructure is in version control
- Changes go through code review
- You can reproduce any environment exactly
- Rollbacks are just `git revert`

## Modules: The Real Power

Writing raw Terraform resources for every project isn't scalable. Modules let you create reusable building blocks:

```hcl
module "web_service" {
  source = "./modules/ecs-service"

  name          = "api-gateway"
  container_port = 8080
  desired_count  = 3
  environment    = "production"
}
```

We built an internal module library that any team can use. New microservice? Five lines of Terraform and you have a fully configured ECS service with load balancing, auto-scaling, and monitoring.

## State Management Matters

One of the biggest lessons: **your Terraform state is critical infrastructure**.

We use:
- **S3 backend** with encryption for state storage
- **DynamoDB** for state locking to prevent concurrent modifications
- **Separate state files** per environment to limit blast radius

## CI/CD for Infrastructure

We treat infrastructure changes the same as application code:

1. Engineer opens a PR with Terraform changes
2. CI runs `terraform plan` and posts the output to the PR
3. Team reviews the plan — what will be created, modified, or destroyed
4. After approval and merge, CD runs `terraform apply`

This workflow catches mistakes before they reach production and gives everyone visibility into infrastructure changes.

## Lessons Learned

- **Start small**: Don't try to import your entire infrastructure at once
- **Use workspaces or separate state files**: Keep environments isolated
- **Tag everything**: Future you needs to know what resources belong to which project
- **Lock provider versions**: An unexpected provider update can break your deployments
- **Write tests**: Tools like `terratest` catch issues before they reach real infrastructure

Infrastructure as code isn't just a best practice — it's a fundamental shift in how you think about and manage your systems. Once you make the switch, you'll never want to go back to the console.
