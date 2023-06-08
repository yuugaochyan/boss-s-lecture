<template>
  <div class="jd-container">
    <!-- <headline :title="'丢弃词'" /> -->
    <MainSearch></MainSearch>
    <!-- <div class="bt-container">
      <el-button-group>
        <el-button
          type="primary"
          @click="show_norm = true"
          :disabled="norm_terms.length === 0"
        >
          标准化<el-icon class="el-icon--right"><IconNormal /></el-icon>
        </el-button>
      </el-button-group>
    </div> -->
  </div>
</template>

<script setup lang="ts">
// import { ref } from "vue";
// import { judgeMissionStore } from "@/stores/judgemission";
// import { BASE_URL } from "@/main";
// import axios from "../../api/index";
// import { KBIDStore } from "@/stores/KBID";
// import { ElMessage } from "element-plus";
</script>

<style>
.jd-container {
  background-color: #fff;
  width: 100%;
  /* height: 100%; */
  padding: 15px 0;
  box-shadow: 0px 0px 5px #c2c2c2;
}
.flex {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  padding: 15px;
}
.item-card {
  /* display: inline-block; */
  width: 49%;
  margin: 5px;
  background-color: #edf4ff;
}
.add-card {
  display: flex;
  flex-grow: 1;
  width: 10%;
  margin: 5px;
  /* text-align: center; */
  justify-content: center;
  align-items: center;
  background-color: #edf4ff;
  color: #393a3c;
  font-size: 32px;
}
.add-card:hover {
  cursor: pointer;
}
.bt-container {
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
}
.card-header {
  min-height: 28px;
}
.card-header .button {
  margin-bottom: 7px;
}
</style>
