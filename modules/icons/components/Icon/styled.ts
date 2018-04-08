import { styled } from 'modules/core/styles';

import { Component } from './component';

export const Styled = styled(Component)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1em;
    > svg {
        fill: currentColor;
        flex-basis: 100%;
        stroke-width: 0;
        stroke: currentColor;
    }
`;
