module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: "morihirok's Blog", // Navigation and Site Title
  siteTitleAlt: "morihirok's Blog", // Alternative Site title for SEO
  siteUrl: "https://morihirok.netlify.com", // Domain of your site. No trailing slash!
  siteLanguage: "ja", // Language Tag on <html> element
  siteBanner: "/social/banner.jpg", // Your image for og:image tag. You can find it in the /static folder
  favicon: "src/favicon.png", // Your image for favicons. You can find it in the /src folder
  siteDescription: "morihirokは日本のソフトウエアエンジニアです。", // Your site description

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "@_morihirok", // Twitter Username - Optional
  ogSiteName: "morihirok's Blog", // Facebook Site Name - Optional

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: "#3498DB",
  backgroundColor: "#2b2e3c",

  // Settings for typography.js
  headerFontFamily: "Bitter",
  bodyFontFamily: "Open Sans",
  baseFontSize: "18px"
};
