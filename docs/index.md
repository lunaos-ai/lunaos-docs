---
layout: home

hero:
  name: "LunaOS"
  text: "AI-Powered Development Intelligence"
  tagline: "140+ commands across 33 MCP servers for your entire SDLC — code review, testing, security, deployment, and more."
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started/
    - theme: alt
      text: API Reference
      link: /api/
    - theme: alt
      text: View on GitHub
      link: https://github.com/lunaos-ai

features:
  - icon: 🤖
    title: 140+ Commands
    details: From code review to security hardening, each command is a domain expert trained on real-world engineering patterns.
  - icon: ⛓️
    title: Agent Chains
    details: Chain agents together for multi-step workflows — analyze requirements → architect → implement → test → deploy.
  - icon: 🔍
    title: RAG-Enhanced Context
    details: Point agents at your codebase for deep contextual understanding. Vectorize + AI search for relevant code.
  - icon: ⚡
    title: Multi-Provider LLMs
    details: Choose your preferred LLM — DeepSeek, Claude, GPT-4o — with automatic fallback and cost optimization.
  - icon: 🔑
    title: API Keys & Rate Limiting
    details: Generate API keys for CI/CD integration. Tier-based rate limiting with transparent usage headers.
  - icon: 🛡️
    title: Enterprise Security
    details: A+ security headers, HSTS, strict CSP, audit logging, and per-request performance tracking.
---

## Quick Start

```bash
# Install the CLI
npm install -g @luna-agents/cli

# Login
luna login

# Run your first agent
luna run code-review --context "Review this PR for security issues"
```

Or use the **REST API** directly:

```bash
curl -X POST https://api.lunaos.ai/agents/execute \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "agent": "code-review",
    "context": "function login(user, pass) { return db.query(`SELECT * FROM users WHERE email='${user}'`) }"
  }'
```

## Architecture

LunaOS runs entirely on **Cloudflare's global edge network**:

| Service | Technology | Purpose |
|---------|-----------|---------|
| **API** | Cloudflare Workers + Hono | Sub-20ms cold start, 300+ edge locations |
| **Database** | D1 (SQLite) | 11 tables — users, executions, subscriptions, API keys, audit log |
| **Cache** | KV | Rate limiting, session management, metrics |
| **Search** | Vectorize | RAG pipeline for codebase understanding |
| **AI** | Workers AI + External LLMs | DeepSeek, Claude, GPT-4o |

## Pricing

| | Free ($0) | Pro ($29/mo) | Team ($79/mo) |
|---|---|---|---|
| **Commands** | Unlimited | Unlimited | Unlimited |
| **API Keys** | BYOK | Managed keys | Managed keys |
| **Access** | CLI + Dashboard + Studio | CLI + Dashboard + Studio | CLI + Dashboard + Studio |
| **MCP Servers** | — | 33 MCP servers | 33 MCP servers |
| **RAG & Visual QA** | — | ✅ | ✅ |
| **Rate Limit** | 60 req/min | 600 req/min | 6,000 req/min |
| **Team & SSO** | — | — | SSO/SAML, shared memory, audit logs |
| **Support** | Community | Priority | Dedicated + SLA |
