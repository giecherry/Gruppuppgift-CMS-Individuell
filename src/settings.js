// src/settings.js

const SETTINGS = {
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000',
  CMS_PUBLIC_KEY: process.env.NEXT_PUBLIC_STORYBLOK_DELIVERY_API_ACCESS_TOKEN,
};

export default SETTINGS;
