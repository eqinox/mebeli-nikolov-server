module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "img-src": ["'self'", "data:", "blob:", "https://market-assets.strapi.io", "https://mebeli-nikolov.s3.eu-north-1.amazonaws.com"], // Update to your new S3 bucket URL
          "script-src": ["'self'", "'unsafe-inline'", "blob:"], // Allow inline scripts and blob URIs
          "worker-src": ["'self'", "blob:"], // Allow worker sources from blob URIs
          "connect-src": ["'self'", "blob:", "https://mebeli-nikolov.s3.eu-north-1.amazonaws.com"], // Update to your new S3 bucket URL
          "default-src": ["'self'"], // Default fallback for other unspecified directives
          "frame-src": ["'self'"], // Allow iframes from self (adjust if you use iframes from other sources)
        },
      },
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
