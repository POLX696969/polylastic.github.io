(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(t,e,n){"use strict";n(24);var o=n(0);o.a.filter("toCurrency",(function(t){return"number"!=typeof t?t:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(t)})),o.a.filter("toCurrency8",(function(t){return"number"!=typeof t?t:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:8}).format(t)})),o.a.filter("timeString",(function(t){var e=t,n=((new Date).getTime()-e)/1e3,o=Math.floor(n/86400),r=Math.floor((n-86400*o)/3600),c=Math.floor((n-86400*o-3600*r)/60),l=Math.floor(n-86400*o-3600*r-60*c);return r<10&&(r=""+r),c<10&&(c=""+c),l<10&&(l=""+l),0==o&&0==r&&0==c?l+"s ago":0==o&&0==r?c+"m ago":0==o?r+"h ago":o+"d ago"})),o.a.filter("isNew",(function(t){var e=t;return((new Date).getTime()-e)/1e3/86400<=3?"new":"old"}))},115:function(t,e,n){"use strict";n.r(e);var o=n(6),r=(n(49),n(52),n(39),n(44),{data:function(){return{contractAddress:"0xbe510da084e084e3c27b20d79c135dc841135c7f",currentPrice:"...",v2price:"...",marketCap:"...",totalBurnt:"...",lastBurnDate:"...",lastBurnAmount:"...",polling:null,updateInterval:null,updated:null,dataURL:"",tick:0}},methods:{copyURI:function(t){var e=this;t.preventDefault(),navigator.clipboard.writeText(t.currentTarget.getAttribute("href")).then((function(){e.$toast.success("Contract address copied!",{duration:2e3})}),(function(){}))},startPolling:function(){var t=this;this.polling=setInterval(this.getData.bind(this),6e4),this.updateInterval=setInterval((function(){t.tick++}),1e3)},endPolling:function(){clearInterval(this.updateInterval),clearInterval(this.polling)},getData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var data,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://api.coingecko.com/api/v3/coins/binance-smart-chain/contract/0xbe510da084e084e3c27b20d79c135dc841135c7f");case 2:return data=e.sent,t.currentPrice=data.market_data.current_price.usd,t.marketCap=data.market_data.market_cap.usd,e.next=7,t.$axios.$get(t.dataURL);case 7:n=e.sent,t.v2price=n.v2price,t.totalBurnt=n.totalBurnt,t.lastBurnDate=new Date(n.lastBurnDate.replace(/-/g,"/")+" UTC"),t.lastBurnAmount=n.lastBurnAmount,t.updated=new Date;case 13:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.dataURL=window.location.href.indexOf("polylastic.info")>-1?"https://polylastic.info/real-burn.json?".concat((new Date).getTime()):"burn.json",this.getData=this.getData.bind(this),this.getData(),this.startPolling()},unmounted:function(){this.endPolling()}}),c=(n(218),n(25)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("header",[n("div",{staticClass:"contractAddress",attrs:{href:t.contractAddress},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.copyURI.apply(null,arguments)}}},[n("span",[t._v(t._s(t.contractAddress))]),n("img",{attrs:{src:"/copy.svg",alt:""}})]),t._v(" "),n("nuxt-link",{staticClass:"h1",attrs:{to:"/"}},[n("h1",{staticClass:"title"},[t._v("\n        Polylastic"),n("span",[t._v(".info")])])]),t._v(" "),n("div",{staticClass:"topbar"},[n("div",{staticClass:"info"},[n("span",[t._v("v1 Price: "),n("strong",[t._v(t._s(t._f("toCurrency8")(t.currentPrice)))])]),t._v(" "),n("span",[t._v("v2 Price: "),n("strong",[t._v(t._s(t._f("toCurrency8")(t.v2price)))])]),t._v(" "),n("span",[t._v("Market Cap: "),n("strong",[t._v(t._s(t._f("toCurrency")(t.marketCap)))])])]),t._v(" "),n("div",{staticClass:"info"},[n("span",[t._v("Total Burnt: "),n("strong",[t._v(t._s(t.totalBurnt))])]),t._v(" "),n("span",[t._v("Last Burn: "),n("strong",[t._v(t._s(t.lastBurnAmount)+" ("+t._s(t._f("timeString")(t.lastBurnDate))+")")])])]),t._v(" "),n("div",{staticClass:"info updated"},[n("span",[t._v("Updated: "),t.tick?n("strong",[t._v(t._s(t._f("timeString")(t.updated)))]):n("strong",[t._v("0s ago")])])])]),t._v(" "),n("div",{staticClass:"links"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("News")]),t._v(" "),n("nuxt-link",{attrs:{to:"/faq"}},[t._v("FAQ")]),t._v(" "),n("nuxt-link",{attrs:{to:"/links"}},[t._v("Links")]),t._v(" "),n("nuxt-link",{attrs:{to:"/exchanges"}},[t._v("Exchanges")]),t._v(" "),n("nuxt-link",{staticClass:"infolink",attrs:{to:"/about"}},[n("img",{attrs:{width:"19",src:"/info.svg",alt:""}})])],1)],1)])}),[],!1,null,"779dd4aa",null);e.default=component.exports;installComponents(component,{Header:n(115).default})},13:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"e",(function(){return r})),n.d(e,"a",(function(){return c})),n.d(e,"d",(function(){return l})),n.d(e,"f",(function(){return d})),n.d(e,"b",(function(){return f}));var o="SET_FAQ",r="UPDATE_FAQ",c="ADD_FAQ",l="SET_LINKS",d="UPDATE_LINK",f="ADD_LINK"},154:function(t,e,n){var content=n(217);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("56b15182",content,!0,{sourceMap:!1})},155:function(t,e,n){var content=n(219);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("5ef3b728",content,!0,{sourceMap:!1})},156:function(t,e,n){var content=n(221);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("04b4c5dd",content,!0,{sourceMap:!1})},166:function(t,e,n){"use strict";n.r(e);n(220);var o=n(25),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("footer",[n("div",{staticClass:"links"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("News")]),t._v(" "),n("nuxt-link",{attrs:{to:"/faq"}},[t._v("FAQ")]),t._v(" "),n("nuxt-link",{attrs:{to:"/links"}},[t._v("Links")]),t._v(" "),n("nuxt-link",{attrs:{to:"/"}},[t._v("Exchanges")])],1),t._v(" "),n("br"),n("br"),t._v(" "),n("small",[t._v("\n      Polylastic and the Polyastic logo are copyright 2021 Sync Index. All Rights Reserved.\n    ")])])])}),[],!1,null,"295934bb",null);e.default=component.exports;installComponents(component,{Footer:n(166).default})},175:function(t,e,n){"use strict";var o={head:function(){return{titleTemplate:"%s — Polylastic.info"}}},r=(n(216),n(25)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("Header"),t._v(" "),n("Nuxt",{staticStyle:{flex:"1"}}),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:n(115).default,Footer:n(166).default})},176:function(t,e,n){n(177),t.exports=n(178)},216:function(t,e,n){"use strict";n(154)},217:function(t,e,n){var o=n(54)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;900&display=swap);"]),o.push([t.i,'html{overflow:hidden}body,html{height:100%}body{overflow:auto;margin:0}main{display:flex;flex-direction:column;width:100%}html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}a{color:#3178f2;font-weight:700}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}ul,ul li{list-style-type:none;padding:0;margin:0;scroll-margin-top:2em}ul{width:90%;max-width:640px;margin:0 auto}ul li{padding:1rem}.container{margin:1rem auto 0;display:flex;justify-content:center;align-items:flex-start;text-align:center;width:100%}.container.inside{max-width:100%;padding:0 1rem}.title{font-family:"Poppins","Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:700;font-size:4rem;color:#3178f2}.title span{color:#aaa}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}footer a,header a{color:#333;font-weight:700}main{min-height:100vh}',""]),t.exports=o},218:function(t,e,n){"use strict";n(155)},219:function(t,e,n){var o=n(54)(!1);o.push([t.i,'.container[data-v-779dd4aa]{margin-top:0;display:block}a.h1[data-v-779dd4aa]{text-decoration:none}h1[data-v-779dd4aa]{font-size:2rem;margin-bottom:.5rem}header[data-v-779dd4aa]{background-color:#fefefe;width:100%;padding:0 1rem 1rem}.links[data-v-779dd4aa]{position:relative}.links a+a[data-v-779dd4aa]{margin-left:.3rem}.info[data-v-779dd4aa]{padding:0;font-size:.85rem}.info span+span[data-v-779dd4aa]:before{content:"• "}@media (max-width:640px){h1[data-v-779dd4aa]{font-size:2rem}.info span[data-v-779dd4aa]{display:block}.info span+span[data-v-779dd4aa]:before{content:""}}.infolink[data-v-779dd4aa]{top:1rem;position:absolute;opacity:.4;transition:opacity .2s}.updated[data-v-779dd4aa]{margin-top:.8rem;border-radius:1rem;background:#eee;display:inline-block;padding:.3rem .8rem}.infolink[data-v-779dd4aa]:hover{opacity:1}.contractAddress span[data-v-779dd4aa]{display:inline-block;overflow:hidden;text-overflow:ellipsis;max-width:80%;margin-right:.2rem}.contractAddress[data-v-779dd4aa]{cursor:pointer;margin:0 auto 1rem;font-size:.8rem;padding:.25rem 0;background:#3178f2;color:#fff;border-bottom-right-radius:3rem;border-bottom-left-radius:3rem;max-width:360px;position:relative}.contractAddress img[data-v-779dd4aa]{height:.7rem;top:-.2rem;position:relative;left:.1rem}',""]),t.exports=o},220:function(t,e,n){"use strict";n(156)},221:function(t,e,n){var o=n(54)(!1);o.push([t.i,"footer[data-v-295934bb]{margin-top:3rem;padding:2rem;display:block;background:#f0f0f0;width:100%}",""]),t.exports=o},222:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return l})),n.d(e,"getters",(function(){return d})),n.d(e,"mutations",(function(){return f})),n.d(e,"actions",(function(){return h}));var o,r=n(8),c=(n(23),n(24),n(157),n(31),n(13)),l=function(){return{faqCounter:0,faq:[]}},d={getFaqsCounter:function(s){return s.faq.length},getFaqs:function(s){return s.faq},getFaqsCategorized:function(s){var t={};return s.faq.forEach((function(e){e.cat in t||(t[e.cat]=[]),t[e.cat].push(e)})),t},getFaqBySub:function(s){return function(t){return void 0===t?s.faq:s.faq.filter((function(e){return e.sub===t}))[0]||null}},getFaqStatusById:function(s){return function(t){return void 0===t?null:s.faq.filter((function(e){return e.sub===t}))[0].status||null}},getFaqById:function(s){return function(t){return void 0===t?null:s.faq.filter((function(e){return e.id===t}))[0]||null}}},f=(o={},Object(r.a)(o,c.c,(function(t,e){t.faq=e})),Object(r.a)(o,c.a,(function(t,e){t.faq.push(e)})),Object(r.a)(o,c.e,(function(t,e){var n=t.faq,o=null;n.forEach((function(t,i){t.sub===e.sub&&(o=i)})),o&&Object.keys(e).forEach((function(t){n[o][t]=JSON.parse(JSON.stringify(e[t]))})),t.faq=n})),o),h={addFaq:function(t,e){(0,t.commit)("".concat(c.a),e)},updateFaq:function(t,e){(0,t.commit)("".concat(c.e),e)}}},225:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return l})),n.d(e,"getters",(function(){return d})),n.d(e,"mutations",(function(){return f})),n.d(e,"actions",(function(){return h}));var o,r=n(8),c=(n(24),n(23),n(157),n(31),n(13)),l=function(){return{linksCounter:0,links:[]}},d={getLinksCounter:function(s){return s.links.length},getLinks:function(s){return s.links},getLinkById:function(s){return function(t){return void 0===t?null:s.links.filter((function(e){return e.id===t}))[0]||null}}},f=(o={},Object(r.a)(o,c.d,(function(t,e){t.links=e})),Object(r.a)(o,c.b,(function(t,e){t.links.push(e)})),Object(r.a)(o,c.f,(function(t,e){var n=t.links,o=null;n.forEach((function(t,i){t.sub===e.sub&&(o=i)})),o&&Object.keys(e).forEach((function(t){n[o][t]=JSON.parse(JSON.stringify(e[t]))})),t.links=n})),o),h={addLink:function(t,e){(0,t.commit)("".concat(c.b),e)},updateLink:function(t,e){(0,t.commit)("".concat(c.f),e)}}},243:function(t,e,n){"use strict";n.r(e),n.d(e,"actions",(function(){return l}));var o=[{cat:"general",id:"what-is-polylastic",q:"What is Polylastic?",a:"Polylastic is a market index, research, education and data analysis organization that seeks to elucidate the often complex projects moving the sector forward. While this complexity is a natural by-product of innovation, our aim is to stop it from hampering adoption and investor confidence."},{cat:"general",id:"what-is-polx",q:"What is POLX?",a:'POLX is a governance token to run the Polylastic platform. The Polylastic platform will offer index style investment opportunities for both bull and bear markets, hence minimizing risk long term. Polylastic however is not limited to indices, it will be offering much more: <br><br><em>"The original plans have changed massively. We have widened our scope and plan to cater to the entire digital asset space instead of just focusing on EFi. So, we will be able to release investable indices around 7-8 weeks. But we may release our ecosystem builder services even before" </em><br><br>Read more <a href="https://polylastic.medium.com/building-the-ecosystem-brick-by-brick-aa30a30ec6b4">here</a> and at <a href="www.polylastic.io">www.polylastic.io</a>'},{cat:"general",id:"project-launch",q:"When is POLX first project launching?",a:"The first expected project (index) to be launched in July / August 2021"},{cat:"general",id:"why-the-large-market-cap",q:"Why is the market cap so large?",a:"The net market cap is 10 billion tokens. 90% of these coins are vested, and will be released slowly to advance projects / rewards. Polx Is a double deflationary token, which means the more it is utilized it is burnt from the bottom ecosystem, ultimately creating scarcity."},{cat:"general",id:"market-cap",q:"Where can I see charts and current market cap?",a:'You can see the current market cap at the top of this page and on <a href="https://www.coingecko.com/en/coins/polylastic" target="_blank">coingecko.com/en/coins/polylastic</a>'},{cat:"upgrade",id:"how-to-upgrade",q:"How do I upgrade my tokens from v1 to v2?",a:'KuCoin will upgrade your coins automatically, Pancakeswap users will need to be upgraded manually via the <a href="https://portal.polylastic.io" target="_blank">portal</a>'},{cat:"upgrade",id:"kucoin-upgrade-status",q:"Has the token upgrade completed on KuCoin?",a:'KuCoin is experiencing unforseen delays as they are implementing Polylastic\'s dynamic tax and burn algorithm, which is the first of its kind on the exchange.  While the upgrade is expected to be completed in the coming days, only the KuCoin team can say for sure when the upgrade will be complete, but <a href="https://twitter.com/KuCoinMod/status/1404533507389419527" target="_blank">they have stated</a> they will make an announcement when it happens.  '},{cat:"general",id:"when-is-the-ido",q:"When is IDO?",a:"The Polylastic IDO is finished. We are available to trade on the open market."},{cat:"burning",id:"transaction-burns",q:"We are burning with every transaction, right? Or is it burned manually?",a:"It gets collected automatically after every transaction. We then manually burn it periodically"},{cat:"token",id:"contract-address",q:"What is the token contract address?",a:"The contract address is: <pre>0xbe510da084e084e3c27b20d79c135dc841135c7f</pre><br> If given an option between v1 or v2, opt for v2"},{cat:"general",id:"where-is-the-roadmap",q:"What’s the roadmap for this project?",a:"The project is currently in an evolutionary phase, new collaborations are announced routinely. The team refrains from giving hard target endpoints as it’s an ever evolving subject. Moreover, roadmaps are subjective and usually do nothigh expectations. Case in point , etherum and scalability, polkadot parachains, cardano and smart contracts etc. Follow our telegram and Twitter channels to keep informed."},{cat:"general",id:"why-so-quiet",q:"Ok I get it, the project is great! But why is no one talking about it on social media? Why don't you advertise it to the masses via influencers?",a:"We don’t believe in creating hype, shilling the coins to manipulate the project is not our policy. We prefer to use this money to advance the project than to give out coins to shillers, only to be rug pulled. We will have formal advertisement via explanatory videos once our projects are close to launch."},{cat:"general",id:"when-listing",q:"Will you be listing the token on Binance, Bitrue, Coinbase, Gemini anytime soon? ",a:"All future listings in any exchange will be announced ahead of time. No timeline will be provided prematurely."},{cat:"general",id:"where-to-buy",q:"Where can I buy POLX?",a:'You can buy POLX on <a href="https://www.kucoin.com/ucenter/signup?rcode=rJB42Q6" target="_blank">KuCoin</a> (CEX) or <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xbe510da084e084e3c27b20d79c135dc841135c7f" target="_blank">Pancakeswap</a> (DEX)'},{cat:"staking/farming",id:"how-to-stake",q:"How do I stake / LP farm my coins? And what’s the APY?",a:'Current staking options include KuCoin exchange which will likely stop in July and is fixed at 60%.  Staking on Binance smart chain (not exchange) provides flexible APY. You can transfer funds to your MetaMask wallet, and connect your wallet to our farming portal at <a href="https://farm.polylastic.io" target="_blank">farm.polylastic.io</a> to start passive earning. You will need to transfer some BNB and your tokens to start the process. For LP you will need 1:1 POLX:BNB to farm. <br> For more, see: <a href="https://polylastic.medium.com/ready-set-farm-2d3f0715d53e" target="_blank">Ready, Set…FARM!</a>'},{cat:"price",id:"price-predictions",q:"What is the year end price prediction?",a:'We do not speculate POLX price in this group. Please join <a href="https://t.me/polylastictraders">POLXARMY</a> group for price discussion'},{cat:"staking/farming",id:"price-prediction",q:"How can I confirm/see the rewards I'm earning from the actual LP staking / providing liquidity on PancakeSwap?",a:"You will receive rewards if you added LP to the pool, however, there is currently no way to see the amount real time."},{cat:"general",id:"keep-me-updated",q:"How can I stay up to date on announcements / news?",a:'Join our <a href="https://t.me/polylasticchannel">announcement telegram group</a> - or visit the <a href="https://polylastic.medium.com">Offical Polylastic Blog</a> '}],r=[{id:"polylastic-website",title:"Polylastic Website",desc:"Main Polylastic website with project and platform details, whitepaper and team information",url:"https://polylastic.io/"},{id:"polylastic-portal",title:"Polylastic Upgrade and Airdrop Portal",desc:"Upgrade your tokens and collect your airdrop rewards (if you participated)",url:"https://portal.polylastic.io/"},{id:"polylastic-farm",title:"Polylastic Farming Portal",desc:"Stake your tokens or provide POLX-BNB liquidity for generous APY returns and rewards",url:"https://portal.polylastic.io/"}],c=n(13),l={nuxtServerInit:function(t){var e=t.commit;e("faq/".concat(c.c),o),e("links/".concat(c.d),r)}}}},[[176,8,1,9]]]);