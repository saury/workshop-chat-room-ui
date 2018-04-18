import { styled } from 'modules/core/styles';

import { Editor as Component, Props } from './component';
// add Props for workaround to solve the type error
export const Editor = styled<Props>(Component)`
    background: ${(props) => props.theme.colorEditorBg};
    /* border-radius: 4px; */
    width: 100%;
    overflow: hidden;
    padding: ${(props) => props.theme.sizeIn(-10)};
    display: flex;
    align-items: center;
    .input-box {
        flex-grow: 1;
        overflow: auto;
        > div {
            background: #fff;
        }
    }
    [contentEditable] {
        background: #fff;
        display: block;
        height: 100%;
        overflow: hidden;
        min-width: 100%;
        border: 0;
        padding: ${(props) => props.theme.sizeIn(-10)};
        resize: none;
        outline: none;
    }
    button {
        display: inline-block;
        background: ${(props) => props.theme.colorEditorBg};
        padding: 0 12px;
        font-size: 16px;
        color: #fff;
        border: 0;
        min-width: 80px;
    }
`;
