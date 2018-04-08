import Head from 'next/head';
import { Component } from 'react';

import { App } from 'modules/app';
import { ThemeProvider, themes } from 'modules/core/styles';

import { Chat } from 'modules/chat/components/Chat';

class Index extends Component {
    public render() {
        return (
            <ThemeProvider theme={themes.normal}>
                <App>
                    <Head>
                        <title>index page title</title>
                    </Head>
                    <Chat />
                </App>
            </ThemeProvider>
        );
    }
}

export default Index;
