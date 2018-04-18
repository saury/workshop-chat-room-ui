import { size, sizeIn } from './size';

export const normal = {
    colorBg: '#fff',
    colorConversationBg: '#e5ddd5',
    colorEditorBg: 'limegreen',
    colorPrimary: 'lime',
    colorSecondary: 'indianred',
    colorTextBase: '#000',
    colorThemeBtn: '#000',
    editorHeight: '60px',
    fontBase: `-apple-system, "BlinkMacSystemFont", ".SFNSDisplay-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif`,
    shadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    size,
    sizeBubbleTail: '.5em',
    sizeCornerBubble: '10px',
    sizeIn,
};

export const night = {
    colorBg: '#fff',
    colorConversationBg: '#333',
    colorEditorBg: '#aaa',
    colorPrimary: 'lime',
    colorSecondary: 'indianred',
    colorTextBase: '#000',
    colorThemeBtn: '#fff',
    editorHeight: '60px',
    fontBase: `-apple-system, "BlinkMacSystemFont", ".SFNSDisplay-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif`,
    shadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    size,
    sizeBubbleTail: '.5em',
    sizeCornerBubble: '10px',
    sizeIn,
};

export type Theme = typeof normal | typeof night;
