<template>
  <!-- <div class="flex"> -->
  <el-card class="item-card" shadow="always">
    <template #header>
      <div class="card-header">
        <!-- <el-switch
              class="button"
              v-model="item.isChosen"
              @change="changeNormList(item)"
            /> -->
        <span
          style="
            color: #181818;
            font-size: 20px;
            line-height: 28px;
            margin-left: 10px;
          "
          >{{ contentlist.患者姓名 }}</span
        >
      </div>
    </template>
    <el-descriptions class="progress-number" :column="2" border>
      <el-descriptions-item v-for="(value, index) in contentlist" :key="index">
        <template #label>
          <!-- <div v-else> -->
          <div class="cell-item">
            <!-- <el-icon>
                  <IconExtract />
                </el-icon> -->
            {{ index }}
            <!-- </div>、 -->
          </div>
        </template>
        <div v-if="typeof value == 'object'">
          <div v-for="(value_2, index_2) in value" :key="index_2">
            <!-- <template #label> -->
            <!-- <div v-else> -->
            <div style="display: inline; border: 1px solid #dfdfdf">
              <!-- <el-icon>
                  <IconExtract />
                </el-icon> -->
              {{ index_2 }}
              <!-- </div>、 -->
            </div>
            <!-- </template> -->
            {{ value_2 }}
          </div>
        </div>
        <div v-else>
          {{ value }}
        </div>
      </el-descriptions-item>
    </el-descriptions>
  </el-card>
  <!-- <el-card class="add-card" v-if="contentlist.length === 10 && isLoadAll"
      >加载所有</el-card
    > -->
  <!-- </div> -->
</template>

<script setup lang="ts">
import { ref } from "vue";
const sugar = ref("!");
sugar.value = "?";
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
defineProps<{
  contentlist: EHR;
}>();
</script>

<style scoped>
.item-card {
  /* display: inline-block; */
  width: 100%;
  /* margin: 5px; */
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
