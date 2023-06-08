<template>
  <div>
    <div class="header-left">
      <el-icon class="header-logo"><IconLogo /></el-icon>
      <!-- <span class="header-text">{{ tittle }}</span> -->
      <span class="header-text">{{ tittle }}</span>
    </div>
    <div class="header-right">
      <img :src="getAvatar()" class="header-avatar" />
      <el-button
        type="text"
        style="color: #fff; margin: 0 12px; font-size: 16px"
      ></el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { tokenStore } from "@/stores/token";
// import { useRouter } from "vue-router";
import { ref } from "vue";
import avatar from "@/assets/avatar.png";
// import { ElNotification } from "element-plus";
withDefaults(defineProps<{ tittle: string }>(), { tittle: "生物医学术语库" });

let userName = ref();
userName.value = localStorage.getItem("kb-username");
const getAvatar = () => {
  return avatar;
};
</script>

<style>
.header-left {
  float: left;
  display: flex;
  align-items: center;
}
.header-left:hover {
  cursor: pointer;
}
.header-right {
  float: right;
  display: flex;
  align-items: center;
  height: 68px;
  font-size: 16px;
}
img {
  vertical-align: middle;
}
.header-logo {
  font-size: 48px;
  margin-left: 2px;
  margin-right: 12px;
}
.header-text {
  /* color: #181818; */
  color: #fff;
  font-size: 32px;
  /* line-height: 42px; */
}
.header-avatar {
  height: 35px;
  width: 35px;
}
.header-bar {
  /* border-left: 1px solid rgb(125, 109, 191); */
  /* display: inline-block; */
  margin-left: 10px;
  display: flex;
  align-items: center;
  /* margin-top: 5px; */
  /* vertical-align: middle; */
  /* display: inline-block; */
}
.header-icon {
  margin-right: 13px;
  color: #fff;
  font-size: 20px;
}
.header-icon:hover {
  cursor: pointer;
}
/* .bell-item {
  margin-top: 10px;
  margin-right: 40px;
} */
.el-badge__content {
  margin-top: 20px;
}
</style>
