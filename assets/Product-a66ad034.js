import{_ as n,o,c as r,a as t,t as e,d,e as a}from"./index-cbd7dbad.js";const{VITE_API:l,VITE_PATH:_}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wendybai",BASE_URL:"/ChuloveTravel/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},p={data(){return{product:{}}},methods:{getProduct(){const{id:i}=this.$route.params;this.$http.get(`${l}/api/${_}/product/${i}`).then(c=>{console.log(c),this.product=c.data.product})}},mounted(){this.getProduct()}},h={class:"container pt-0 mb-8"},u={class:"row"},f={class:"pt-md-5"},m={class:"product row d-flex justify-content-between"},v={class:"mb-3"},b=["src"],g={href:"#",class:"card card-row pt-3"},x={class:"card-body ps-lg-5 pe-lg-6 px-2 pt-4 d-flex justify-content-between"},y={class:"product-top"},w={class:"card-title mb-4"},T={class:"mb-4"},E={class:"pt-6 d-flex justify-content-end align-items-center"},P={class:"card-price d-flex flex-column"},V={class:"fs-6"},j=t("a",{class:"btn btn-primary mt-3",href:"#"},"加入購物車",-1),k=a('<a class="like-icon" href="#"><i class="fa-regular fa-heart"></i><i class="fa-solid fa-heart collect"></i></a><div class="ms-2 count-icon"><a class="count-btn disabled"><i class="fa-solid fa-circle-plus"></i></a><span class="position-absolute">1</span><a class="count-btn disabled"><i class="fa-solid fa-circle-minus"></i></a></div>',2),I={class:"card-body ps-lg-5 pe-lg-6 px-2"},U={class:"product-body"},A=t("h2",{class:"card-title mb-4"},"商品說明",-1),D={class:"mb-4 pb-7"},S={class:"d-flex flex-rowalign-items-center"},B={class:"reference container product-footer border-top"},N=t("h2",{class:"mb-5 mt-7 h2-style"},"參考別人怎麼玩 不怕踩雷氣噗噗",-1),R={class:"row justify-content-center"},H={class:"card col-lg-6"},O=["href"],C=["src"],L={class:"card-body reference-card-body pt-5 text-gary-500 position-relative"},M={class:"card-text"},W={class:"card-text pt-2"},X={key:1,href:"#"},q=["src"],z={class:"card-body reference-card-body pt-5 text-gary-500 position-relative"},F={class:"card-text"},G={class:"card-text pt-2"};function J(i,c,K,Q,s,Y){return o(),r("div",h,[t("div",u,[t("div",f,[t("div",m,[t("div",v,[t("img",{class:"card-row-img object-cover",src:s.product.imageUrl,alt:"Xpark"},null,8,b),t("div",g,[t("div",x,[t("div",y,[t("h2",w,e(s.product.title),1),t("p",T,e(s.product.description),1)]),t("div",E,[t("div",P,[t("p",V,[d(" TWD "),t("span",null,e(s.product.price),1),d("元 ")]),j])])])]),k])])])]),t("div",I,[t("div",U,[A,t("h3",D,e(s.product.content),1)]),t("div",S,[t("div",B,[N,t("div",R,[t("div",H,[s.product.Url_reference?(o(),r("a",{key:0,href:s.product.Url_reference,target:"_blank"},[t("img",{src:s.product.imageUrl_reference,class:"card-img-top reference-card-img-top product-card-img-top object-cover position-relative",alt:"參考遊記"},null,8,C),t("div",L,[t("h4",M,e(s.product.description_reference),1),t("p",W,e(s.product.content_reference),1)])],8,O)):(o(),r("a",X,[t("img",{src:s.product.imageUrl_reference,class:"card-img-top reference-card-img-top product-card-img-top object-cover position-relative",alt:"參考遊記"},null,8,q),t("div",z,[t("h4",F,e(s.product.description_reference),1),t("p",G,e(s.product.content_reference),1)])]))])])])])])])}const $=n(p,[["render",J]]);export{$ as default};