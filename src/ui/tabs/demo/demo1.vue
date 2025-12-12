<script setup>
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/tabs/index.ts';
import { ref } from 'vue';

const defautValue = ref('1');
</script>

<template>
  <Tabs v-model="defautValue">
    <TabsList aria-label="Manage your account">
      <TabsTrigger value="1">1</TabsTrigger>
      <TabsTrigger value="2">2</TabsTrigger>
    </TabsList>
    <TabsContent value="1">content1</TabsContent>
    <TabsContent value="2">content22</TabsContent>
  </Tabs>
</template>
