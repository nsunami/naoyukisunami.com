import React, { useEffect } from "react";

export const SocialMetadata = () => {
  return (
    <>
      <meta name="description" content="Data Expert/Software Dev" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="naoyukisunami.com" />
      <meta property="twitter:url" content="https://www.naoyukisunami.com/" />
      <meta name="twitter:title" content="Naoyuki Sunami's Portfolio" />
      <meta name="twitter:description" content="Data Expert/Software Dev" />
      <meta
        name="twitter:image"
        content="https://naoyukisunami.com/social-image.jpg"
      />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={"https://www.naoyukisunami.com/"}
        key="ogurl"
      />
      <meta
        property="og:image"
        content={"https://naoyukisunami.com/social-image.jpg"}
        key="ogimage"
      />
      <meta
        property="og:site_name"
        content={"Naoyuki Sunami"}
        key="ogsitename"
      />
      <meta
        property="og:title"
        content={"Naoyuki Sunami's Portfolio"}
        key="ogtitle"
      />
      <meta
        property="og:description"
        content={"Data Expert/Software Dev"}
        key="ogdesc"
      />
    </>
  );
};
