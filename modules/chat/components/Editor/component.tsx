import * as React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    display: block;
    background: limegreen;
    padding: 8px 12px;
    font-size: 16px;
    color: #fff;
    border: 0;
    min-width: 80px;
`;

class Component extends React.Component {
    public static displayName = 'Editor';

    public render() {
        return (
            <div
                style={{
                    border: '1px solid limegreen',
                    borderRadius: '4px',
                    bottom: '0',
                    display: 'flex',
                    overflow: 'hidden',
                    position: 'absolute',
                    width: '100%',
                }}
            >
                <div style={{ flexGrow: 1, display: 'flex' }}>
                    <input
                        style={{
                            border: 0,
                            fontSize: '16px',
                            padding: '0 12px',
                            width: '100%',
                        }}
                        type="text"
                    />
                </div>
                <Button>Send</Button>
            </div>
        );
    }
}

export { Component };
