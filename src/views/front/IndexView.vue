<template>
  <!-- Navbar -->
  <div class="banner container">
    <div class="banner-content">
      <h2 class="text-gary-100 mb-4">
        <span> 愛最大 玩最好</span> 創造美好回憶不用等
      </h2>
      <router-link class="btn btn-primary" to="/products"
        >說走就走 出發Go</router-link
      >
    </div>
  </div>
  <!-- 揪愛推薦 -->
  <div class="content">
    <div class="container">
      <h2 class="mb-5 mt-6 h2-style">揪愛推薦</h2>
      <ul class="recommend row">
        <li class="col-lg-2 col-sm-6 flex-md-column mb-4">
          <router-link class="btn btn-gary-100 btn-style" to="/nature">
            <img src="/src/assets/img/Property1=01.svg" alt="nature" />
            <h3>熱愛自然</h3>
          </router-link>
        </li>
        <li class="col-lg-2 col-sm-6 flex-md-column mb-4">
          <router-link class="btn btn-gary-100 btn-style" to="/exhibition">
            <img src="/src/assets/img/Property1=02.svg" alt="exhibition" />
            <h3>話題展覽</h3>
          </router-link>
        </li>
        <li class="col-lg-2 col-sm-6 flex-md-column mb-4">
          <router-link class="btn btn-gary-100 btn-style" to="/hotel">
            <img src="/src/assets/img/Property1=03.svg" alt="hotel" />
            <h3>熱門住宿</h3>
          </router-link>
        </li>
        <li class="col-lg-2 col-sm-6 flex-md-column mb-4">
          <router-link class="btn btn-gary-100 btn-style" to="/camp">
            <img src="/src/assets/img/Property1=04.svg" alt="camp" />
            <h3>戶外露營</h3>
          </router-link>
        </li>
        <li class="col-lg-2 col-sm-6 flex-md-column mb-4">
          <router-link class="btn btn-gary-100 btn-style" to="/theme-park">
            <img src="/src/assets/img/Property1=05.svg" alt="theme-park" />
            <h3>樂園爽玩</h3>
          </router-link>
        </li>
        <li class="col-lg-2 col-sm-6 flex-md-column mb-4">
          <router-link class="btn btn-gary-100 btn-style" to="/island">
            <img src="/src/assets/img/Property1=06.svg" alt="island" />
            <h3>離島旅行</h3>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
  <!-- 參考別人怎麼玩-->
  <div class="reference container">
    <h2 class="mb-5 mt-6 h2-style">參考別人怎麼玩 不怕踩雷氣噗噗</h2>
    <div class="row justify-content-lg-between justify-content-sm-center">
      <div class="card col-lg-4">
        <router-link to="/product/-NPvMcQ0qcLHng3hjaH6">
          <img
            src="/src/assets/img/image79@2x.png"
            class="card-img-top reference-card-img-top position-relative"
            alt="參考遊記"
          />
          <div
            class="card-body reference-card-body pt-5 text-gary-500 position-relative"
          >
            <h4 class="card-text">約會溜小孩都適合</h4>
            <p class="card-text pt-2">Xpark有哪些展區必看</p>
          </div>
        </router-link>
      </div>
      <div class="card col-lg-4">
        <router-link to="/product/-NPvXYEFu8VyB5iYiEV1">
          <img
            src="/src/assets/img/image62@2x.png"
            class="card-img-top reference-card-img-top position-relative"
            alt="參考遊記"
          />
          <div
            class="card-body reference-card-body pt-5 text-gary-500 position-relative"
          >
            <h4 class="card-text">山水沙灘美得像幅畫</h4>
            <p class="card-text pt-2">到澎湖這回要玩SUP立式划槳</p>
          </div>
        </router-link>
      </div>
      <div class="card col-lg-4">
        <router-link to="/product/-NPvdm-WDQVh1pM-Pv2X">
          <img
            src="/src/assets/img/image80@2x.png"
            class="card-img-top reference-card-img-top position-relative"
            alt="參考遊記"
          />
          <div
            class="card-body reference-card-body pt-5 text-gary-500 position-relative"
          >
            <h4 class="card-text">住了會感動的山中民宿</h4>
            <p class="card-text pt-2">聽海浪聲入眠這才是我要的舒壓之旅</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <!--網站特色  -->
  <div class="feature container mt-6">
    <ul class="row">
      <li class="col-lg-12 mb-7">
        <a
          class="d-flex flex-lg-row flex-sm-column-reverse justify-content-sm-center flex-column-reverse justify-content-center"
          href="#"
        >
          <div
            class="col-lg-5 card-body feature-text bg-pink-200 text-gary-500 py-2"
          >
            <p class="card-text ps-lg-5 ps-3 py-3">
              想出去玩，但想到規劃就頭痛
            </p>
            <p class="card-text ps-lg-5 ps-3 py-3">
              找住宿怕踩雷，美美的照片變照騙
            </p>
            <p class="card-text ps-lg-5 ps-3 py-3">
              參考網美達人旅遊體驗，省時又省力
            </p>
          </div>
          <img
            src="/src/assets/img/想到規劃就頭痛.png"
            class="col-lg-7 img-fluid radius-end"
            alt="出遊規劃頭痛圖"
          />
        </a>
      </li>
      <li class="col-lg-12 mb-7">
        <div
          class="d-flex flex-lg-row flex-sm-column justify-content-sm-center flex-column justify-content-center"
          href="#"
        >
          <img
            src="/src/assets/img/訂行程看遊記一站搞定.png"
            class="col-lg-7 img-fluid radius-star"
            alt="看遊記一站搞定"
          />
          <div
            class="col-lg-5 card-body feature-text feature-text-cta bg-purple-200 text-center text-gary-500 align-items-lg-center"
          >
            <p class="card-text py-2">
              訂行程 看遊記<span class="d-block py-lg-4">一站搞定</span>
            </p>
            <router-link class="btn btn-primary feature-btn" to="/products"
              >出發Go</router-link
            >
          </div>
        </div>
      </li>
    </ul>
  </div>
  <!-- 探索熱門城市 -->
  <div class="bg-yellow-100 pt-5 pb-6">
    <div class="city container">
      <h2 class="mb-5 mt-6 h2-style">探索熱門城市</h2>
      <div class="row row-cols-1 row-cols-lg-4 g-4">
        <router-link to="/city/hualien">
          <div class="col">
            <div class="card">
              <img
                src="/src/assets/img/Frame399@2x.png"
                class="card-img-top object-cover card-style rounded-4"
                alt="花蓮"
              />
              <div class="card-img-overlay position-set">
                <h4 class="card-title text-white">花蓮</h4>
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="/city/kaohsiung">
          <div class="col">
            <div class="card">
              <img
                src="/src/assets/img/Frame400@3x.png"
                class="card-img-top object-cover card-style rounded-4"
                alt="高雄"
              />
              <div class="card-img-overlay position-set">
                <h4 class="card-title text-white">高雄</h4>
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="/city/nantou">
          <div class="col">
            <div class="card">
              <img
                src="/src/assets/img/南投@2x.png"
                class="card-img-top object-cover card-style rounded-4"
                alt="南投"
              />
              <div class="card-img-overlay position-set">
                <h4 class="card-title text-white">南投</h4>
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="/city/taichung">
          <div class="col">
            <div class="card">
              <img
                src="/src/assets/img/台中@2x.png"
                class="card-img-top object-cover card-style rounded-4"
                alt="台中"
              />
              <div class="card-img-overlay position-set">
                <h4 class="card-title text-white">台中</h4>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <!-- footer -->
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
