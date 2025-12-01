<script lang="ts" setup>
import type { ListTableConstructorOptions } from '@visactor/vtable';
import { addCache, delCache } from '@components/table/utils.ts';
import { ListTable } from '@visactor/vtable';
import { onBeforeUnmount, onMounted, shallowRef, useTemplateRef } from 'vue';
// TODO 测试数据
const props = defineProps<ListTableConstructorOptions>();
const columns = Array.from({ length: 5 })
  .fill('-')
  .map((_, i) => {
    if (i === 0) {
      return {
        field: `field${i}`,
        title: `title${i}`,
      };
    }
    return {
      title: `title${i}`,
      columns: [
        {
          field: `field${i}`,
          title: 'First Name',
        },
        {
          field: `field${i + i}`,
          title: 'First Name',
        },
      ],
    };
  });
const records = Array.from({ length: 1_0 })
  .fill('_')
  .map((_, i) => {
    return columns.reduce((pre, _cur) => {
      pre.field0 = `value${i}`;
      pre.field1 = `value${i}`;
      pre.field2 = `value${i}`;
      pre.field3 = `value${i}`;
      pre.field4 = `value${i}`;
      return pre;
    }, {});
  });

const vTableContainer = useTemplateRef<HTMLElement | null>('vTableContainer');
const vTableInstance = shallowRef<ListTable | null>(null);

function createVTableInstance(options: ListTableConstructorOptions) {
  options = {
    columns,
    records,
    widthMode: 'adaptive',
    bottomFrozenRowCount: 1,
    tooltip: {
      /** 渲染方式：如使用html具有较好灵活行，上层可以覆盖样式；canvas具有较好的跨平台展示稳定性 */
      renderMode: 'html',
      /** 是否显示缩略文字提示框 */
      isShowOverflowTextTooltip: true,
      /** 弹框是否需要限定在表格区域内 */
      // confine: boolean;
    },
  };
  vTableInstance.value = new ListTable(vTableContainer.value!, options);
  addCache(vTableInstance.value);
}

function createVTable() {
  if (vTableInstance.value) {
    vTableInstance.value.release();
  }
  createVTableInstance(props);
}

// eslint-disable-next-line unused-imports/no-unused-vars
function updataVTable() {
  vTableInstance.value?.updateOption(props);
}

onMounted(() => {
  createVTable();
});

onBeforeUnmount(() => {
  if (!vTableInstance.value) {
    return;
  }

  vTableInstance.value.release();
  delCache(vTableInstance.value);
});
</script>

<template>
  <div ref="vTableContainer" class="size-full" />
</template>

<style scoped></style>
