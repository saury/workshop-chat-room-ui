import { styled } from 'modules/core/styles';

import { Editor as Component } from './component';
// todo: add style
export const Editor = styled(Component)`
    background: limegreen;
    border-radius: 4px;
    flex-grow: 1;
    display: flex;
    width: 100%;
    flex-basis: 40px;
    min-height: 40px;
    max-height: 120px;
    padding: ${(props) => props.theme.sizeIn(-10)};
    > div {
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
        background: #ffffff;
        overflow: hidden;
    }
    [contentEditable] {
        display: inline-block;
        min-height: 1em;
        min-width: 100%;
        border: 0;
        padding: ${(props) => props.theme.sizeIn(-10)};
        resize: none;
        outline: none;
        flex-grow: 1;
    }
`;
