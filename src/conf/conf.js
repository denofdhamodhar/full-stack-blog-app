const conf = {
  PROJECT_ID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  PROJECT_NAME: String(import.meta.env.VITE_APPWRITE_PROJECT_NAME),
  ENDPOINT_URL: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
  DATABASE_ID: String(import.meta.env.VITE_APPWRITE_DATABASE),
  COLLECTION_ID: String(import.meta.env.VITE_APPWRITE_COLLECTION),
  BUCKET_ID: String(import.meta.env.VITE_APPWRITE_BUCKET),
};

export const TinyMCE_KEY = import.meta.env.VITE_TINY_MCE_KEY

export default conf;
