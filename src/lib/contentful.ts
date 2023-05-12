import contentful from "contentful";

export const contentfulClient = contentful.createClient({
  space: import.meta.env._CONTENT_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env._CONTENT_PREVIEW_ACCESS_KEY
    : import.meta.env._CONTENT_PUBLISHED_ACCESS_KEY,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
