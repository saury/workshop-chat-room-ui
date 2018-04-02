import styled from 'modules/core/styles';

const Container = styled.div`
    background: ${({ theme }) => theme.colorPrimary};
    display: inline-block;
    padding: 8px 12px
    border-radius: 8px
    color: #666
    margin: 0 12px
`;

export const Bubble = (props) => <Container className={props.className}>{props.content}</Container>;
