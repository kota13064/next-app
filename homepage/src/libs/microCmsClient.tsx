import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: String(process.env.SERVICE_DOMAIN),
  apiKey: String(process.env.API_KEY),
});