/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  defaultTitle: "Xians OG Generator",
  description: "OG Image Generator (using Vercel OG)",
  canonical: "https://vercel-og-beta.vercel.app/",
  openGraph: {
    url: "https://vercel-og-beta.vercel.app/",
    title: "Xians OG Generator",
    description: "OG Image Generator (using Vercel OG)",
    type: "website",
    images: [
      {
        url: "https://vercel-og-beta.vercel.app/api/og?title=Xians%20OG&desc=OG%20Image%20Generator%20(using%20Vercel%20OG)&imgUrl=https://www.saashub.com/images/app/service_logos/61/ad5f7085bd71/large.png?1587515045&siteName=vercel-og-beta.vercel.app",
        alt: "vercel-og-beta.vercel.app og-image",
        width: 800,
        height: 600,
      },
    ],
    site_name: "xians-og",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png",
    },
  ],
};

export default defaultSEOConfig;
