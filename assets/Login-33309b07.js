import{S as g}from"./sweetalert2.all-f50427fa.js";import{_ as h,r as n,o as v,c as w,b as l,a as o,w as b,F as V,n as u}from"./index-af9a0c5b.js";const{VITE_API:y}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"wendybai",BASE_URL:"/ChuloveTravel/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},E={data(){return{user:{username:"",password:""},isLoading:!1,fullPage:!0,color:"#ACB1E7"}},methods:{signIn(){this.isLoading=!0;const i=`${y}/admin/signin`;this.$http.post(i,this.user).then(e=>{const{token:r,expired:d}=e.data;document.cookie=`wendyToken=${r}; expires=${new Date(d)}`,console.log(e),this.isLoading=!1,this.$router.push("/admin/products")}).catch(e=>{this.isLoading=!1,g.fire({icon:"error",title:e.response.data.message})})}}},L={class:"login container"},x=o("h1",{class:"h3 my-6 font-weight-normal text-center"},"登入",-1),k={class:"my-5 row justify-content-center"},I={class:"mb-4"},P=o("label",{for:"email",class:"form-label"},"Email",-1),S={class:"mb-4"},T=o("label",{for:"password",class:"form-label"},"密碼",-1),A=o("button",{type:"submit",class:"btn btn-primary w-100 mt-5"},"登入",-1);function B(i,e,r,d,s,p){const f=n("VueLoading"),c=n("v-field"),m=n("error-message"),_=n("v-form");return v(),w(V,null,[l(f,{active:s.isLoading,"onUpdate:active":e[0]||(e[0]=a=>s.isLoading=a),color:s.color,"is-full-page":s.fullPage},null,8,["active","color","is-full-page"]),o("div",L,[x,o("div",k,[l(_,{ref:"form",class:"col-lg-4 col-9 login-form px-4 py-4",onSubmit:e[3]||(e[3]=a=>p.signIn())},{default:b(({errors:a})=>[o("div",I,[P,l(c,{id:"email",name:"email",type:"email",class:u(["form-control",{"is-invalid":a.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:s.user.username,"onUpdate:modelValue":e[1]||(e[1]=t=>s.user.username=t)},null,8,["class","modelValue"]),l(m,{name:"email",class:"invalid-feedback"})]),o("div",S,[T,l(c,{id:"password",name:"password",type:"password",class:u(["form-control",{"is-invalid":a.password}]),placeholder:"請輸入密碼",rules:"required",modelValue:s.user.password,"onUpdate:modelValue":e[2]||(e[2]=t=>s.user.password=t)},null,8,["class","modelValue"]),l(m,{name:"password",class:"invalid-feedback"})]),A]),_:1},512)])])],64)}const U=h(E,[["render",B]]);export{U as default};
