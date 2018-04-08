import * as React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    display: block;
    background: limegreen;
    padding: 0 12px;
    font-size: 16px;
    color: #fff;
    border: 0;
    min-width: 80px;
`;

export interface Props {
    className?: string;
}

class Editor extends React.Component<Props> {
    public render() {
        return (
            <div className={this.props.className}>
                <div>
                    <div contentEditable />
                </div>
                <Button>Send</Button>
            </div>
        );
    }
}

export { Editor };
