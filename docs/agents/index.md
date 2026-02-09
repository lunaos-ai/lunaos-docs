# Agent Catalog

LunaOS provides **28 specialized AI agents** covering your entire software development lifecycle.

## Tiers

| Tier | Agents | Monthly Executions | Price |
|------|--------|-------------------|-------|
| 🆓 **Free** | 6 core agents | 100 | $0 |
| ⚡ **Pro** | All 28+ agents | 10,000 | $29/mo |
| 🏢 **Team** | All 28+ agents | 100,000 | $79/mo |

## Free Agents

These agents are available on every plan:

| Agent | Category | Use Case |
|-------|----------|----------|
| [🔍 Code Review](/agents/code-review) | Core | Find bugs, security issues, code smells |
| [🧪 Testing & Validation](/agents/testing-validation) | Core | Generate test suites |
| [📝 Documentation](/agents/documentation) | Core | Write API docs, README, guides |
| [🚀 Deployment](/agents/deployment) | DevOps | CI/CD, Docker, cloud configs |
| [📋 Requirements](/agents/requirements-analyzer) | Planning | Analyze & structure requirements |
| [🏗️ Design Architect](/agents/design-architect) | Planning | System design, architecture |

## Pro Agents

Unlock all 28+ agents with a Pro subscription:

### Solution Agents

| Agent | Use Case |
|-------|----------|
| [🔐 Authentication](/agents/auth) | JWT, OAuth, RBAC, session management |
| [🗄️ Database](/agents/database) | Schema design, migrations, query optimization |
| [🌐 API Generator](/agents/api-generator) | REST API scaffolding with OpenAPI docs |
| [☁️ Cloudflare](/agents/cloudflare) | Workers, D1, Pages, R2 deployment |
| [🐳 Docker](/agents/docker) | Containerization, Compose, orchestration |
| [🍋 LemonSqueezy](/agents/lemonsqueezy) | Payment integration, SaaS billing |
| [🤖 OpenAI App](/agents/openai-app) | OpenAI API integration patterns |

### Quality & Security

| Agent | Use Case |
|-------|----------|
| [🛡️ 365 Security](/agents/365-security) | Enterprise security hardening |
| [📡 Monitoring](/agents/monitoring-observability) | Observability, logging, alerting |
| [📋 Post-Launch Review](/agents/post-launch-review) | Production readiness audit |

### AI & Intelligence

| Agent | Use Case |
|-------|----------|
| [🧠 RAG Enhanced](/agents/rag-enhanced) | Context-aware code analysis |
| [👁️ GLM Vision](/agents/glm-vision) | Visual reasoning, diagram analysis |
| [🔎 RAG](/agents/rag) | RAG pipeline implementation |

### Frontend & UX

| Agent | Use Case |
|-------|----------|
| [🔍 SEO](/agents/seo) | SEO optimization, meta tags, structured data |
| [📱 HIG](/agents/hig) | Human Interface Guidelines compliance |
| [🖥️ UI Fix](/agents/ui-fix) | Debug and fix UI issues |
| [🧪 UI Test](/agents/ui-test) | Visual regression, E2E testing |
| [📘 User Guide](/agents/user-guide) | End-user documentation |

### Workflow & Planning

| Agent | Use Case |
|-------|----------|
| [📊 Analytics](/agents/analytics) | Analytics implementation, tracking |
| [🎯 Task Planner](/agents/task-planner) | Break down features into tasks |
| [⚙️ Task Executor](/agents/task-executor) | Execute planned tasks step-by-step |
| [🏃 Run](/agents/run) | Quick code execution and prototyping |

## Using Agents

### Via CLI

```bash
luna run <agent-slug> --context "your input"
```

### Via REST API

```bash
curl -X POST https://api.lunaos.ai/agents/execute \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"agent": "<agent-slug>", "context": "your input"}'
```

### Via Dashboard

Visit [agents.lunaos.ai](https://agents.lunaos.ai) and select an agent from the visual catalog.
