<template>
  <div class="search-container">
    <div class="search-input">
      <el-input
        v-model="condition"
        placeholder="输入搜索条件"
        @keyup.enter="getResult(true)"
        v-loading="loading"
        element-loading-text="努力搜索中……"
      >
        <template #append>
          <el-button type="primary">
            <el-icon><IconSearch class="icon-color" /></el-icon>
          </el-button>
        </template>
      </el-input>
    </div>
    <div class="search-scroll" @scroll="scrollEvent">
      <DataCardWidth
        v-for="(item, key) in resultList"
        :key="key"
        :contentlist="item"
        class="search-hover bubble-dark"
      />
      <div class="loading"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

// ^ ^暂时
import axios from "../../api/index";
import { BASE_URL } from "@/main";
// import { KBIDStore } from "@/stores/KBID";
// import { kbCurrentNodeStore } from "@/stores/currentNode";
// import { pageStateStore } from "@/stores/pageState";
// axios.defaults.baseURL = "http://172.20.137.88:8000";

interface MainCode {
  系统: string;
  编码值: string;
}
interface EHR {
  病历编号: string;
  身份证号: string;
  患者姓名: string;
  性别: string;
  年龄: string;
  主诉: string;
  主诉编码: MainCode;
  现病史: string;
  现病史编码: MainCode;
  体格检查: string;
  体格检查编码: MainCode;
  诊断: string;
  诊断编码: MainCode;
}
let condition = ref("");
let resultList = ref<EHR[]>([]);
// const emit = defineEmits(["changeCurrentNode"]);
let loading = ref(false);
let offset = 0;
let limit = 100;
let isLoadMore = true;
const getResult = (flag: boolean) => {
  if (flag === true) {
    resultList.value = [];
  }
  loading.value = true;
  isLoadMore = false;
  let postData = {
    query: condition.value,
    offset: offset,
    limit: limit,
  };
  // resultList.value = [
  //   {
  //     病历编号: "001",
  //     身份证号: "11010119800101001X",
  //     患者姓名: "张三",
  //     性别: "M",
  //     年龄: "35岁",
  //     主诉: "头痛、发热",
  //     主诉编码: { 系统: "SNOMED CT", 编码值: "225452002" },
  //     现病史: "持续头痛2天，伴有发热症状",
  //     现病史编码: { 系统: "SNOMED CT", 编码值: "266361008" },
  //     体格检查: "体温38.5摄氏度，头部叩诊痛",
  //     体格检查编码: { 系统: "LOINC", 编码值: "8310-5" },
  //     诊断: "偏头痛",
  //     诊断编码: { 系统: "ICD-10", 编码值: "G43.9" },
  //   },
  //   {
  //     病历编号: "001",
  //     身份证号: "11010119800101001X",
  //     患者姓名: "张三",
  //     性别: "M",
  //     年龄: "35岁",
  //     主诉: "头痛、发热",
  //     主诉编码: { 系统: "SNOMED CT", 编码值: "225452002" },
  //     现病史: "持续头痛2天，伴有发热症状",
  //     现病史编码: { 系统: "SNOMED CT", 编码值: "266361008" },
  //     体格检查: "体温38.5摄氏度，头部叩诊痛",
  //     体格检查编码: { 系统: "LOINC", 编码值: "8310-5" },
  //     诊断: "偏头痛",
  //     诊断编码: { 系统: "ICD-10", 编码值: "G43.9" },
  //   },
  //   {
  //     病历编号: "001",
  //     身份证号: "11010119800101001X",
  //     患者姓名: "张三",
  //     性别: "M",
  //     年龄: "35岁",
  //     主诉: "头痛、发热",
  //     主诉编码: { 系统: "SNOMED CT", 编码值: "225452002" },
  //     现病史: "持续头痛2天，伴有发热症状",
  //     现病史编码: { 系统: "SNOMED CT", 编码值: "266361008" },
  //     体格检查: "体温38.5摄氏度，头部叩诊痛",
  //     体格检查编码: { 系统: "LOINC", 编码值: "8310-5" },
  //     诊断: "偏头痛",
  //     诊断编码: { 系统: "ICD-10", 编码值: "G43.9" },
  //   },
  // ];
  loading.value = false;
  axios.post(BASE_URL + "/search/", postData).then(function (res) {
    // console.log(res);
    if (res.status == 200) {
      // console.log("success");
      // resultList.value = [];
      resultList = res.data;
      loading.value = false;
      isLoadMore = true;
    }
  });
};
// let currentNodeId = ref();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const scrollEvent = (e: any) => {
  if (
    e.srcElement.scrollTop + e.srcElement.offsetHeight >
      e.srcElement.scrollHeight - 100 &&
    isLoadMore === true
  ) {
    offset += 100;
    getResult(false);
  }
  // console.log(currentExpand);
};
</script>

<style scoped>
.search-container {
  /* border: 1px solid #c5d0dc; */
  height: 100%;
}
.search-input {
  margin: 10px 10px;
}
.search-hover:hover {
  cursor: pointer;
  box-shadow: 5px 0px 5px #2d7bff80;
}
.bubble-dark {
  transition: 1s;
  background: linear-gradient(200deg, #fff, #edf4ff);
  width: 49%;
}
.bubble-dark:hover {
  background: linear-gradient(200deg, #edf4ff, #fff);
  background-position: -500px;
}
.search-scroll {
  overflow-y: auto;
  height: calc(100% - 52px);
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  /* width: 200%; */
}
.icon-color {
  color: #1d5d32;
}
</style>
