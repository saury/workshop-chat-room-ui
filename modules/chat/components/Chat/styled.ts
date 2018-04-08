import { styled } from 'modules/core/styles';

import { Component } from './component';

export const Styled = styled(Component)`
    background: red;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
