import { styled } from 'modules/core/styles';

import { Conversation as Component } from './component';

export const Conversation = styled(Component)`
    width: 100%;
    overflow: auto;
    flex-basis: 1;
    padding: ${(props) => props.theme.sizeIn(-8)};
`;
