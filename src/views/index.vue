<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbarStyle">
      <div class="container mx-auto">
        <h1><a href="index.html"> 揪愛一起玩 </a></h1>

        <ul class="main-menu menuStyle">
          <li><a class="darkGary" href="#">行程</a></li>
          <li><a class="darkGary" href="#">住宿</a></li>
          <li><a class="darkGary" href="#">景點門票</a></li>
        </ul>
        <ul class="icon-menu menuStyle">
          <li>
            <a class="darkGary" href="#" title="收藏">
              <img
                src="/src/assets/img/Property1=ph_heart-fill.svg"
                alt="collect"
              />
            </a>
          </li>
          <li>
            <a class="darkGary" href="#" title="折價券">
              <img
                src="/src/assets/img/Property1=mdi_coupon.svg"
                alt="coupon"
              />
            </a>
          </li>
          <li>
            <a class="darkGary" href="#" title="會員中心">
              <img src="/src/assets/img/Property1=account.svg" alt="account" />
            </a>
          </li>
          <li>
            <a class="darkGary" href="#" title="購物車">
              <img src="/src/assets/img/Property1=Variant8.svg" alt="cart" />
            </a>
          </li>
        </ul>
        <!-- 漢堡選單 icon -->
      </div>
    </nav>
  </div>

  <!-- 嘗試用bootstrap做漢堡選單 -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- mx-auto bootstrap會自動產生 margin -->
    <div class="container-fluid mx-auto">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <a class="navbar-brand" href="index.html">
        <img
          src="/src/assets/img/LOGO.svg"
          alt="揪愛一起玩"
          width="270"
          height="50"
        />
      </a>

      <!-- .navbar-toggler 漢堡式選單按鈕 -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- 選單項目&漢堡式折疊選單 -->
      <!-- .collapse .navbar-collapse 用於外層中斷點群組和隱藏導覽列內容 -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <div class="banner container">
    <div class="banner-content">
      <h2 class="text-gary-100">
        <span> 愛最大 玩最好</span> 創造美好回憶不用等
      </h2>
      <a class="btn btn-primary" href="#">說走就走 出發Go</a>
    </div>
  </div>

  <div class="content">
    <div class="container">
      <h2>揪愛推薦</h2>
      <ul class="recommend row">
        <li class="col-md-2 col-sm-6 flex-md-column mb-4">
          <a class="btn btn-gary-100 btnStyle" href="#">
            <img src="/src/assets/img/Property1=01.svg" alt="nature" />
            <h3>熱愛大自然</h3>
          </a>
        </li>
        <li class="col-md-2 col-sm-6 flex-md-column mb-4">
          <a class="btn btn-gary-100 btnStyle" href="#">
            <img src="/src/assets/img/Property1=02.svg" alt="nature" />
            <h3>話題展覽</h3>
          </a>
        </li>
        <li class="col-md-2 col-sm-6 flex-md-column mb-4">
          <a class="btn btn-gary-100 btnStyle" href="#">
            <img src="/src/assets/img/Property1=03.svg" alt="nature" />
            <h3>熱門住宿</h3>
          </a>
        </li>
        <li class="col-md-2 col-sm-6 flex-md-column mb-4">
          <a class="btn btn-gary-100 btnStyle" href="#">
            <img src="/src/assets/img/Property1=04.svg" alt="nature" />
            <h3>戶外露營</h3>
          </a>
        </li>
        <li class="col-md-2 col-sm-6 flex-md-column mb-4">
          <a class="btn btn-gary-100 btnStyle" href="#">
            <img src="/src/assets/img/Property1=05.svg" alt="nature" />
            <h3>樂園玩透透</h3>
          </a>
        </li>
        <li class="col-md-2 col-sm-6 flex-md-column mb-4">
          <a class="btn btn-gary-100 btnStyle" href="#">
            <img src="/src/assets/img/Property1=06.svg" alt="nature" />
            <h3>離島旅行</h3>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
