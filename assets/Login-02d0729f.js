import{_ as f,r as l,o as h,c as b,a as e,b as o,w as v,n as p}from"./index-ff4639dc.js";const w={data(){return{user:{username:"",password:""},isLoading:!1}},methods:{signIn(){this.isLoading=!0;const r="https://vue3-course-api.hexschool.io/v2/admin/signin";this.$http.post(r,this.user).then(s=>{const{token:i,expired:d}=s.data;document.cookie=`wendyToken=${i}; expires=${new Date(d)}`,this.isLoading=!1,this.$router.push("/admin/products-list")}).catch(s=>{alert(s.response.data.message)})}}},g={class:"container"},V=e("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),k={class:"my-5 row justify-content-center"},x={class:"mb-3"},y=e("label",{for:"email",class:"form-label"},"Email",-1),$={class:"mb-3"},L=e("label",{for:"password",class:"form-label"},"密碼",-1),B=e("button",{type:"submit",class:"btn btn-lg btn-primary w-100 mt-3"}," 登入 ",-1);function C(r,s,i,d,a,u){const m=l("v-field"),c=l("error-message"),_=l("v-form");return h(),b("div",g,[V,e("div",k,[o(_,{ref:"form",class:"col-lg-10",onSubmit:s[2]||(s[2]=t=>u.signIn())},{default:v(({errors:t})=>[e("div",x,[y,o(m,{id:"email",name:"email",type:"email",class:p(["form-control",{"is-invalid":t.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:a.user.username,"onUpdate:modelValue":s[0]||(s[0]=n=>a.user.username=n)},null,8,["class","modelValue"]),o(c,{name:"email",class:"invalid-feedback"})]),e("div",$,[L,o(m,{id:"password",name:"password",type:"password",class:p(["form-control",{"is-invalid":t.password}]),placeholder:"請輸入密碼",rules:"required",modelValue:a.user.password,"onUpdate:modelValue":s[1]||(s[1]=n=>a.user.password=n)},null,8,["class","modelValue"]),o(c,{name:"password",class:"invalid-feedback"})]),B]),_:1},512)])])}const q=f(w,[["render",C]]);export{q as default};
