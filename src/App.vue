<template>
  <div class="lottery">
    <!-- <div class="loading_wrap" v-if="loading">
      <div>
        <vue-loading class="loading_icon" type="bars" color="#FFE903" :size="{ width: '50px', height: '50px' }"></vue-loading>
        <p class="loading_txt">加载中...</p>
      </div>
    </div>-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide1">Slide 1</div>
          <div class="swiper-slide2">Slide 2</div>
          <div class="swiper-slide3">Slide 3</div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>
    <page1></page1>
  </div>
</template>

<script>
import { VueLoading } from "vue-loading-template";
import Swiper from "swiper";
import page1 from "./components/page1.vue";

export default {
  name: "app",

  data() {
    return {
      loading: false,
      mySwiper: "",
    };
  },

  components: {
    VueLoading,
    page1,
  },

  methods: {},

  created() {
    this.mySwiper = new Swiper(".swiper-container", {
      direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // 如果需要滚动条
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  },

  // created() {
  //   wx.ready(() => {
  //     this.loading = false;
  //     wx.onMenuShareTimeline({
  //       title: "创宇信用喊你来认证领红包啦！",
  //       link: SHARE_PAGE_URL, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
  //       imgUrl: "https://qn.qixincha.com/81share.png",
  //       success: () => {
  //         this.guideVis = false;
  //         if (!this.awardType) return;
  //         this.doAward("share_award").then((data) => {
  //           if (data.message) {
  //             this.$toasted.show(data.message);
  //           }
  //         });
  //       },
  //     });
  //     wx.onMenuShareAppMessage({
  //       title: "创宇信用喊你来认证领红包啦！",
  //       link: SHARE_PAGE_URL, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
  //       imgUrl: "https://qn.qixincha.com/81share.png",
  //       desc:
  //         "祝品牌宝全新升级为创宇信用，海量折扣券，以及支付抽免单，还有万元微信红包优惠券免费送！",
  //       success: () => {},
  //     });
  //   });
  //   getSalesShare({
  //     current: window.location.href.split("#")[0],
  //   }).then((data) => {
  //     wx.config({
  //       appId: data.AppId, // 必填，公众号的唯一标识
  //       timestamp: data.timestamp, // 必填，生成签名的时间戳
  //       nonceStr: data.nonceStr, // 必填，生成签名的随机串
  //       signature: data.signature, // 必填，签名
  //       jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"],
  //     });
  //   });
  // },
};
</script>


<style lang="scss">
.swiper-container  {
    width: 750px;
    height: 1300px;
}
.swiper-slide1  {
    width: 800px;
    height: 800px;
    background: silver;
}
.swiper-slide2  {
    width: 800px;
    height: 800px;
    background: purple;
}
.swiper-slide3  {
    width: 800px;
    height: 800px;
    background: red;
}
.lottery {
  padding-top: 355px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #e24a42 url("./assets/imgs/bg.png") no-repeat center;
  background-size: 750px auto;
  background-position: 0 60px;
  min-height: 100vh;
  .loading_wrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: rgba(0, 0, 0, 0.3);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loading_icon {
    z-index: 110;
  }

  .loading_txt {
    font-size: 24px;
    color: #fff;
  }
}
</style>
