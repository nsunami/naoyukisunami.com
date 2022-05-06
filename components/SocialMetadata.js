import React from "react";

export const SocialMetadata = () => {
  return (
    <>
      {/* Twitter */}
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:creator" content={"@n_sunami"} key="twhandle" />
      {/* Open Graph */}
      <meta
        property="og:url"
        content={"https://www.naoyukisunami.com/"}
        key="ogurl"
      />
      <meta property="og:image" content={"/social-image.png"} key="ogimage" />
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
        content={"Behavioral Data Scientist"}
        key="ogdesc"
      />
    </>
  );
};
