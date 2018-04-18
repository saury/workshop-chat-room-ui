import { styled } from 'modules/core/styles';

import { Props, ThemeBtn as Component } from './component';

// add Props for workaround to solve the type error
export const ThemeBtn = styled<Props>(Component)`
    color: ${(props) => props.theme.colorThemeBtn};
    font-size: 24px;
    left: 0;
    opacity: 0.6;
    padding: 4px 16px;
    position: absolute;
    top: 0;
    z-index: 999;
`;
