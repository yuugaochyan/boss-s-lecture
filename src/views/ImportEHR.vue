<template>
  <div class="import-container-card">
    <el-tabs class="form-container" :stretch="true">
      <!-- <el-tab-pane label="选择系统中的数据"> -->
      <!-- <div style="padding: 15px 2vw"><SystemNormalization /></div> -->
      <!-- </el-tab-pane> -->
      <el-tab-pane label="电子病历导入"
        ><div style="padding: 15px 10vw">
          <EHRUpload /></div
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* .import-container-card { */
/* background-color: #fff; */
/* width: 100%; */
/* height: 100%; */
/* padding: 15px 0; */
/* } */
.hover {
  cursor: pointer;
}
.form-container {
  /* border-top: 2px solid #142771; */
  width: 100%;
  padding: 15px 0px;
  background-color: #fff;
  box-shadow: 0px 0px 5px #c2c2c2;
  margin-bottom: 15px;
}
.el-tabs__item {
  color: #86909c !important;
  height: 50px;
  line-height: 50px;
}
</style>
