import { styled } from 'modules/core/styles';

import { Conversation as Component } from './component';

export const Conversation = styled(Component)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 0 ${(props) => props.theme.sizeIn(-8)};
    padding-bottom: 40px;
`;
