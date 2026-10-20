# Section 14 "Digital Security and Privacy" · Rule 13 Verification Record (2026-10-20)

Task Origin: A pasted summary of Anthropic's regional restrictions and account-ban practices was compared against the book. The book already covered the criminal risk of operating an AI relay proxy station (Section 11, Rule 19) and the data and malicious-code risks of using one (Section 14, Rule 10). It did not cover the account-level consequences for ordinary buyers: shared, resold, or region-workaround accounts can be suspended without refund, and resellers can substitute a cheaper model. Rule 13 was added for that gap.

Scope Decision: The pasted material's detection-signal table and "common ban triggers" list were not adopted. The book's rule tells readers to use official channels; it does not describe how providers detect accounts or how detection might be avoided.

## Sources Verified for Rule 13

| URL | Verified | Source Excerpt |
|---|---|---|
| <https://www.anthropic.com/legal/consumer-terms> | Yes (2026-10-20) | Effective 8 October 2025. "You may not share your Account login information, Anthropic API key, or Account credentials with anyone else." Reselling and "bypassing any of our systems or protective measures" prohibited. "We may suspend or terminate your access to the Services (including any Subscriptions) at any time without notice to you." On termination for violation of the Terms with a Subscription: "you will not be entitled to any refund." |
| <https://www.anthropic.com/legal/commercial-terms> | Yes (2026-10-20) | Effective 17 June 2025. Customer may not "resell the Services except as expressly approved by Anthropic." Suspension permitted for use in violation of Sections D.1 and D.2. "Customer is responsible for all activity under its account." Section D.2 incorporates the supported-regions policy. No refund clause found for prepaid credits; the rule therefore makes no refund claim for API credits. |
| <https://www.anthropic.com/supported-countries> | Yes (2026-10-20) | Page header "Effective November 12, 2026". "Any country or region not listed is unsupported." Covers "Use by persons while physically located in an unsupported region, including users and personnel of otherwise supported entities" and "Use by entities that are majority-owned or controlled, directly or indirectly, by persons or entities in unsupported regions". Australia and Taiwan listed; mainland China, Hong Kong, and Macau not listed. |
| <https://www.anthropic.com/news/updating-restrictions-of-sales-to-unsupported-regions> | Yes (2026-10-20) | Dated 4 September 2025. Entities "more than 50% owned, directly or indirectly, by companies headquartered in unsupported regions" are covered "regardless of where they operate". Names China only; notes access "through subsidiaries incorporated in other countries". |
| <https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks> | Yes (2026-10-20) | Dated 23 February 2026. Three labs (DeepSeek, Moonshot AI, MiniMax) generated over 16 million exchanges through approximately 24,000 fraudulent accounts, using commercial proxy services that resell Claude access. Alibaba is not named. |
| <https://arxiv.org/abs/2504.04715> | Yes (2026-10-20) | Cai W, Shi T, Zhao X, Song D. Are You Getting What You Pay For? Auditing Model Substitution in LLM APIs. NeurIPS 2025. Providers can covertly serve cheaper or quantized models; output-based statistical tests are query-intensive and miss subtle substitutions. |

## Claims in the Pasted Material Not Adopted

| Claim | Finding |
|---|---|
| Supported Regions Policy "effective 2026-05-12" | Page reads "Effective November 12, 2026" when accessed 2026-10-20. |
| Ownership rule sits in the Acceptable Use Policy | The ownership rule appears in the 4 September 2025 announcement and the Supported Regions Policy. |
| Restriction names China, Russia, Iran, and North Korea | Anthropic's announcement names China only; the four-country list comes from press coverage. |
| Singapore subsidiaries, VPN traffic, and cloud-account workarounds "confirmed" blocked | Not stated in Anthropic's sources. The announcement refers generally to subsidiaries in other countries. |
| "25,000+ accounts linked to Alibaba ... 28.8M+ model queries" in Q2 2026 | Not supported. Anthropic's February 2026 report gives about 24,000 accounts and over 16 million exchanges across DeepSeek, Moonshot AI, and MiniMax. |
| +86 phone rejection, UnionPay/Alipay/WeChat Pay rejection, ID-based suspension by region, "extremely low" appeal success | No primary source found. Anthropic's help article on identity verification (support.claude.com, article 14328960, updated 11 August 2026) confirms Persona-based ID checks "for a few use cases" but does not mention regions or appeal rates. |
