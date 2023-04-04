import{_ as C,g as r,m,p as y,r as h,o,c as l,b as f,a as e,F as a,j as c,l as w,v as P,d as p,n as g,i as d,t as i,w as S}from"./index-62ce10a4.js";import{c as $}from"./cartStore-5f327edd.js";import{p as u}from"./productsStore-4f3e11e2.js";import{c as v}from"./collectionsStore-f15c3cbc.js";import"./sweetalert2.all-8f5eafcc.js";const L={data(){return{}},methods:{...r($,["addToCart"]),...r(u,["getProducts","changeCategory","sortProduct"]),...r(v,["toggleFollow"])},computed:{...m(u,["products","renderProduct","filterProducts","filterCategory","categories","isLoading","fullPage","color"]),...y(u,["selectSort"]),...m(v,["followIds"])},mounted(){this.getProducts()}},V=e("div",{class:"banner-products container"},[e("div",{class:"banner-content banner-content-products"},[e("h2",{class:"text-gary-100 mb-4"},[e("span",null," 愛最大 玩最好"),p(" 創造美好回憶不用等 ")])])],-1),j={class:"container pt-lg-3"},T={class:"row"},F={class:"nav-list nav-list-md d-lg-none d-flex justify-content-center border-0 pt-sm-7 pb-sm-5"},B=["onClick"],D=e("i",{class:"bi bi-dash-lg link-icon"},null,-1),N={class:"row py-lg-5"},U={class:"col-lg-3 mb-lg-0"},E={class:"nav-list d-lg-block d-none d-flex flex-lg-column flex-md-row"},I=["onClick"],M={class:"container col-lg-9"},W={class:"d-flex justify-content-end mb-lg-4 mb-3"},z=e("option",{disabled:"",value:"default"},"產品預設排列",-1),A=e("option",{value:"cheapToExpensive"},"價格：低至高",-1),O=e("option",{value:"expensiveToCheap"},"價格：高至低",-1),q=[z,A,O],x={key:0,class:"mt-7 text-center"},G={key:1,class:"products mb-7"},H=["src"],J={class:"card-body ps-md-5 pe-md-6 d-flex flex-column justify-content-between"},K={class:"card-title mb-3"},Q={class:"truncate-multiline mb-4"},R={class:"d-flex justify-content-end"},X={class:"card-price"},Y={class:"fs-6"},Z=["onClick"],ee={key:0,class:"fa-regular fa-heart"},se={key:1,class:"fa-solid fa-heart collect"},te=["onClick"],oe=e("i",{class:"bi bi-cart-fill"},null,-1),le=[oe];function ne(t,n,ie,ae,re,ce){const b=h("VueLoading"),k=h("router-link");return o(),l(a,null,[f(b,{active:t.isLoading,"onUpdate:active":n[0]||(n[0]=s=>t.isLoading=s),color:t.color,"is-full-page":t.fullPage},null,8,["active","color","is-full-page"]),V,e("div",j,[e("div",T,[e("ul",F,[(o(!0),l(a,null,c(t.categories,s=>(o(),l("li",{key:s},[e("a",{class:g(["nav-link",{active:s===t.filterCategory}]),style:{cursor:"pointer"},onClick:d(_=>t.changeCategory(s),["prevent"])},[p(i(s)+" ",1),D],10,B)]))),128))])]),e("div",N,[e("div",U,[e("ul",E,[(o(!0),l(a,null,c(t.categories,s=>(o(),l("li",{key:s},[e("a",{class:g(["nav-link",{active:s===t.filterCategory}]),style:{cursor:"pointer"},onClick:d(_=>t.changeCategory(s),["prevent"])},i(s),11,I)]))),128))])]),e("div",M,[e("div",W,[w(e("select",{class:"products-select text-center",name:"productsSort","onUpdate:modelValue":n[1]||(n[1]=s=>t.selectSort=s),onChange:n[2]||(n[2]=(...s)=>t.sortProduct&&t.sortProduct(...s))},q,544),[[P,t.selectSort]])]),t.filterProducts.length===0?(o(),l("h2",x,"無相符產品")):(o(),l("ul",G,[(o(!0),l(a,null,c(t.filterProducts,s=>(o(),l("li",{class:"mb-3",key:s.id},[f(k,{class:"card card-row",to:`/product/${s.id}`},{default:S(()=>[e("img",{class:"card-row-img object-cover",src:s.imageUrl},null,8,H),e("div",J,[e("div",null,[e("h2",K,i(s.title),1),e("p",Q,i(s.description),1)]),e("div",R,[e("div",X,[e("p",Y,[p(" TWD "),e("span",null,i(s.price),1)])])])])]),_:2},1032,["to"]),e("a",{class:"like-icon",href:"#",onClick:d(_=>t.toggleFollow(s.id),["prevent"])},[t.followIds.indexOf(s.id)===-1?(o(),l("i",ee)):(o(),l("i",se))],8,Z),e("button",{type:"button",class:"ms-2 border-0 p-0",onClick:()=>t.addToCart(s.id)},le,8,te)]))),128))]))])])])],64)}const he=C(L,[["render",ne]]);export{he as default};