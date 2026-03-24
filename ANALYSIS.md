# Nutrivanne Technical Analysis

## Current State Audit
The live website `www.nutrivanne.com.mx` is built using the **Webnode** site builder.

### Key Issues Identified:
1.  **Payment Friction:** The site uses **PayPal No-Code Payment (NCP)** links. This causes a full-page redirect to PayPal's external site. On mobile connections, this "hands-off" often feels like the site has "frozen" or is unresponsive, which aligns with the principal complaint.
2.  **Fragmented Journey:** Supplements are sold via a TikTok Showcase redirect rather than an integrated shop.
3.  **Performance:** Site builder templates often have heavy "bloat" (unused JS/CSS) which affects mobile performance.
4.  **UX Clutter:** Intrusive promotional popups and lack of sticky navigation hinder the mobile user experience.

## "Singleton" Hypothesis Analysis
The user suspected a singleton instance bottleneck.
- **Finding:** Currently, there is no custom backend on the main provider.
- **Interpretation:** If a bottleneck exists, it is likely in the **SaaS provider's overhead** or the **PayPal redirect latency**.
- **Recommendation:** Moving to a custom-built solution with **Serverless** handlers (using Vercel/Next.js) will eliminate "singleton" concerns by design, as each request is handled by an isolated, auto-scaling instance.

## Basic Pen-Testing (Baseline)
- **SSL:** Correctly configured (Cloudfront/Webnode).
- **Input Validation:** Since it's a SaaS builder, most inputs (if any) are handled by Webnode's proprietary logic.
- **Exposure:** No obvious API keys or environment variables are exposed in the client-side source.
