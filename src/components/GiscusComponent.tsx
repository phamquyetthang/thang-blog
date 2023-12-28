import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus    
      repo="phamquyetthang/thang-blog"
      repoId="R_kgDOK8jsrw"
      category="General"
      categoryId="DIC_kwDOK8jsr84CcCw2" 
      mapping="url"
      term="Hi, please login by github to join the comments"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="en"
      loading="lazy"
    />
  );
}