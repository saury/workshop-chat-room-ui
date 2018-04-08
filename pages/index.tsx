import Head from 'next/head';
import { Component } from 'react';
import styled from 'styled-components';

import { App } from 'modules/app';
import { ThemeProvider, themes } from 'modules/core/styles';

import { Bubble } from 'modules/chat/components/Bubble';
// import { BubbleLeft } from 'modules/chat/components/Bubble/BubbleLeft';
// import { BubbleRight } from 'modules/chat/components/Bubble/BubbleRight';

const Button = styled.button`
    display: block;
    background: cyan;
    padding: 8px 12px;
    font-size: 16px;
    color: #fff;
    border: 0;
    min-width: 120px;
`;

class Index extends Component {
    public render() {
        return (
            <ThemeProvider theme={themes.normal}>
                <App>
                    <Head>
                        <title>index page title</title>
                    </Head>
                    {/* bubbles start */}
                    <Bubble from="left" tail content="ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha" />
                    <Bubble from="left" content="ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha" />
                    <Bubble tail separation="big" content="ha ha ha ha ha ha ha ha ha ha ha ha ha  ha ha ha" />
                    <Bubble content="ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha" />
                    {/* bubbles end */}
                    <div
                        style={{
                            border: '1px solid cyan',
                            borderRadius: '4px',
                            display: 'flex',
                            overflow: 'hidden',
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
                </App>
            </ThemeProvider>
        );
    }
}

export default Index;
