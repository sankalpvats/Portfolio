/** Vercel supplies the production hostname automatically. */
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'https://sankalp-vats-portfolio.vatssankalp19.chatgpt.site';
