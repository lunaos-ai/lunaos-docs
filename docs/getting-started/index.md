# Getting Started

Welcome to **LunaOS** — your AI-powered development team. LunaOS provides 28 specialized AI agents that cover your entire software development lifecycle.

## What is LunaOS?

LunaOS is an AI agent platform that runs on Cloudflare's global edge. Each agent is a domain expert — trained on real-world engineering patterns — that can review your code, generate tests, write documentation, plan deployments, and more.

## How It Works

```
You → Agent → LLM → Structured Output
         ↕
    RAG Context (optional)
```

1. **Choose an agent** — each one specializes in a specific SDLC phase
2. **Provide context** — your code, requirements, or project details
3. **Get expert output** — structured, actionable results streamed in real-time

## Three Ways to Use LunaOS

### 1. CLI (Recommended)

```bash
npm install -g @luna-agents/cli
luna login
luna run code-review --context "your code here"
```

### 2. REST API

```bash
curl -X POST https://api.lunaos.ai/agents/execute \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"agent": "code-review", "context": "your code here"}'
```

### 3. Dashboard

Visit [agents.lunaos.ai](https://agents.lunaos.ai) for a visual interface with real-time streaming.

## Free Tier Agents

These 6 agents are available on the free plan (100 executions/month):

| Agent | Purpose |
|-------|---------|
| 🔍 [Code Review](/agents/code-review) | Find bugs, security issues, and code smells |
| 🧪 [Testing](/agents/testing-validation) | Generate unit tests, integration tests, E2E tests |
| 📝 [Documentation](/agents/documentation) | Write JSDoc, README, API docs, guides |
| 🚀 [Deployment](/agents/deployment) | CI/CD pipelines, Docker configs, cloud deployments |
| 📋 [Requirements](/agents/requirements-analyzer) | Analyze and structure project requirements |
| 🏗️ [Architecture](/agents/design-architect) | System design, component architecture, data flow |

## Next Steps

- **[Quickstart →](/getting-started/quickstart)** — Get running in 2 minutes
- **[Agent Catalog →](/agents/)** — Browse all 28 agents
- **[API Reference →](/api/)** — Full REST API documentation
