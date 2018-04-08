import { styled } from '../../../../core/styles';

import { Component } from './component';

export const Styled = styled(Component)`
    position: relative;
    > div {
        border-top-left-radius: 0;
        background: #f2f2f2;
    }
    > i {
        color: #f2f2f2;
        position: absolute;
        left: 0;
        top: 0;
        transform: rotateY(-180deg);
        width: 12px;
    }
`;
