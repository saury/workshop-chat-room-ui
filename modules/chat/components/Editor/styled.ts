import { styled } from 'modules/core/styles';

import { Editor as Component } from './component';
// todo: add style
export const Editor = styled(Component)`
    background: limegreen;
    border-radius: 4px;
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
`;
