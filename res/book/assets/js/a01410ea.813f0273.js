"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[923],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),h=n,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5812:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],c={},l="Oracle system",s={unversionedId:"concepts/USDi/OracleSystem",id:"concepts/USDi/OracleSystem",title:"Oracle system",description:"Price oracles play a crucial role in every protocol that lends assets against collateral. An accurate, reliable, and safe oracle for asset prices allows loans and liquidations to occur quickly without errors. Interest Protocol uses a read-based oracle system that calls for live prices at each instance a price is needed. While this method could be inefficient at times, it provides the highest level of accuracy and safety for borrowers and lenders.",source:"@site/docs/concepts/USDi/OracleSystem.md",sourceDirName:"concepts/USDi",slug:"/concepts/USDi/OracleSystem",permalink:"/book/docs/concepts/USDi/OracleSystem",editUrl:"https://gfx.cafe/ip/app/-/tree/master/book/docs/concepts/USDi/OracleSystem.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Liquidations",permalink:"/book/docs/concepts/USDi/LiquidationSystem"},next:{title:"Guides",permalink:"/book/docs/category/guides"}},p={},u=[],d={toc:u};function h(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"oracle-system"},"Oracle system"),(0,i.kt)("p",null,"Price oracles play a crucial role in every protocol that lends assets against collateral. An accurate, reliable, and safe oracle for asset prices allows loans and liquidations to occur quickly without errors. Interest Protocol uses a read-based oracle system that calls for live prices at each instance a price is needed. While this method could be inefficient at times, it provides the highest level of accuracy and safety for borrowers and lenders. "),(0,i.kt)("p",null,"All asset prices are aggregated into the ",(0,i.kt)("inlineCode",{parentName:"p"},"OracleMaster,")," which maintains a list of asset-specific oracle contracts called the ",(0,i.kt)("inlineCode",{parentName:"p"},"AnchorViewRelay.")," Each ",(0,i.kt)("inlineCode",{parentName:"p"},"AnchorViewRelay")," has two sub-oracles and a configurable buffer. One sub-oracle is specified as the main oracle and the other as the anchor. Currently, the ",(0,i.kt)("inlineCode",{parentName:"p"},"ChainlinkOracleRelay")," is the main, and ",(0,i.kt)("inlineCode",{parentName:"p"},"UniswapV3OracleRelay")," is the anchor relay. Whenever a price is utilized in a transaction, the protocol reads the main oracle price and the anchor oracle and certifies that the main oracle price is within the specified deviation of the anchor oracle price. "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"VaultController")," is the contract that queries prices. Functions such as ",(0,i.kt)("inlineCode",{parentName:"p"},"borrow")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"liquidate")," require price data because they need to value the collateral assets in the vault. To query the price those functions call the ",(0,i.kt)("inlineCode",{parentName:"p"},"_oracleMaster.getLivePrice(token_address)"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"OracleMaster")," will use the specified token address to query the relevant ",(0,i.kt)("inlineCode",{parentName:"p"},"AnchorViewRelay,")," and the corresponding main and anchor relays will be called to read their perspective prices."),(0,i.kt)("p",null,"If the main oracle price falls outside the buffer, the price will not update, and the underlying transaction will fail. This acts as an immediate safety feature and prevents further usage until governance can react or the market rectifies itself. Additionally, governance can pause an oracle to effectively pause lending operations related to a specific asset."),(0,i.kt)("p",null,"This system of checks and balances allows Interest Protocol to use Chainlink oracles as the main oracle for markets without it becoming a single point of failure. Chainlink is helpful because they can get price input from a larger sample than realistically possible for the protocol to build and maintain, they filter their data for outlier data points, and their price feeds are available across multiple chains. The anchor oracle for the initial markets will be Uniswap V3, but anyone could write a wrapper for additional markets such as Uniswap V2, Balancer, Curve, etc. "),(0,i.kt)("p",null,"While the oracle contracts are not upgradable themselves the ",(0,i.kt)("inlineCode",{parentName:"p"},"VaultController")," has a configurable ",(0,i.kt)("inlineCode",{parentName:"p"},"OracleMaster")," via the ",(0,i.kt)("inlineCode",{parentName:"p"},"register_oracle_master(master_oracle_address)")," function callable by governance. The ",(0,i.kt)("inlineCode",{parentName:"p"},"OracleMaster")," contract can configure markets via the ",(0,i.kt)("inlineCode",{parentName:"p"},"set_relay(token_address, relay_address)")," function. Governance has the power to adapt the system however they see best for the protocol."))}h.isMDXComponent=!0}}]);