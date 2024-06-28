<template>
  <div>
      <ul class="flex space-x-2 rtl:space-x-reverse mb-6">
          <li>
              <a href="javascript:;" class="text-primary hover:underline">Dashboard</a>
          </li>
          <li class="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
              <span>InBody</span>
          </li>
      </ul>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="panel lg:col-span-2 p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap">
              <div class="ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3">
              </div>
              <span class="ltr:mr-3 rtl:ml-3">產品頁面建置中: </span>
              敬請期待功能建置
          </div>
      </div>
  </div>
</template>
<script lang="ts" setup>
  import { useAppStore } from '@/stores/index';
  import { useMeta } from '@/composables/use-meta';


  useMeta({ title: 'User Profile' });
  const store = useAppStore();
</script>
