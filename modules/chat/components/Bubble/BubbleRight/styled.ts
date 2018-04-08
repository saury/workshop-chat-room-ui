// import { styled } from '../../../../core/styles';

import { BubbleLeft } from '../BubbleLeft/';

// export const Styled = styled(BubbleLeft)`
export const Styled = BubbleLeft.extend`
    text-align: right;
    > i {
        left: auto;
        right: 0;
        transform: rotateY(0);
        + div {
            border-top-left-radius: ${({ theme }) => theme.sizeCornerBubble};
            border-top-right-radius: 0;
        }
    }
`;
