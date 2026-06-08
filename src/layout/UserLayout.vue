<script setup lang="ts"></script>

<template>
  <div class="user-layout">
    <header class="layout-header">
      <RouterLink to="/" class="brand">校园选美系统</RouterLink>
      <nav class="nav">
        <RouterLink to="/">首页</RouterLink>
        <RouterLink to="/contestants">选手</RouterLink>
        <RouterLink to="/ranking">排行榜</RouterLink>
        <RouterLink to="/rules">规则</RouterLink>
      </nav>
    </header>

    <main class="layout-main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.user-layout {
  min-height: 100vh;
  background: #f5f7fa;
}

.layout-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 32px;
  background: #ffffff;
  border-bottom: 1px solid #ebeef5;
}

.brand {
  font-size: 18px;
  font-weight: 700;
  color: #303133;
}

.nav {
  display: flex;
  gap: 24px;
  color: #606266;
}

.nav a.router-link-active {
  color: #409eff;
}

.layout-main {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
  padding: 24px 0;
}
</style>
