import { styled } from '../../../../core/styles';

import { Component } from './component';

export const Styled = styled(Component)`
    position: relative;
    margin: ${(props) => (props.separation === 'big' ? '1.4em' : '.5em')} 0 0.5em;
    > div {
        text-align: left;
        background: ${(props) => (props.from === 'left' ? props.theme.colorSecondary : props.theme.colorPrimary)};
        color: ${(props) => (props.from === 'left' ? '#fff' : '#666')};
        max-width: 80%;
        border-radius: ${(props) => props.theme.sizeCornerBubble};
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        display: inline-block;
        padding: ${(props) => props.theme.sizeIn(-10)} ${(props) => props.theme.sizeIn(-4)};
        margin: 0 ${(props) => props.theme.sizeBubbleTail};
    }
    > i {
        /* color: ${(props) => props.theme.colorBg}; */
        color: ${(props) => (props.from === 'left' ? props.theme.colorSecondary : props.theme.colorPrimary)};
        position: absolute;
        left: 0;
        top: 0;
        transform: rotateY(-180deg);
        width: ${(props) => props.theme.sizeBubbleTail};
        + div {
            border-top-left-radius: 0;
        }
    }
`;
