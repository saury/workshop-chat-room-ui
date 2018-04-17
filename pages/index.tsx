import Head from 'next/head';
import { Component } from 'react';

import { App } from 'modules/app';
import { ThemeProvider, themes } from 'modules/core/styles';

import { messageLoader, Messages, MessagesContext } from 'modules/chat';

import { Chat } from 'modules/chat/components/Chat';

class Index extends Component<{ messages: Messages[]; me?: any }, { messages: Messages[]; theme?: any }> {
    public static async getInitialProps(ctx) {
        debugger;
        const messages = await messageLoader.fetchMessages({
            password: '1234',
            username: '1234',
        });
        return { messages };
    }

    public interval;

    // constructor(props) {
    //     super(props);
    // }

    public componentWillMount() {
        this.interval = setInterval(() => {
            // tslint:disable-next-line:no-console
            console.warn('fetch msgs');
        }, 1000);
    }

    public componentWillUnmount() {
        clearInterval(this.interval);
    }

    public render() {
        // tslint:disable-next-line:no-console
        console.log(this.props.messages);
        return (
            <ThemeProvider theme={themes.normal}>
                <App>
                    <Head>
                        <title>Wii chat</title>
                    </Head>
                    <MessagesContext.Provider value={this.props.messages}>
                        <Chat />
                    </MessagesContext.Provider>
                </App>
            </ThemeProvider>
        );
    }
}

export default Index;
