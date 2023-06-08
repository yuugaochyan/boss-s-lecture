<template>
  <el-container style="height: 100%">
    <el-header>
      <ToolBar :tittle="'电子病历搜索'" />
    </el-header>
    <el-container class="container-height" style="height: calc(100% - 70px)">
      <el-aside width="200px">
        <el-menu
          unique-opened
          active-text-color="#1d2129"
          background-color="#fff"
          class="el-menu-vertical-demo"
          :default-active="$route.path"
          text-color="#1d2129"
          router
        >
          <!-- <el-menu-item index="/dashboard">
            <el-icon><IconDashBoard class="icon-color" /></el-icon>
            <span>仪表盘</span>
          </el-menu-item> -->
          <el-menu-item index="/searchEHR">
            <el-icon><IconKB class="icon-color" /></el-icon>
            <span>病历库</span>
          </el-menu-item>

          <el-menu-item index="/importEHR">
            <el-icon><IconImport class="icon-color" /></el-icon>
            <span>电子病历导入</span>
          </el-menu-item>
          <!-- <el-menu-item index="/combineSTD">
              <el-icon><IconExtract class="icon-color" /></el-icon>
              <span>标准融合</span>
            </el-menu-item>
            <el-menu-item index="/normalizeSTD">
              <el-icon><IconNormal class="icon-color" /></el-icon>
              <span>标准化</span>
            </el-menu-item> -->
          <!-- <el-menu-item index="/segsubmit">
              <el-icon><IconNormal class="icon-color" /></el-icon>
              <span>预分段</span>
            </el-menu-item> -->
          <!-- </el-sub-menu> -->
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
// getMessage();
</script>

<style scoped>
.container-height {
  height: 100%;
}
.el-header {
  background: linear-gradient(to right, #397255, #144023);
  box-shadow: 0 2px 6px rgb(20 39 113 / 50%) !important;
  /* text-align: center; */
  line-height: 68px;
  height: 70px;
  /* padding-left: 15px; */
  padding: 1px 0 1px 15px;
  padding-bottom: 1px;
  z-index: 9;
}
.el-aside {
  width: 246px;
  width: 246px;
  background-color: #fff;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
  height: 100%;
  box-shadow: 0 3px 6px rgb(123 148 189 / 20%);
  border-width: 0 0 1px;
  z-index: 8;
  overflow: hidden;
}
.el-main {
  background-color: #f1f2f5;
  color: var(--el-text-color-primary);
  /* text-align: center; */
  /* line-height: 160px; */
  height: 100%;
  padding: 15px;
}
img {
  vertical-align: middle;
}
.is-active {
  background-color: #edf4ff;
  border-left: 2px solid #2d7bff;
}
.el-menu {
  --el-menu-border-color: opacity;
}
.el-menu-item:hover {
  background-color: #edf4ff80 !important;
}
.el-sub-menu__title:hover {
  background-color: #edf4ff !important;
}
.el-sub-menu .el-menu-item {
  height: 48px;
  line-height: 48px;
}

.menu-icon {
  margin-right: 15px;
}
.icon-color {
  color: #2d7bff;
}
</style>
