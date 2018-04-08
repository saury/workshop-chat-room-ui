import { styled } from '../../../../core/styles';

import { BubbleLeft } from '../BubbleLeft/';

export const Styled = styled(BubbleLeft)`
    text-align: right;
    /* > div {
        background: ${(props) => props.theme.colorPrimary};
    } */
    > i {
        /* color: ${(props) => props.theme.colorPrimary}; */
        left: auto;
        right: 0;
        transform: rotateY(0);
        + div {
            border-top-left-radius: ${({ theme }) => theme.sizeCornerBubble};
            border-top-right-radius: 0;
        }
    }
`;
