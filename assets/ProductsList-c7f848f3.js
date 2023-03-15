import{_ as x,o as n,c,a as s,n as u,g,F as h,h as y,t as r,f as T,r as p,b as _,e as f,w as L,d as b}from"./index-c63cd617.js";import{c as V}from"./cartStore-c4298cee.js";import"./sweetalert2.all-20d1c6ed.js";const $={props:["pages","getProduct"]},w={"aria-label":"Page navigation example"},E={class:"pagination justify-content-center mb-7"},D=s("span",{"aria-hidden":"true"},"❮",-1),A=[D],S=["onClick"],j=s("span",{"aria-hidden":"true"},"❯",-1),I=[j];function B(o,t,e,d,l,v){return n(),c("nav",w,[s("ul",E,[s("li",{class:u(["page-item pagination-style",{disabled:!e.pages.has_pre}])},[s("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=g(i=>e.getProduct(e.pages.current_page-1),["prevent"]))},A)],2),(n(!0),c(h,null,y(e.pages.total_pages,i=>(n(),c("li",{class:u(["page-item",{active:i===e.pages.current_page}]),key:i+"page"},[s("a",{class:"page-link",href:"#",onClick:g(m=>e.getProduct(i),["prevent"])},r(i),9,S)],2))),128)),s("li",{class:u(["page-item",{disabled:e.pages.current_page===e.pages.total_pages}])},[s("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=g(i=>e.getProduct(e.pages.current_page+1),["prevent"]))},I)],2)])])}const N=x($,[["render",B]]),{VITE_API:k,VITE_PATH:P}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wendybai",BASE_URL:"/ChuloveTravel/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},R={data(){return{products:[],page:{},isLoading:!1,fullPage:!0,color:"#ACB1E7"}},components:{Pagination:N},methods:{getProducts(){this.$http.get(`${k}/api/${P}/products/all`).then(o=>{this.products=o.data.products,this.isLoading=!1})},...T(V,["addToCart"]),getData(o=1){this.$http.get(`${k}/api/${P}/products?page=${o}`).then(t=>{const{products:e,pagination:d}=t.data;this.products=e,this.page=d,console.log("getData_pagination",t),this.isLoading=!1}).catch(t=>{alert(t.response.data.message)})}},mounted(){this.isLoading=!0,this.getProducts(),this.getData()}},U={class:"container pt-lg-7"},F=f('<div class="row"><ul class="nav-list nav-list-md d-lg-none d-flex justify-content-center border-0 pt-sm-7 pb-sm-5"><li><a class="nav-link rounded-0">所有產品類別</a></li><li><a class="nav-link rounded-0" href="#">行程</a><i class="bi bi-dash-lg link-icon"></i></li><li><a class="nav-link rounded-0" href="#">住宿</a><i class="bi bi-dash-lg link-icon"></i></li><li><a class="nav-link rounded-0" href="#">景點門票</a><i class="bi bi-dash-lg link-icon"></i></li></ul></div>',1),H={class:"row py-lg-5"},M=f('<div class="col-lg-3 mb-lg-0"><ul class="nav-list d-lg-block d-none d-flex flex-lg-column flex-md-row"><li class=""><a class="nav-link bg-secondary">所有產品類別</a></li><li class=""><a class="nav-link" href="#">行程</a></li><li class=""><a class="nav-link" href="#">住宿</a></li><li class=""><a class="nav-link" href="#">景點門票</a></li></ul></div>',1),O={class:"container col-lg-9"},z=f('<div class="d-flex justify-content-end mb-lg-4 mb-3"><select class="products-select" name="productsSort"><option value="default">產品預設排列</option><option value="cheapToExpensive">價格：低至高</option><option value="expensiveToCheap">價格：高至低</option></select></div>',1),W={class:"products mb-7"},X=["src"],q={class:"card-body ps-lg-5 pe-lg-6 d-flex flex-column justify-content-between"},G={class:"card-title mb-3"},J={class:"truncate-multiline mb-4"},K={class:"d-flex justify-content-end"},Q={class:"card-price"},Y={class:"fs-6"},Z=s("a",{class:"like-icon",href:"#"},[s("i",{class:"fa-regular fa-heart"}),s("i",{class:"fa-solid fa-heart collect"})],-1),ss=["onClick"],es=s("i",{class:"bi bi-cart-fill"},null,-1),ts=[es];function as(o,t,e,d,l,v){const i=p("VueLoading"),m=p("router-link"),C=p("Pagination");return n(),c(h,null,[_(i,{active:l.isLoading,"onUpdate:active":t[0]||(t[0]=a=>l.isLoading=a),color:l.color,"is-full-page":l.fullPage},null,8,["active","color","is-full-page"]),s("div",U,[F,s("div",H,[M,s("div",O,[z,s("ul",W,[(n(!0),c(h,null,y(l.products,a=>(n(),c("li",{class:"mb-3",key:a.id},[_(m,{class:"card card-row",to:`/product/${a.id}`},{default:L(()=>[s("img",{class:"card-row-img object-cover",src:a.imageUrl,alt:"Xpark"},null,8,X),s("div",q,[s("div",null,[s("h2",G,r(a.title),1),s("p",J,r(a.description),1)]),s("div",K,[s("div",Q,[s("p",Y,[b(" TWD "),s("span",null,r(a.price),1),b(" 元 ")])])])])]),_:2},1032,["to"]),Z,s("button",{type:"button",class:"ms-2 border-0 p-0",onClick:()=>o.addToCart(a.id)},ts,8,ss)]))),128))]),_(C,{pages:l.page,"get-product":v.getData},null,8,["pages","get-product"])])])])],64)}const ns=x(R,[["render",as]]);export{ns as default};
