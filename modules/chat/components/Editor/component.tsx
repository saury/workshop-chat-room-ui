import * as React from 'react';
import styled from 'styled-components';

import { Me } from 'modules/authentication';
import { messageLoader } from 'modules/chat';

const Button = styled.button`
    display: inline-block;
    background: limegreen;
    padding: 0 12px;
    font-size: 16px;
    color: #fff;
    border: 0;
    min-width: 80px;
`;

export interface Props {
    className?: string;
    me: Me;
}

class Editor extends React.Component<Props, any> {
    constructor(props) {
        super(props);

        this.state = {
            height: '40px',
            inputBoxHeight: '28px',
        };
    }

    public onInputHandler = (evt) => {
        const inputHeight = Math.min(Math.max((evt.target as HTMLDivElement).offsetHeight, 40), 120);
        const offsetVal = 12;
        this.setState({
            height: inputHeight,
            inputBoxHeight: inputHeight - offsetVal,
        });
    };

    public onKeyDownHandler = (evt) => {
        const target = evt.target as HTMLDivElement;
        if (target.innerHTML === '') return;
        if (!evt.shiftKey && evt.keyCode === 13) {
            evt.preventDefault();
            evt.stopPropagation();
            // tslint:disable-next-line:no-console
            console.log(`send info: ${target.innerHTML}`);
            // send info
            messageLoader.sendMessages({
                message: target.innerHTML,
                password: this.props.me.password,
                username: this.props.me.username,
            });

            target.innerHTML = '';
            this.onInputHandler(evt);
        }
    };

    public render() {
        return (
            <div
                className={this.props.className}
                style={{
                    minHeight: this.state.height,
                }}
            >
                <div className="input-box">
                    <div
                        style={{
                            maxHeight: this.state.inputBoxHeight,
                        }}
                    >
                        <div contentEditable onInput={this.onInputHandler} onKeyDown={this.onKeyDownHandler} />
                    </div>
                </div>
                <Button>Send</Button>
            </div>
        );
    }
}

export { Editor };
