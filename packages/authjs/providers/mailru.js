/**
 * Add Mailru login to your page.
 *
 * ### Setup
 *
 * #### Callback URL
 * ```
 * https://example.com/api/auth/callback/mailru
 * ```
 *
 * #### Configuration
 *```js
 * import Auth from "@auth/core"
 * import Mailru from "@auth/core/providers/mailru"
 *
 * const request = new Request(origin)
 * const response = await Auth(request, {
 *   providers: [Mailru({ clientId: MAILRU_CLIENT_ID, clientSecret: MAILRU_CLIENT_SECRET })],
 * })
 * ```
 *
 * ### Resources
 *
 *  - [Mailru OAuth documentation](https://o2.mail.ru/docs)
 *  - [Mailru app console](https://o2.mail.ru/app/)
 *
 * ### Notes
 *
 * By default, Auth.js assumes that the Mailru provider is
 * based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.
 *
 * :::tip
 *
 * The Mailru provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/ma.ts).
 * To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/providers/custom-provider#override-default-options).
 *
 * :::
 *
 * :::info **Disclaimer**
 *
 * If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).
 *
 * Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from
 * the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec,
 * we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).
 *
 * :::
 */
export default function Mailru(config) {
    return {
        id: "mailru",
        name: "Mail.ru",
        type: "oauth",
        authorization: "https://oauth.mail.ru/login?scope=userinfo",
        token: "https://oauth.mail.ru/token",
        userinfo: "https://oauth.mail.ru/userinfo",
        options: config,
    };
}
