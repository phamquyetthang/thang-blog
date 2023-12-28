import React, { useEffect } from "react";
import { useBlogPost } from "@docusaurus/theme-common/internal";
import BlogPostItem from "@theme-original/BlogPostItem";
import GiscusComponent from "@site/src/components/GiscusComponent";

export default function BlogPostItemWrapper(props) {
  const { metadata, isBlogPostPage } = useBlogPost();

  const { frontMatter } = metadata;
  const { enableComments } = frontMatter;

  useEffect(() => {
    const pushAd = () => {
      try {
        const adsbygoogle = (window as any)?.adsbygoogle || []
        console.log({ adsbygoogle })
        adsbygoogle.push({})
      } catch (e) {
        console.error(e)
      }
    }

    let interval = setInterval(() => {
      // Check if Adsense script is loaded every 300ms
      if ((window as any)?.adsbygoogle) {
        pushAd()
        // clear the interval once the ad is pushed so that function isn't called indefinitely
        clearInterval(interval)
      }
    }, 300)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <BlogPostItem {...props} />
      {enableComments && isBlogPostPage && <GiscusComponent />}


      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-7099570900840464"
        data-ad-slot="1422617058"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </>
  );
}
