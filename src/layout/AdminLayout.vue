<script setup lang="ts"></script>

<template>
  <div class="admin-layout">
    <aside class="sidebar">
      <div class="brand">选美后台</div>
      <RouterLink to="/admin/dashboard">首页</RouterLink>
      <RouterLink to="/admin/contestants">选手管理</RouterLink>
      <RouterLink to="/admin/users">用户管理</RouterLink>
      <RouterLink to="/admin/votes">投票记录</RouterLink>
    </aside>

    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.admin-layout {
  display: flex;
  min-height: 100vh;
  background: #f5f7fa;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 220px;
  padding: 24px 16px;
  background: #ffffff;
  border-right: 1px solid #ebeef5;
}

.brand {
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 700;
  color: #303133;
}

.sidebar a {
  padding: 10px 12px;
  border-radius: 6px;
  color: #606266;
}

.sidebar a.router-link-active {
  color: #409eff;
  background: #ecf5ff;
}

.content {
  flex: 1;
  padding: 24px;
}
</style>
