(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return g});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(175),s=n.n(l),c=n(162),m=n(171),p=n(161),d=n(156),u=n(163),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e="#"+this.props.pageContext.tag,t=s()(this,"props.data.allMarkdownRemark.edges");return i.a.createElement(c.a,{location:this.props.location,title:e},i.a.createElement(d.a,{title:e}),i.a.createElement(u.a,{title:e}),i.a.createElement(p.a,null,i.a.createElement("h1",null,'Posts tagged as "',this.props.pageContext.tag,'"'),i.a.createElement(m.a,{posts:t})))},t}(i.a.Component);t.default=f;var g="2856378740"},152:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return u});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(151),s=n.n(l);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(154),m=n.n(c);n.d(t,"PageRenderer",function(){return m.a});var p=n(32);n.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),u=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},153:function(e,t){e.exports={siteTitle:"Personal site of Eka, front-end web developer in Yogyakarta, Indonesia",siteDescription:"👋 Hey I'm a Gatsby starter!",authorName:"Eka",twitterUsername:"_ekaoddlass",authorAvatar:"/images/avatar.jpeg",multilangPosts:!0,authorDescription:'\n  For the last decade, Maxence Poutord has worked with a variety of web technologies. He is currently focused on front-end development.\n  On his day to day job, he is working as a senior front-end engineer at VSware. He is also a frequent tech speaker and a mentor.\n  As a new digital nomad, he is living where the WIFI and sun is 😎 <br>\n  Do you want to know more? <a href="https://www.maxpou.fr/about" target="_blank">Visit my website!</a>\n  ',siteUrl:"https://maxpou.github.io/",disqusSiteUrl:"https://www.maxpou.fr/",pathPrefix:"/gatsby-starter-morning-dew",siteCover:"/images/cover.jpg",googleAnalyticsId:"UA-67868977-1",background_color:"#ffffff",theme_color:"#222222",display:"minimal-ui",icon:"src/assets/gatsby-icon.png",postsPerPage:5,disqusShortname:"maxpou",headerLinks:[{label:"🏡",url:"/"},{label:"Blog",url:"/blog"},{label:"About",url:"/about"},{label:"Installation",url:"/how-to-install"}],websiteHost:{name:"GitHub",url:"https://github.com"},footerLinks:[["Explore",{label:"Blog",url:"/blog"},{label:"About",url:"/about"},{label:"Installation",url:"/install"}],["Follow the author",{label:"Github",url:"https://github.com/maxpou/gatsby-starter-morning-dew",iconClassName:"fa fa-github"},{label:"Website",url:"https://www.maxpou.fr",iconClassName:"fa fa-globe"},{label:"Twitter",url:"https://twitter.com/ekaoddlass",iconClassName:"fa fa-twitter"}]]}},154:function(e,t,n){var a;e.exports=(a=n(157))&&a.default||a},155:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return m});var a=n(168),r=n.n(a),o=n(150),i=n(152);function l(){var e=r()(['\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: "Lato", sans-serif;\n  color: #222222cc;\n  background-color: #e8e8e8;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  vertical-align: middle;\n  border: 0;\n}\n\na {\n  text-decoration: none;\n  color: rgba(34,34,34,0.8);\n}\n\nul,\nol {\n  padding-left: 2em;\n  margin: 1em 0 0 0;\n}\n']);return l=function(){return e},e}var s=Object(o.a)(l()),c=Object(o.b)(i.Link).withConfig({displayName:"Commons__StyledLink",componentId:"sc-1aaxjtz-0"})(["border-bottom:1px dotted rgba(162,162,162,0.8);&:hover{border-bottom-style:solid;}"]),m=o.b.p.withConfig({displayName:"Commons__Text",componentId:"sc-1aaxjtz-1"})(["line-height:1.6;margin:1em 0 0 0;"])},156:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(169),s=n.n(l),c=n(152),m=n(153),p=n.n(m),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.isBlogPost,n=e.path,a=void 0===n?"":n,r=e.lang,o=void 0===r?"en":r,l=this.props.title?this.props.title+" | "+p.a.siteTitle:p.a.siteTitle,m=p.a.siteUrl.substring(0,p.a.siteUrl.length-1),d=""+m+(this.props.imageFb||this.props.cover||Object(c.withPrefix)(p.a.siteCover)),u=""+m+(this.props.imageTw||this.props.cover||Object(c.withPrefix)(p.a.siteCover)),f=this.props.description||p.a.siteDescription;return i.a.createElement(s.a,{title:l},i.a.createElement("html",{lang:o}),i.a.createElement("meta",{name:"description",content:f}),i.a.createElement("meta",{property:"og:url",content:m+Object(c.withPrefix)(a)}),i.a.createElement("meta",{property:"og:type",content:t?"article":"website"}),i.a.createElement("meta",{property:"og:title",content:l}),i.a.createElement("meta",{property:"og:description",content:f}),i.a.createElement("meta",{property:"og:image",content:d}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:p.a.twitterUsername}),i.a.createElement("meta",{name:"twitter:title",content:l}),i.a.createElement("meta",{name:"twitter:description",content:f}),i.a.createElement("meta",{name:"twitter:image",content:u}))},t}(i.a.Component);t.a=d},157:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(51),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},158:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(150),s=n(159),c=n.n(s),m=n(160),p=n.n(m),d=l.b.img.withConfig({displayName:"Flag__FlagImage",componentId:"sc-1n11y4w-0"})(["padding-right:0.5rem;padding-bottom:0.2rem;"]),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.language,t="en"===e?c.a:p.a,n="en"===e?"english post":"post en francais";return i.a.createElement(d,{src:t,alt:n,className:"flag"})},t}(i.a.Component);t.a=u},159:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAPASURBVDhPrZT7TxxVFMc/d/Y1wA60gEXwgSU1ViJiJSZqahpqm2jQNlRSHyhRa6wG2kTSpK3v2BptoyRorJi2IaLlF/qyoTU0sRAClDaKRqQ0qShElkJBdpd9z+7seGfQ+A9wkjvn3jnn3Pu93/PNFaY0lsiUf/2SmNATuqm4XYyPTRMOJ3C7nXbAMNLkF2STEw+RXAjjyvYSVDXmZhZwOBYx6HoKrWA5N4dmEZoXMflFi1m4YT2B4jtp2ncKny9IVpZKPK5TXfswlROXmb84RO5DFXQXP8CpYwOoqptoTOeWu4p4uUQn9/pfOJ7dgjJcupZIbz/qd8fZv7+aqk33EgpF5bkmQsivIqwZpviPWpNQIsnjm8p5S7tGocckZ8d2Bn6ZRLnUe5U9v+cSy9QI7H2Xmur7adxbJRHOEgrrSAikg0GIxQlHdK4vJNi5tZSNF9pQn6jC/WQV9fXfcrFvDCUm4fZ3DbPxkxEGVz2C75k6ykWAr1q3k6llkAyESM3NkwyG8OZnc2BdFsUnW1nW/CndvjQVFR/QNzBBTKJlzh8wdcM0o3raDOiWUEzTiEQWJ9Imd71njq5Zb3vbov/H/OGEXWfVW/uI0Z17TPObE5DhwVKcrTqLq/QiR44cDeGRsUQCQ6ITiiJzFhMVyafFq4SFeOEpFKtG98trzAdJ+YMYATmkTwcX7JGamSXpm7K9tTb8AdIyx47JPKvOqk/LzcVky1Ezs6cP0+0mlTSIRHWE1J1wyWEYhAd/InVjDueKfLwPVmDEJQrVIxEpqMLA5XJYgiNWuRZx4tzP5pU/YkQjCQqLNHY8Lwtm5zC+78JdV8vE1m3Mdxwnt6aG4o6j9tXDXd14VAfHnKu52j+CV+qytCQDh4uy95sPHGFqPETrkTpibe0kG17jHXMNpy/N8ljoCoHh31hx3z00/qhwvvMymxs246t/g1u7z/LZjTy+bjqMW3hQIpEYr7xey9i1j1l4cRuJM508V9ZIU8sZ8papiLSFRfIhuc3P1/i8uZ11lQe5/exJbpOkn5s4xJu7X0J3ulD2HXyaw4dqmVp5N9Ml5awaKaWz7bzcIFMOgWIRS8r2dpvJprfnV8nVq/y5YQvZPT/Q0L6btx/NQ8mYGmew4A4u7PqQso+GiYyNoWkSkXBgJPxMy3q/c7ntrbX1X5NiVpQUqwtr+bJjiKzRIcyZScTfwYDpTybxJBPkZMkOWofbJuQrEifqVFFk99Kyi5mpOF6vKmOLGrTABoOyefEkNxUVSipsBS6NLeHjCP8AHa/ubr0bcvgAAAAASUVORK5CYII="},160:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKnRFWHRDcmVhdGlvbiBUaW1lAEZyIDkgTm92IDIwMDcgMTY6Mjc6MDYgKzAxMDAM3ZqdAAAAB3RJTUUH1wsJDxwzm8yD2gAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAHdSURBVHjaxVO7btRAFD3zsNdxQIqQqBYk6ghR0tLxDXwCn8HX0BGlo6JCKAqCIlVCkCjQLgkgxbDB67XnlXPHRvsJGWs04/F53ZkxcNtNvXj5arG7uzf3KfJNIUSFh/dn2H9Qc564pABj0Z98hPt6CsVHyzoCrv6tl/bO3Xvzx0+fw0cveugp8ORRjWf7e1lAmi5naKuAHh2QSI4RpQbeHBzOrSfIBQ/vAzWRE8jcDQNCQk4g3TtinMtkEUHfIaxW0OIqa55rMTEYu3xXWm/r1AYZ5AYolqoJ6D4dU1jDCjFkMrskoFukKG2ys56EFEkyC38abE4+w1z/heU3K0Q/OUchp0zNxCCuU+sX37F69xZYt9CmQDHKUYDwQMPIONpo9A5o2gH9ZoPBjwKm5h78/glcs+ayylQtpyOjQFLS2fnovMHrDz9wftEixTACJKY1HFUmZbIk5GM4WkWyI/bg+AJD0CjKAmVhMlFPpchmaWUm4v8+HrElAu/Pmnz+RWmReGmU2QoYmRsRQHYdE2CbYMOaF51HOWNt1iJSoODFqeSd9YlAUe2g4+gVpjI0ZmoUspe/Lpfdqpk7cWH0QN0zVeOwqxnSjJtYVWi/fEO/DlDWZ2chX4W0vO1/EbgBHTnbxGOMU+UAAAAASUVORK5CYII="},161:function(e,t,n){"use strict";var a=n(150).b.main.attrs({role:"main"}).withConfig({displayName:"Wrapper",componentId:"xmiwfw-0"})(["position:relative;border-radius:3px;width:80%;max-width:770px;border-bottom:1px solid #ebf2f6;word-wrap:break-word;background-color:#fff;margin:0px auto 30px auto;top:30px;padding:50px;box-shadow:0 0 0 0,0 6px 12px rgba(0,0,0,0.1);@media (max-width:780px){width:90%;padding:25px;}"]);t.a=a},162:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(152),s=n(150),c=s.b.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-1glvhxp-0"})(["position:fixed;top:0;left:0;margin:0 auto;display:block;width:100%;z-index:1000;background-color:rgba(32,35,42,0.85);"]),m=s.b.nav.withConfig({displayName:"Header__HeaderNav",componentId:"sc-1glvhxp-1"})(["margin-left:auto;margin-right:auto;height:60px;display:flex;flex-direction:row;max-width:1260px;z-index:1000;justify-content:flex-start;overflow-x:auto;overflow-y:hidden;"]),p=Object(s.b)(l.Link).withConfig({displayName:"Header__HeaderLink",componentId:"sc-1glvhxp-2"})(["position:relative;display:flex;align-items:center;color:#fff;border:0;margin:0;margin-right:0.5rem;padding-left:20px;padding-right:20px;min-width:42px;z-index:10;"]),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.headerLinks;return i.a.createElement(c,null,i.a.createElement(m,null,e.map(function(e,t){return i.a.createElement(p,{to:e.url,key:"header-link-"+t},e.label)})))},t}(i.a.Component),u=(n(164),n(165),s.b.footer.withConfig({displayName:"Footer__FooterWrapper",componentId:"t92llg-0"})(["text-align:left;padding-top:30px;padding-bottom:50px;background-color:rgba(32,35,42,0.85);color:#ffffff;padding-left:20px;padding-right:20px;margin:0 auto;& nav{display:flex;flex-flow:row wrap;align-items:flex-start;max-width:900px;margin:0 auto;.footer-col{flex:1 auto;display:inline-flex;flex-direction:column;margin-bottom:1em;padding-right:1em;}}& a{color:#ffffff;font-weight:bold;&:hover{color:#e8e8e8;border-bottom:1px dotted #e8e8e8;}}.footer-col > p{margin:0;}.footer-title{margin:0 0 1rem;}.footer-item{padding:0.25rem 0;color:#ffffff;}.footer-heart{color:red;}.footer-item-text{padding:0.1rem 0;color:#ffffff;}.footer-header{order:1;margin:0 0.25rem;margin-right:0.25rem;padding:0.25rem;}@media (max-width:564px){.footer-col:first-child{width:100%;}}"])),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.siteConfig,t=e.authorName,n=e.footerLinks,a=e.websiteHost,r=function(e){var t=e.item;return"string"==typeof t?i.a.createElement("h5",{className:"footer-title",key:t},t):t.url.startsWith("/")?i.a.createElement("span",{className:"footer-item"},i.a.createElement(l.Link,{className:"footer-link",to:t.url},t.label)):i.a.createElement("span",{className:"footer-item"},i.a.createElement("a",{className:"footer-link",href:t.url},t.label))},o=function(e){var t=e.column;return i.a.createElement("div",{className:"footer-col"},t.map(function(e,t){return i.a.createElement(r,{item:e,key:"footer-column-item-"+t})}))};return i.a.createElement(u,null,i.a.createElement("nav",null,i.a.createElement("div",{className:"footer-col"},i.a.createElement("h5",{className:"footer-title"},t," © 2018"),i.a.createElement("p",{className:"footer-item-text"},"Built with"," ",i.a.createElement("a",{className:"footer-link",href:"https://www.gatsbyjs.org"},"Gatsby"),"."),i.a.createElement("p",{className:"footer-item-text"},"Theme using"," ",i.a.createElement("a",{className:"footer-link",href:"https://github.com/maxpou/gatsby-starter-morning-dew"},"gatsby-starter-morning-dew"),"."),i.a.createElement("p",{className:"footer-item-text"},"Hosted with ",i.a.createElement("span",{className:"footer-heart"},"❤")," by"," ",i.a.createElement("a",{className:"footer-link",href:a.url},a.name),".")),n.map(function(e,t){return i.a.createElement(o,{column:e,key:"footer-column-"+t})})))},t}(i.a.Component),g=n(153),h=n.n(g),b=(n(166),n(155)),w=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement(o.Fragment,null,i.a.createElement(b.a,null),i.a.createElement(d,{headerLinks:h.a.headerLinks}),i.a.createElement("div",{style:{margin:"60px 0"}},e),i.a.createElement(f,{siteConfig:h.a}))},t}(i.a.Component);t.a=w},163:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(152),s=n(153),c=n.n(s),m=n(150),p=m.b.div.withConfig({displayName:"Hero__HeroContainer",componentId:"sc-1wsaguq-0"})(["position:relative;display:table;width:100%;height:400px;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:cover;"]),d=m.b.div.withConfig({displayName:"Hero__TitleContainer",componentId:"sc-1wsaguq-1"})(["display:table-cell;vertical-align:middle;text-align:center;width:100%;"]),u=m.b.h1.withConfig({displayName:"Hero__HeroTitle",componentId:"sc-1wsaguq-2"})(["font-weight:700;font-size:3rem;margin:10px 60px;color:#fff;text-shadow:1px 1px 4px rgba(34,34,34,0.6);"]),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.heroImg||Object(l.withPrefix)(c.a.siteCover),t=this.props.title;return i.a.createElement(p,{style:{backgroundImage:'url("'+e+'")'}},i.a.createElement(d,null,i.a.createElement(u,null,t)))},t}(i.a.Component);t.a=f},167:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(152),s=n(150),c=s.b.div.withConfig({displayName:"TagList__ListContainer",componentId:"tgjq80-0"})(["display:inline;margin:0 0.5rem 0 0;color:#7f7e7e;"]),m=Object(s.b)(l.Link).withConfig({displayName:"TagList__TagListItem",componentId:"tgjq80-1"})(["margin-left:0.3rem;color:#7f7e7e;&:hover{border-bottom:1px dotted #7f7e7e;}&:before{content:'#';}"]),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.tags,n=e.icon;return i.a.createElement(c,null,!0===n&&i.a.createElement(o.Fragment,null,"🏷 "),t.map(function(e,n){return i.a.createElement(o.Fragment,{key:"tag-list-"+n},i.a.createElement(m,{to:"tags/"+e},e),n<t.length-1?", ":"")}))},t}(i.a.Component);t.a=p},171:function(e,t,n){"use strict";n(33);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(152),s=n(158),c=n(167),m=n(153),p=n.n(m),d=n(150),u=d.b.article.withConfig({displayName:"PostsListItem__Post",componentId:"sc-1pv5de6-0"})(["border-bottom:1px solid rgba(214,209,230,0.5);padding-bottom:1.25rem;"]),f=Object(d.b)(l.Link).withConfig({displayName:"PostsListItem__ReadPost",componentId:"sc-1pv5de6-1"})(["display:block;font-size:0.75rem;margin-top:1rem;text-align:center;text-decoration:none;text-transform:uppercase;letter-spacing:0.05em;line-height:2;&:hover{background-color:rgba(32,35,42,0.85);border-radius:0.25rem;color:#fff;}"]),g=d.b.time.withConfig({displayName:"PostsListItem__PostDate",componentId:"sc-1pv5de6-2"})(["color:#7f7e7e;&:before{content:'🗓';margin-right:0.2rem;}"]),h=d.b.header.withConfig({displayName:"PostsListItem__PostHeader",componentId:"sc-1pv5de6-3"})(["padding:1em 0;"]),b=d.b.p.withConfig({displayName:"PostsListItem__Excerpt",componentId:"sc-1pv5de6-4"})(["line-height:1.45;padding-bottom:0.5em;"]),w=Object(d.b)(l.Link).withConfig({displayName:"PostsListItem__PostTitleLink",componentId:"sc-1pv5de6-5"})(["&:hover{border-bottom:1px dotted rgba(34,34,34,0.8);}"]),y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.excerpt,a=e.slug,r=e.post_format,o=e.date,l=e.language,m=e.tags;return i.a.createElement(u,null,i.a.createElement(h,null,i.a.createElement("h2",null,i.a.createElement(w,{to:r+"/"+a},p.a.multilangPosts&&i.a.createElement(s.a,{language:l}),t))),i.a.createElement("section",null,i.a.createElement(b,{dangerouslySetInnerHTML:{__html:n}})),i.a.createElement("footer",null,i.a.createElement(c.a,{tags:m,icon:!0}),i.a.createElement(g,null,o),i.a.createElement(f,{to:r+"/"+a},"Read post ›")))},t}(i.a.Component),x=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.posts;return i.a.createElement(o.Fragment,null,e.map(function(e){var t={title:e.node.frontmatter.title,excerpt:e.node.excerpt,slug:e.node.frontmatter.slug,post_format:e.node.frontmatter.post_format||"notes",date:e.node.frontmatter.date,language:e.node.frontmatter.language||"fr",tags:e.node.frontmatter.tags||[]};return i.a.createElement(y,Object.assign({key:t.slug},t))}))},t}(i.a.Component);t.a=x}}]);
//# sourceMappingURL=component---src-templates-tag-js-2bac7e94bc80e731c4f1.js.map