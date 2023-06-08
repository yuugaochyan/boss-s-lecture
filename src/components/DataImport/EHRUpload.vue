<template>
  <div class="param-container" v-loading="loading[0]">
    <el-form ref="formRef" :model="form" label-width="110px">
      <!-- <el-form-item label="数据来源">
        <el-input
          v-model="form.importName"
          class="m-2"
          placeholder="此次电子病历数据来源"
        >
        </el-input>
      </el-form-item> -->
      <el-form-item label="电子病历标准">
        <el-select v-model="form.standard" placeholder="选择电子病历标准">
          <el-option
            :label="item.label"
            :value="item.value"
            v-for="(item, key) in standardList"
            :key="key"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="原始文件">
        <el-upload
          class="upload-demo"
          ref="uploadRefN"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-remove="onChangeN"
          :auto-upload="false"
          :http-request="httpRequestN"
          :disabled="showProgress"
          accept=".xml"
        >
          <el-icon class="el-icon--upload"><IconUpload /></el-icon>
          <div class="el-upload__text">
            拖曳文件至此或 <em>点击以上传待标准化的文件</em>
          </div>
        </el-upload>
      </el-form-item>
    </el-form>
    <el-button
      type="primary"
      @click="onSubmit"
      v-if="!showProgress"
      v-loading="loading[1]"
      >开始导入</el-button
    >
    <div v-if="loading[1]">
      <el-result
        icon="info"
        title="正在获取数据"
        sub-title="请保持页面耐心等待……"
      >
        <!-- <template #extra> -->
        <!-- <el-button type="primary" @click="goToJudge">GO</el-button> -->
        <!-- </template> -->
      </el-result>
    </div>
    <el-dialog v-model="dialogVisible" title="文件类型或命名错误！" width="30%">
      <span>请检查你上传的文件类型是否正确。</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false"
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from "vue";
import type { ElUpload } from "element-plus";
import { ElMessage } from "element-plus";
// import p1 from "../../assets/example1.png";

// ^ ^暂时
import axios from "../../api/index";
import { BASE_URL } from "@/main";
// import { KBIDStore } from "@/stores/KBID";
import type { UploadFile } from "element-plus/es/components/upload/src/upload.type";
import { useRouter } from "vue-router";
const router = useRouter();

interface OptionType {
  value: string;
  label: string;
}
let standardList = ref<OptionType[]>([
  {
    value: "CDA",
    label: "CDA",
  },
  {
    value: "FHIR",
    label: "FHIR",
  },
  {
    value: "HL7",
    label: "HL7",
  },
  {
    value: "CCD",
    label: "CCD",
  },
  {
    value: "openEHR",
    label: "openEHR",
  },
]);
// axios.defaults.baseURL = "http://172.20.137.88:8000";
interface KBItem {
  label: string;
  value: number;
  leaf: boolean;
}
let kbList = ref<KBItem[]>([]);
let childList = ref<KBItem[]>([]);
let id2name = new Map();
let loading = ref<boolean[]>([false, false]);
let reset = ref<boolean[]>([true, true]);
let formRef = ref();
let standardRef = ref();
const uploadRefN = ref<InstanceType<typeof ElUpload>>();
// const uploadRef = ref<InstanceType<typeof ElUpload>>();
const form = ref({
  standard: "",
});
const nodeFiles = ref<UploadFile[]>([]);
const formData = new FormData();
const onChangeN = (_file: UploadFile, list: UploadFile[]) => {
  nodeFiles.value = list;
};
const httpRequestN = (param: { file: File }) => {
  formData.append("file", param.file);
};
const showProgress = ref(false);
// const ticket = ref(null);
let progressTimer = setInterval(() => {
  console.log(".");
}, 1000);
clearInterval(progressTimer);

interface TypeResult {
  text: string;
  normalized_result: string;
}
let reject = ref<boolean>(false);
let normalResult = ref<TypeResult[]>([]);
const onSubmit = () => {
  loading.value[1] = true;
  reject.value = false;
  uploadRefN.value?.submit();
  formData.append("source", form.value.standard);
  axios
    .post(
      BASE_URL + "/import",
      // `${flag === true ? "root" : "node"}` +
      // `/${form.value.standard[form.value.standard.length - 1]}/normalization`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then(function (res) {
      // console.log(res);
      // ElMessage.success("已上传！")
      ElMessage({
        message: "已上传！",
        type: "success",
      });
    })
    .catch(function (err) {
      console.log(err);
    });
};
let dialogVisible = ref<boolean>(false);
const checkFileC = (file: UploadFile) => {
  let isTXT = file.name.split(".")[file.name.split(".").length - 1] === "txt";
  if (!isTXT) {
    dialogVisible.value = true;
    reject.value = true;
    loading.value[1] = false;
    return false;
  }
};

onBeforeUnmount(() => {
  if (progressTimer) {
    clearInterval(progressTimer);
  }
});
</script>

<style>
.param-container {
  width: 100%;
  height: 100%;
  text-align: center;
  margin: 10px;
  background-color: #fff;
}
/* .el-form {
  width: calc(100% - 20px);
  margin: 0 auto;
  height: 100%;
} */
.large-icon {
  font-size: 50px;
}
.upload-demo {
  width: 394px;
}
.el-upload {
  width: 100% !important;
}
.el-upload-dragger {
  width: 100% !important;
}
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 24px;
  color: #2d7bff;
  z-index: 9;
}
.percentage-label {
  color: #409eff66;
  display: block;
  margin-top: 10px;
  font-size: 12px;
  z-index: 9;
}
.circle2 {
  width: 100%;
}
.circle2 svg > path:nth-child(2) {
  stroke: url(#write);
}
.param-container .inline {
  width: calc(100% - 400px);
  margin-left: 6px;
  padding: 0;
}
.param-container .el-cascader {
  width: 394px !important;
}
.param-container .el-select {
  width: 394px !important;
}
.param-container .el-alert--info.is-light {
  background-color: #edf4ff;
  color: #2d7bff;
}
.param-container .inline .inline-1 {
  padding-left: 0px;
  padding-bottom: 0px;
}
.inline img {
  max-width: 95%;
  height: auto;
}
</style>
