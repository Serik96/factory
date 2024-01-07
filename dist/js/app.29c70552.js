(function(){"use strict";var e={2275:function(e,t,o){var r=o(9242),a=o(3396);function s(e,t,o,r,s,i){const n=(0,a.up)("Header"),l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(n),(0,a.Wm)(l)],64)}var i=o.p+"img/logo.a5a5fad6.svg",n=o.p+"img/search.1feb3628.svg",l=o.p+"img/favorites.c6956d56.svg";const c={class:"header"},d={class:"header-wrapper"},h={class:"header-logo"},m=(0,a._)("img",{src:i,alt:"logo"},null,-1),u={class:"header-menu"},g={key:0,class:"header-search"},p=(0,a._)("img",{src:n,style:{width:"23px",height:"23px"},alt:"search"},null,-1),f=(0,a._)("p",null,"Поиск",-1),v={class:"header-favorites"},w=(0,a._)("img",{src:l,style:{width:"23px",height:"23px"},alt:"favorites"},null,-1),_=(0,a._)("p",null,"Избранное",-1);function x(e,t,o,r,s,i){const n=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("div",d,[(0,a._)("div",h,[(0,a.Wm)(n,{to:"/"},{default:(0,a.w5)((()=>[m])),_:1})]),(0,a._)("div",u,[i.showSearch?((0,a.wg)(),(0,a.iD)("div",g,[(0,a.Wm)(n,{to:"/"},{default:(0,a.w5)((()=>[p])),_:1}),(0,a.Wm)(n,{to:"/"},{default:(0,a.w5)((()=>[f])),_:1})])):(0,a.kq)("",!0),(0,a._)("div",v,[(0,a.Wm)(n,{to:"/favorites"},{default:(0,a.w5)((()=>[w])),_:1}),(0,a.Wm)(n,{to:"/favorites"},{default:(0,a.w5)((()=>[_])),_:1})])])])])}var I={name:"headerComponent",computed:{showSearch(){return"/"!==this.$route.path}}},k=o(89);const T=(0,k.Z)(I,[["render",x]]);var y=T,D={name:"App",components:{Header:y}};const b=(0,k.Z)(D,[["render",s]]);var F=b,S=o(2483);function P(e,t,o,r,s,i){const n=(0,a.up)("Search"),l=(0,a.up)("MainContent");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(n,{onUpdateFilter:i.updateFilter},null,8,["onUpdateFilter"]),(0,a.Wm)(l,{filterText:s.filterText},null,8,["filterText"])])}var C=o.p+"img/search-black.f8038178.svg";const q={class:"search"},O={class:"search-wrapper"},N=(0,a._)("img",{src:C,alt:"search"},null,-1);function j(e,t,o,s,i,n){return(0,a.wg)(),(0,a.iD)("div",q,[(0,a._)("div",O,[(0,a.wy)((0,a._)("input",{type:"text",placeholder:"Поиск","onUpdate:modelValue":t[0]||(t[0]=e=>n.searchText=e)},null,512),[[r.nr,n.searchText]]),N])])}var $={name:"searchComponent",computed:{searchText:{get(){return this.$store.state.searchText},set(e){this.$store.commit("setSearchText",e),this.$emit("update-filter",e)}}}};const H=(0,k.Z)($,[["render",j]]);var W=H,Y=o(7139),L=o.p+"img/cat-head.556c81f6.gif",R=o.p+"img/loading.274c68d3.svg",Z=o.p+"img/refresh.0330c944.svg",M=o.p+"img/button_top.6979a3c3.svg";const z={class:"mainContent"},B={key:0,class:"loader-container"},E=(0,a._)("div",{class:"loader"},null,-1),A=[E],J={key:1,class:"error-container"},U={class:"error-message"},G=(0,a._)("img",{src:L,alt:"Error Animation",class:"error-gif"},null,-1),K={key:2,class:"image-wrapper"},V={class:"image-container__inner"},Q=["src","alt"],X={key:0,class:"buttons-container"},ee={key:0,class:"loading-icon rotate"},te=(0,a._)("img",{src:R,alt:"loading"},null,-1),oe=[te],re={key:1,class:"refresh-button"},ae=(0,a._)("img",{src:Z,alt:"refresh1"},null,-1),se=[ae],ie={key:2,class:"refresh-top"},ne=(0,a._)("img",{src:Z,alt:"refresh2"},null,-1),le=[ne],ce=(0,a._)("button",{class:"top-icon"},[(0,a._)("img",{src:M,alt:"top"})],-1),de=[ce];function he(e,t,o,r,s,i){const n=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",z,[s.loading?((0,a.wg)(),(0,a.iD)("div",B,A)):(0,a.kq)("",!0),s.error?((0,a.wg)(),(0,a.iD)("div",J,[(0,a._)("div",U,(0,Y.zw)(s.error),1),G])):(0,a.kq)("",!0),s.loading||s.error?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",K,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.randomImages,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id,class:"image-container"},[(0,a._)("div",V,[(0,a.Wm)(n,{to:{name:"photoPage",params:{id:e?.id}}},{default:(0,a.w5)((()=>[(0,a._)("img",{src:e?.urls?.regular,alt:e?.description,onClick:t[0]||(t[0]=(...e)=>i.saveImagesToLocalStorage&&i.saveImagesToLocalStorage(...e))},null,8,Q)])),_:2},1032,["to"])])])))),128))]))]),s.loading?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",X,[s.loadingNextImages&&!s.error?((0,a.wg)(),(0,a.iD)("div",ee,oe)):(0,a.kq)("",!0),s.error?((0,a.wg)(),(0,a.iD)("div",re,[(0,a._)("button",{class:"refresh-icon1",onClick:t[1]||(t[1]=(...e)=>i.refreshButton&&i.refreshButton(...e))},se)])):(0,a.kq)("",!0),s.error?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",ie,[(0,a._)("button",{class:"refresh-icon2",onClick:t[2]||(t[2]=(...e)=>i.refreshButton&&i.refreshButton(...e))},le)])),s.error?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",{key:3,class:"button-top",onClick:t[3]||(t[3]=(...e)=>i.scrollToTop&&i.scrollToTop(...e))},de))]))],64)}var me=o(3738),ue=o.n(me),ge={name:"mainContent",props:{filterText:String},data(){return{randomImages:[],loading:!1,error:null,loadingNextImages:null}},watch:{filterText:{handler:"RandomImagesDebounced",immediate:!0,deep:!0}},created(){window.addEventListener("scroll",this.handleScroll)},methods:{saveImagesToLocalStorage(){localStorage.setItem("savedImages",JSON.stringify(this.randomImages))},async fetchRandomImages(e){this.loading=!0;try{const t=await fetch(`https://api.unsplash.com/photos/random/?count=8&client_id=IjwLrN04z7hqo9HxnFDYh183gM3GYSbjdFtf0SLd-pk&query=${e}`);if(404===t.status)return void(this.error="Изображения не найдены");const o=await t.json();this.randomImages=o}catch(t){this.error="Произошла ошибка при загрузке изображений",console.error("Картинки не подгрузились",t)}finally{this.loading=!1}},async fetchNextImages(e){if(!this.loadingNextImages){this.loadingNextImages=!0;try{const t=await fetch(`https://api.unsplash.com/photos/random/?count=8&client_id=IjwLrN04z7hqo9HxnFDYh183gM3GYSbjdFtf0SLd-pk&query=${e}`),o=await t.json();this.randomImages=[...this.randomImages,...o],200===t.status&&(this.loadingNextImages=!1)}catch(t){this.loadingNextImages=!0,console.error("Картинки не подгрузились",t)}}},handleScroll:ue()((function(){const e=window.scrollY+window.innerHeight,t=document.documentElement.scrollHeight,o=100;t-e<o&&!this.loadingNextImages&&!this.error&&!this.loading&&this.fetchNextImages(this.filterText)}),1200),scrollToTop(){const e=100,t=window.scrollY,o=performance.now(),r=e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1;function a(){const s=performance.now(),i=s-o;window.scrollTo({top:r(i/e)*(-1*t),behavior:"smooth"}),i<e&&requestAnimationFrame(a)}requestAnimationFrame(a)},loadRandomImages(){if(this.filterText)this.error=null,this.fetchRandomImages(this.filterText);else if(!this.randomImages.length){const e=localStorage.getItem("savedImages");e?this.randomImages=JSON.parse(e):this.fetchRandomImages("")}},refreshButton(){this.refreshImagesDebounced()},refreshImagesDebounced:ue()((function(){this.error=null,this.$store.dispatch("clearText"),this.fetchRandomImages("")}),500),RandomImagesDebounced:ue()((function(){this.loadRandomImages()}),1500)}};const pe=(0,k.Z)(ge,[["render",he]]);var fe=pe,ve={name:"homePage",components:{Search:W,MainContent:fe},data(){return{filterText:""}},methods:{updateFilter(e){const t=e.trim();this.filterText=t}}};const we=(0,k.Z)(ve,[["render",P]]);var _e=we,xe=o.p+"img/favorites_white.606ca102.svg";const Ie={class:"favorites"},ke={class:"favorites-wrapper"},Te=(0,a._)("div",{class:"favorites-title"},"Избранное",-1),ye=["onClick"],De={class:"image-container__inner"},be=["src"];function Fe(e,t,o,r,s,i){return(0,a.wg)(),(0,a.iD)("div",Ie,[(0,a._)("div",ke,[Te,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.favorites,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id,class:"image-container"},[(0,a._)("img",{onClick:t=>i.removeFromFavorites(e),class:"active-favorites",src:xe,alt:"favorites"},null,8,ye),(0,a._)("div",De,[(0,a._)("img",{src:e?.urls?.regular,alt:"Favorite Photo"},null,8,be)])])))),128))])])}var Se={name:"favoritePage",computed:{favorites(){return this.$store.state?.favorites}},methods:{removeFromFavorites(e){this.$store.commit("removeFromFavorites",e)}}};const Pe=(0,k.Z)(Se,[["render",Fe]]);var Ce=Pe,qe=o.p+"img/download.6c759fe4.svg";const Oe={class:"photoPage"},Ne=(0,a._)("div",{class:"photoPage-bcg"},null,-1),je={class:"photoPage-wrapper"},$e={class:"photoPage-info__left"},He=["src"],We={class:"photoPage-descr"},Ye={class:"photoPage-title"},Le={class:"photoPage-author"},Re={class:"photoPage-info__right"},Ze=(0,a._)("img",{src:xe,width:"49px",height:"49px"},null,-1),Me=[Ze],ze=(0,a._)("img",{src:qe,width:"26px",height:"26px"},null,-1),Be=(0,a._)("span",null,"Downloand",-1),Ee=[ze,Be],Ae={class:"photoPage-image"},Je=["src"];function Ue(e,t,o,r,s,i){return(0,a.wg)(),(0,a.iD)("div",Oe,[Ne,(0,a._)("div",je,[(0,a._)("div",$e,[(0,a._)("img",{src:s.photoData.user?.profile_image?.medium,width:"55px",height:"55px",class:"photoPage-avatar"},null,8,He),(0,a._)("div",We,[(0,a._)("div",Ye,(0,Y.zw)(s.photoData.user?.name),1),(0,a._)("div",Le,"@"+(0,Y.zw)(s.photoData.user?.username),1)])]),(0,a._)("div",Re,[(0,a._)("button",{class:(0,Y.C_)(["favorite-btn",{"favorite-active":i.isFavorite}]),onClick:t[0]||(t[0]=(...e)=>i.toggleFavorite&&i.toggleFavorite(...e))},Me,2),(0,a._)("button",{class:"download-btn",onClick:t[1]||(t[1]=(...e)=>i.downloadImage&&i.downloadImage(...e))},Ee)]),(0,a._)("div",Ae,[(0,a._)("img",{src:s.photoData?.urls?.regular,alt:"Image"},null,8,Je)])])])}var Ge=o(65),Ke={name:"photoPage",props:{id:String},data(){return{photoData:{}}},computed:{...(0,Ge.rn)(["favorites"]),isFavorite(){return this.favorites.some((e=>e.id===this.photoData.id))}},methods:{downloadImage(){const e=this.photoData?.urls?.regular,t=document.createElement("a");t.href=e,t.download="downloaded_image.jpg",document.body.appendChild(t),t.click(),document.body.removeChild(t)},toggleFavorite(){this.isFavorite?this.$store.commit("removeFromFavorites",this.photoData):this.$store.commit("addToFavorites",this.photoData)}},created(){const e=localStorage.getItem("savedImages"),t=JSON.parse(e)||[],o=t.find((e=>e.id===this.id));this.photoData=o}};const Ve=(0,k.Z)(Ke,[["render",Ue]]);var Qe=Ve;const Xe=[{path:"/",component:_e},{path:"/favorites",name:"favorites",component:Ce,props:!0},{path:"/photoPage/:id",name:"photoPage",component:Qe,props:!0}],et=(0,S.p7)({history:(0,S.PO)(),routes:Xe});var tt=et,ot=(o(7658),o(2415));const rt=(0,Ge.MT)({state(){return{favorites:[],searchText:""}},mutations:{addToFavorites(e,t){e.favorites.push(t)},removeFromFavorites(e,t){const o=e.favorites.findIndex((e=>e.id===t.id));-1!==o&&e.favorites.splice(o,1)},setSearchText(e,t){e.searchText=t},clearSearchText(e){e.searchText=""}},actions:{setSearchText({commit:e},t){e("setSearchText",t)},clearText({commit:e}){e("clearSearchText")}},plugins:[(0,ot.Z)({key:"my-vuex-store",paths:["favorites"]})]});var at=rt;const st=(0,r.ri)(F);st.use(at),st.use(tt),st.mount("#app")}},t={};function o(r){var a=t[r];if(void 0!==a)return a.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,o),s.exports}o.m=e,function(){var e=[];o.O=function(t,r,a,s){if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],a=e[d][1],s=e[d][2];for(var n=!0,l=0;l<r.length;l++)(!1&s||i>=s)&&Object.keys(o.O).every((function(e){return o.O[e](r[l])}))?r.splice(l--,1):(n=!1,s<i&&(i=s));if(n){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,a,s]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.p="/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,s,i=r[0],n=r[1],l=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in n)o.o(n,a)&&(o.m[a]=n[a]);if(l)var d=l(o)}for(t&&t(r);c<i.length;c++)s=i[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},r=self["webpackChunkfactory"]=self["webpackChunkfactory"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(2275)}));r=o.O(r)})();
//# sourceMappingURL=app.29c70552.js.map