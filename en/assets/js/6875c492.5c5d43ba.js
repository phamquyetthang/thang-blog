"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8610],{99703:(e,t,n)=>{n.d(t,{Z:()=>r});n(67294);var a=n(95999),s=n(32244),i=n(85893);function r(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(s.Z,{permalink:n,title:(0,i.jsx)(a.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,i.jsx)(s.Z,{permalink:r,title:(0,i.jsx)(a.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},79985:(e,t,n)=>{n.d(t,{Z:()=>r});n(67294);var a=n(9460),s=n(47756),i=n(85893);function r(e){let{items:t,component:n=s.Z}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(a.n,{content:t,children:(0,i.jsx)(n,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},41714:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(67294);var a=n(90512),s=n(95999),i=n(88824),r=n(1944),l=n(35281),o=n(33692),c=n(61460),d=n(99703),g=n(90197),u=n(79985),h=n(22212),p=n(92503),m=n(85893);function x(e){const t=function(){const{selectMessage:e}=(0,i.c)();return t=>e(t,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function b(e){let{tag:t}=e;const n=x(t);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.d,{title:n}),(0,m.jsx)(g.Z,{tag:"blog_tags_posts"})]})}function j(e){let{tag:t,items:n,sidebar:a,listMetadata:i}=e;const r=x(t);return(0,m.jsxs)(c.Z,{sidebar:a,children:[t.unlisted&&(0,m.jsx)(h.Z,{}),(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(p.Z,{as:"h1",children:r}),(0,m.jsx)(o.Z,{href:t.allTagsPath,children:(0,m.jsx)(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,m.jsx)(u.Z,{items:n}),(0,m.jsx)(d.Z,{metadata:i})]})}function f(e){return(0,m.jsxs)(r.FG,{className:(0,a.Z)(l.k.wrapper.blogPages,l.k.page.blogTagPostListPage),children:[(0,m.jsx)(b,{...e}),(0,m.jsx)(j,{...e})]})}},22212:(e,t,n)=>{n.d(t,{Z:()=>h});n(67294);var a=n(90512),s=n(95999),i=n(35742),r=n(85893);function l(){return(0,r.jsx)(s.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(s.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(i.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(35281),g=n(59047);function u(e){let{className:t}=e;return(0,r.jsx)(g.Z,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,a.Z)(t,d.k.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function h(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(u,{...e})]})}},63446:(e,t,n)=>{n.d(t,{Z:()=>r});n(67294);var a=n(99861),s=n(92949),i=n(85893);function r(){const{colorMode:e}=(0,s.I)();return(0,i.jsx)(a.Z,{repo:"phamquyetthang/thang-blog",repoId:"R_kgDOK8jsrw",category:"General",categoryId:"DIC_kwDOK8jsr84CcCw2",mapping:"pathname",term:"Hi, please login by github to join the comments",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"en",loading:"lazy"})}},47756:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),s=n(9460),i=n(2438),r=n(63446),l=n(85893);function o(e){const{isBlogPostPage:t}=(0,s.C)();return(0,a.useEffect)((()=>{let e=setInterval((()=>{window?.adsbygoogle&&((()=>{try{const e=window?.adsbygoogle||[];console.log({adsbygoogle:e}),e.push({})}catch(e){console.error(e)}})(),clearInterval(e))}),300);return()=>{clearInterval(e)}}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.Z,{...e}),t&&(0,l.jsx)(r.Z,{}),(0,l.jsx)("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-7099570900840464","data-ad-slot":"1422617058","data-ad-format":"auto","data-full-width-responsive":"true"})]})}}}]);