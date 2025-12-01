import type { ITableThemeDefine } from '@visactor/vtable/es/ts-types';

export const theme: ITableThemeDefine = {
  underlayBackgroundColor: 'transparent',
  defaultStyle: {
    color: '#D3D5DA',
    bgColor: 'red',
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 12,
    borderColor: '#444A54',
    padding: [8, 12, 8, 12],
    hover: {
      cellBgColor: '#2F4774',
    },
  },
  headerStyle: {
    color: 'oklch(0.71 0.01 0)',
    bgColor: 'hsl(240 3.7% 22%)',
    fontSize: 13,
    fontFamily:
      "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'",
    fontWeight: 700,
    lineHeight: 22,
    borderColor: ['', 'hsl(216 5% 24%)'],
    padding: 6,
    textAlign: 'center',
    hover: {
      cellBgColor: 'transparent',
    },
  },
  // rowHeaderStyle: {},
  // cornerHeaderStyle: {},
  bodyStyle: {
    color: 'oklch(0.71 0.01 0)',
    bgColor: '#1c1e22',
    fontSize: 13,
    borderColor: [`hsl(265 3.7% 22%)`, ''],
    padding: 6,
    textAlign: 'center',
    hover: {
      cellBgColor: '#29364D',
    },
  },
  // 整体表格边框
  frameStyle: {
    borderColor: 'transparent',
    borderLineWidth: 0,
    borderLineDash: [],
    cornerRadius: 4,
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowColor: 'transparent',
  },
  columnResize: {
    lineWidth: 1,
    lineColor: '#416EFF',
    bgColor: '#D9E2FF',
    width: 3,
  },
  frozenColumnLine: {
    shadow: {
      width: 4,
      startColor: 'rgba(00, 24, 47, 0.05)',
      endColor: 'rgba(00, 24, 47, 0)',
      visible: 'always',
    },
  },
  selectionStyle: {
    cellBgColor: 'rgba(255, 255, 255, 0.1)',
    cellBorderColor: '#4284FF',
    cellBorderLineWidth: 2,
  },
  tooltipStyle: {
    bgColor: '#FFF',
    color: '#000',
    fontSize: 12,
    fontFamily: 'Arial,sans-serif',
  },
  functionalIconsStyle: {
    sort_color: '#FFFFFF',
    sort_color_opacity: '0.75',
    sort_color_2: '#416EFF',
    sort_color_opacity_2: '1',
    frozen_color: '#FFFFFF',
    frozen_color_opacity: '0.75',
    collapse_color: '#FFF',
    collapse_color_opacity: '0.75',
    expand_color: '#FFF',
    expand_color_opacity: '0.75',
    dragReorder_color: '#FFF',
    dragReorder_color_opacity: '0.75',
  },
};
