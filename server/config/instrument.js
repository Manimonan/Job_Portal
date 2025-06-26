// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"


Sentry.init({
  dsn: "https://2636c94557349c574049f79562668cc8@o4509407109906432.ingest.us.sentry.io/4509407115739136",
   integrations:[
    Sentry.mongooseIntegration()
  ]

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  // sendDefaultPii: true,
});