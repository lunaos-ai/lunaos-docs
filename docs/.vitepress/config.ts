import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'LunaOS',
    description: 'AI-Powered Development Intelligence — 28 specialized agents for your entire SDLC',
    ignoreDeadLinks: true,
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
        ['meta', { name: 'theme-color', content: '#6366f1' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:title', content: 'LunaOS Docs' }],
        ['meta', { property: 'og:description', content: 'AI-Powered Development Intelligence — documentation for the LunaOS agent platform' }],
        ['meta', { property: 'og:url', content: 'https://docs.lunaos.ai' }],
    ],

    themeConfig: {
        logo: '/logo.svg',
        siteTitle: 'LunaOS Docs',

        nav: [
            { text: 'Guide', link: '/getting-started/' },
            { text: 'Agents', link: '/agents/' },
            { text: 'API Reference', link: '/api/' },
            { text: 'Pricing', link: 'https://agents.lunaos.ai/pricing' },
            { text: 'Dashboard', link: 'https://agents.lunaos.ai/dashboard' },
        ],

        sidebar: {
            '/getting-started/': [
                {
                    text: 'Getting Started',
                    items: [
                        { text: 'Introduction', link: '/getting-started/' },
                        { text: 'Quickstart', link: '/getting-started/quickstart' },
                        { text: 'Configuration', link: '/getting-started/configuration' },
                    ],
                },
            ],
            '/agents/': [
                {
                    text: 'Agent Catalog',
                    items: [
                        { text: 'Overview', link: '/agents/' },
                    ],
                },
                {
                    text: '🆓 Free Agents',
                    items: [
                        { text: '🔍 Code Review', link: '/agents/code-review' },
                        { text: '🧪 Testing & Validation', link: '/agents/testing-validation' },
                        { text: '📝 Documentation', link: '/agents/documentation' },
                        { text: '🚀 Deployment', link: '/agents/deployment' },
                        { text: '📋 Requirements Analyzer', link: '/agents/requirements-analyzer' },
                        { text: '🏗️ Design Architect', link: '/agents/design-architect' },
                    ],
                },
                {
                    text: '⚡ Pro Agents',
                    items: [
                        { text: '🔐 Authentication', link: '/agents/auth' },
                        { text: '🗄️ Database', link: '/agents/database' },
                        { text: '🌐 REST API Generator', link: '/agents/api-generator' },
                        { text: '☁️ Cloudflare', link: '/agents/cloudflare' },
                        { text: '🐳 Docker', link: '/agents/docker' },
                        { text: '🔍 SEO', link: '/agents/seo' },
                        { text: '📊 Analytics', link: '/agents/analytics' },
                        { text: '🛡️ 365 Security', link: '/agents/365-security' },
                        { text: '📡 Monitoring', link: '/agents/monitoring-observability' },
                        { text: '🧠 RAG Enhanced', link: '/agents/rag-enhanced' },
                        { text: '👁️ GLM Vision', link: '/agents/glm-vision' },
                        { text: '📱 HIG (Human Interface)', link: '/agents/hig' },
                        { text: '🍋 LemonSqueezy', link: '/agents/lemonsqueezy' },
                        { text: '📘 User Guide', link: '/agents/user-guide' },
                        { text: '🎯 Task Planner', link: '/agents/task-planner' },
                        { text: '⚙️ Task Executor', link: '/agents/task-executor' },
                        { text: '🤖 OpenAI App', link: '/agents/openai-app' },
                        { text: '🔎 RAG', link: '/agents/rag' },
                        { text: '🏃 Run', link: '/agents/run' },
                        { text: '🖥️ UI Fix', link: '/agents/ui-fix' },
                        { text: '🧪 UI Test', link: '/agents/ui-test' },
                        { text: '📋 Post-Launch Review', link: '/agents/post-launch-review' },
                    ],
                },
            ],
            '/api/': [
                {
                    text: 'API Reference',
                    items: [
                        { text: 'Overview', link: '/api/' },
                        { text: 'Authentication', link: '/api/authentication' },
                        { text: 'Agents', link: '/api/agents' },
                        { text: 'Chains', link: '/api/chains' },
                        { text: 'RAG', link: '/api/rag' },
                        { text: 'Billing', link: '/api/billing' },
                        { text: 'API Keys', link: '/api/api-keys' },
                    ],
                },
            ],
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/lunaos-ai' },
        ],

        footer: {
            message: 'Built with ❤️ for developers',
            copyright: '© 2026 LunaOS',
        },

        search: {
            provider: 'local',
        },

        editLink: {
            pattern: 'https://github.com/lunaos-ai/lunaos-docs/edit/main/docs/:path',
            text: 'Edit this page on GitHub',
        },
    },
})
