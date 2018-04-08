import { styled } from 'modules/core/styles';

const Container = styled.div`
    background: ${({ theme }) => theme.colorPrimary};
    border-radius: ${({ theme }) => theme.sizeCornerBubble};
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    display: inline-block;
    padding: ${({ theme }) => theme.sizeIn(-10)} ${({ theme }) => theme.sizeIn(-4)};
    color: #666;
    margin: 0 12px;
`;

export const Bubble = (props) => <Container className={props.className}>{props.content}</Container>;
