import { styled, ThemedProps } from 'modules/core/styles';

import { Props } from './component';

import { Component } from './component';

const getBg = (props: ThemedProps<Props>) =>
    !props.type || props.type === 'primary' ? props.theme.colorPrimary : props.theme.colorSecondary;

// const getMarginBotton = ({ separation = false, theme }: ThemedProps<Props>) => {
//     if (!separation) return '';
//     if (separation === 'big') return theme.sizeBubbleTail;
//     return `calc(${theme.sizeBubbleTail} / 2)`;
// };

export const Styled = styled(Component)`
    position: relative;
    margin: ${(props) => (props.separation === 'big' ? '1.4em' : '.5em')} 0 0.5em;
    > div {
        text-align: left;
        background: ${getBg};
        color: ${(props) => (props.from === 'left' ? '#fff' : '#666')};
        max-width: 80%;
        border-radius: ${(props) => props.theme.sizeCornerBubble};
        box-shadow: ${(props) => props.theme.shadow};
        display: inline-block;
        padding: ${(props) => props.theme.sizeIn(-10)} ${(props) => props.theme.sizeIn(-4)};
        margin: 0 ${(props) => props.theme.sizeBubbleTail};
    }
    > i {
        color: ${getBg};
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
