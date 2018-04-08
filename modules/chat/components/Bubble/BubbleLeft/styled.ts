import { styled } from '../../../../core/styles';

import { Component } from './component';

export const Styled = styled(Component)`
    position: relative;
    margin: 8px 0;
    > div {
        text-align: left;
        background: ${(props) => props.theme.colorBg};
        max-width: 80%;
    }
    > i {
        color: ${(props) => props.theme.colorBg};
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
