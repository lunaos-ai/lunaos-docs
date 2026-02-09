# Billing API

Manage subscriptions, view usage, and handle payments via Stripe.

## Create Checkout Session

Start a Stripe Checkout flow to upgrade.

```http
POST /billing/checkout
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body:**

```json
{
  "tier": "pro"
}
```

| Field | Type | Values | Description |
|-------|------|--------|-------------|
| `tier` | string | `pro`, `team` | Target subscription tier |

**Response (200):**

```json
{
  "checkoutUrl": "https://checkout.stripe.com/c/pay_...",
  "sessionId": "cs_live_..."
}
```

Redirect the user to `checkoutUrl` to complete payment.

---

## Get Subscription

View the current user's subscription status.

```http
GET /billing/subscription
Authorization: Bearer <token>
```

**Response (200) — Subscribed user:**

```json
{
  "tier": "pro",
  "status": "active",
  "subscription": {
    "id": "sub_...",
    "currentPeriodStart": "2026-02-01T00:00:00.000Z",
    "currentPeriodEnd": "2026-03-01T00:00:00.000Z",
    "cancelAtPeriodEnd": false,
    "createdAt": "2026-02-01T00:00:00.000Z"
  }
}
```

**Response (200) — Free user:**

```json
{
  "tier": "free",
  "status": "active",
  "subscription": null
}
```

---

## Get Usage

View monthly execution usage and limits.

```http
GET /billing/usage
Authorization: Bearer <token>
```

**Response (200):**

```json
{
  "tier": "pro",
  "used": 247,
  "limit": 10000,
  "remaining": 9753,
  "percentUsed": 2,
  "period": {
    "start": "2026-02-01T00:00:00.000Z",
    "end": "2026-02-28T23:59:59.000Z"
  },
  "breakdown": {
    "agentExecutions": 189,
    "chainExecutions": 58
  }
}
```

::: warning
When `percentUsed` ≥ 80%, a `warning` field is included:
```json
{
  "warning": "80% of monthly limit reached"
}
```
:::

---

## Cancel Subscription

Cancel at end of current billing period.

```http
POST /billing/cancel
Authorization: Bearer <token>
```

**Response (200):**

```json
{
  "message": "Subscription will be canceled at end of billing period"
}
```

---

## Customer Portal

Create a Stripe Customer Portal session for managing billing.

```http
POST /billing/portal
Authorization: Bearer <token>
```

**Response (200):**

```json
{
  "portalUrl": "https://billing.stripe.com/p/session/..."
}
```

Redirect the user to `portalUrl` to manage their subscription, update payment method, or view invoices.

---

## Plan Comparison

| Feature | Free | Pro ($29/mo) | Team ($79/mo) |
|---------|------|-------------|---------------|
| Agents | 6 | 28+ | 28+ |
| Executions | 100/mo | 10,000/mo | 100,000/mo |
| Rate limit | 60/min | 600/min | 6,000/min |
| Token tracking | ✅ | ✅ | ✅ |
| Priority support | ❌ | ✅ | ✅ |
