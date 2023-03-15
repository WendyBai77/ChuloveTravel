<template>
  <VueLoading
    v-model:active="isLoading"
    :color="color"
    :is-full-page="fullPage"
  />
  <div class="login container">
    <h1 class="h3 my-6 font-weight-normal text-center">登入</h1>
    <div class="my-5 row justify-content-center">
      <v-form
        ref="form"
        class="col-lg-4 col-md-6 login-form px-4 py-4"
        v-slot="{ errors }"
        @submit="signIn()"
      >
        <div class="mb-4">
          <label for="email" class="form-label">Email</label>
          <v-field
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="user.username"
          ></v-field>
          <error-message name="email" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-4">
          <label for="password" class="form-label">密碼</label>
          <v-field
            id="password"
            name="password"
            type="password"
            class="form-control"
            :class="{ 'is-invalid': errors['password'] }"
            placeholder="請輸入密碼"
            rules="required"
            v-model="user.password"
          >
          </v-field>
          <error-message
            name="password"
            class="invalid-feedback"
          ></error-message>
        </div>
        <button type="submit" class="btn btn-primary w-100 mt-5">登入</button>
      </v-form>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

const { VITE_API } = import.meta.env;

export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      isLoading: false,
      fullPage: true,
      color: "#ACB1E7",
    };
  },
  methods: {
    signIn() {
      this.isLoading = true;
      const api = `${VITE_API}/admin/signin`;
      this.$http
        .post(api, this.user)
        .then((res) => {
          //取出登入成功後伺服器回傳的token和expired
          const { token, expired } = res.data;
          // console.log(token, expired);
          //將token和expired 存到cookie。expired原始格式是unix timestamp，需要轉型將字串轉換為日期!
          document.cookie = `wendyToken=${token}; expires=${new Date(expired)}`;
          console.log(res);
          this.isLoading = false;
          // 路徑導向 後台購物車列表
          this.$router.push("/admin/products-list");
        })
        .catch((err) => {
          this.isLoading = false;
          Swal.fire({
            icon: "error",
            title: err.response.data.message,
          });
        });
    },
  },
};
</script>
