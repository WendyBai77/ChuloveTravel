import{_ as x,o as l,c,a as e,n as u,i as _,F as h,h as P,t as r,f as C,r as g,b as p,e as f,w as T,d as w}from"./index-f2981d1c.js";import{c as L}from"./cartStore-c0bac044.js";import{S as V}from"./sweetalert2.all-bee90c50.js";const $={props:["pages","getProduct"]},E={"aria-label":"Page navigation example"},D={class:"pagination justify-content-center mb-7"},S=e("span",{"aria-hidden":"true"},"❮",-1),A=[S],j=["onClick"],I=e("span",{"aria-hidden":"true"},"❯",-1),B=[I];function N(n,t,s,d,o,v){return l(),c("nav",E,[e("ul",D,[e("li",{class:u(["page-item",{disabled:!s.pages.has_pre}])},[e("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=_(i=>s.getProduct(s.pages.current_page-1),["prevent"]))},A)],2),(l(!0),c(h,null,P(s.pages.total_pages,i=>(l(),c("li",{class:u(["page-item",{active:i===s.pages.current_page}]),key:i+"page"},[e("a",{class:"page-link",href:"#",onClick:_(m=>s.getProduct(i),["prevent"])},r(i),9,j)],2))),128)),e("li",{class:u(["page-item",{disabled:s.pages.current_page===s.pages.total_pages}])},[e("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=_(i=>s.getProduct(s.pages.current_page+1),["prevent"]))},B)],2)])])}const R=x($,[["render",N]]),{VITE_API:b,VITE_PATH:k}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wendybai",BASE_URL:"/ChuloveTravel/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},U={data(){return{products:[],page:{},isLoading:!1,fullPage:!0,color:"#ACB1E7"}},components:{Pagination:R},methods:{getProducts(){this.$http.get(`${b}/api/${k}/products/all`).then(n=>{this.products=n.data.products,this.isLoading=!1})},...C(L,["addToCart"]),getData(n=1){this.$http.get(`${b}/api/${k}/products?page=${n}`).then(t=>{const{products:s,pagination:d}=t.data;this.products=s,this.page=d,console.log("getData_pagination",t),this.isLoading=!1}).catch(t=>{V.fire({icon:"error",title:t.response.data.message})})}},mounted(){this.isLoading=!0,this.getProducts(),this.getData()}},F={class:"container pt-lg-7"},H=f('<div class="row"><ul class="nav-list nav-list-md d-lg-none d-flex justify-content-center border-0 pt-sm-7 pb-sm-5"><li><a class="nav-link rounded-0">所有產品類別</a></li><li><a class="nav-link rounded-0" href="#">行程</a><i class="bi bi-dash-lg link-icon"></i></li><li><a class="nav-link rounded-0" href="#">住宿</a><i class="bi bi-dash-lg link-icon"></i></li><li><a class="nav-link rounded-0" href="#">景點門票</a><i class="bi bi-dash-lg link-icon"></i></li></ul></div>',1),M={class:"row py-lg-5"},O=f('<div class="col-lg-3 mb-lg-0"><ul class="nav-list d-lg-block d-none d-flex flex-lg-column flex-md-row"><li class=""><a class="nav-link bg-secondary">所有產品類別</a></li><li class=""><a class="nav-link" href="#">行程</a></li><li class=""><a class="nav-link" href="#">住宿</a></li><li class=""><a class="nav-link" href="#">景點門票</a></li></ul></div>',1),z={class:"container col-lg-9"},W=f('<div class="d-flex justify-content-end mb-lg-4 mb-3"><select class="products-select text-center" name="productsSort"><option value="default">產品預設排列</option><option value="cheapToExpensive">價格：低至高</option><option value="expensiveToCheap">價格：高至低</option></select></div>',1),X={class:"products mb-7"},q=["src"],G={class:"card-body ps-lg-5 pe-lg-6 d-flex flex-column justify-content-between"},J={class:"card-title mb-3"},K={class:"truncate-multiline mb-4"},Q={class:"d-flex justify-content-end"},Y={class:"card-price"},Z={class:"fs-6"},ee=e("a",{class:"like-icon",href:"#"},[e("i",{class:"fa-regular fa-heart"}),e("i",{class:"fa-solid fa-heart collect"})],-1),se=["onClick"],te=e("i",{class:"bi bi-cart-fill"},null,-1),ae=[te];function ie(n,t,s,d,o,v){const i=g("VueLoading"),m=g("router-link"),y=g("Pagination");return l(),c(h,null,[p(i,{active:o.isLoading,"onUpdate:active":t[0]||(t[0]=a=>o.isLoading=a),color:o.color,"is-full-page":o.fullPage},null,8,["active","color","is-full-page"]),e("div",F,[H,e("div",M,[O,e("div",z,[W,e("ul",X,[(l(!0),c(h,null,P(o.products,a=>(l(),c("li",{class:"mb-3",key:a.id},[p(m,{class:"card card-row",to:`/product/${a.id}`},{default:T(()=>[e("img",{class:"card-row-img object-cover",src:a.imageUrl,alt:"Xpark"},null,8,q),e("div",G,[e("div",null,[e("h2",J,r(a.title),1),e("p",K,r(a.description),1)]),e("div",Q,[e("div",Y,[e("p",Z,[w(" TWD "),e("span",null,r(a.price),1)])])])])]),_:2},1032,["to"]),ee,e("button",{type:"button",class:"ms-2 border-0 p-0",onClick:()=>n.addToCart(a.id)},ae,8,se)]))),128))]),p(y,{pages:o.page,"get-product":v.getData},null,8,["pages","get-product"])])])])],64)}const ce=x(U,[["render",ie]]);export{ce as default};