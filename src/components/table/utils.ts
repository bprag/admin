import type { ListTable } from '@visactor/vtable';
import type { ITableThemeDefine } from '@visactor/vtable/es/ts-types';

const tablesCaches = new Set<ListTable>();

export function addCache(instance?: ListTable) {
  if (!instance) {
    return;
  }

  if (tablesCaches.has(instance)) {
    return;
  }

  tablesCaches.add(instance);
}

export function delCache(instance?: ListTable) {
  instance && tablesCaches.delete(instance);
}

export function updateTableThemes(theme: ITableThemeDefine) {
  tablesCaches.forEach((instance) => {
    instance.updateTheme(theme);
  });
}
