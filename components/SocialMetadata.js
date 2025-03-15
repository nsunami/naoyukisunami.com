import React from "react"

export const SocialMetadata = () => {
  const description = "Data Steward"
  const title = "Nami Sunami"
  const ogImage = "/social-image.jpg"
  return (
    <>
      <meta name="description" content={description} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="naoyukisunami.com" />
      <meta property="twitter:url" content="https://www.naoyukisunami.com/" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={"https://www.naoyukisunami.com/"}
        key="ogurl"
      />
      <meta property="og:image" content={ogImage} key="ogimage" />
      <meta property="og:site_name" content={title} key="ogsitename" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
    </>
  )
}
