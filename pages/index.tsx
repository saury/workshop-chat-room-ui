import Head from 'next/head';
import { Component } from 'react';

import { App } from 'modules/app';
import { ThemeProvider, themes } from 'modules/core/styles';

import { messageLoader, Messages } from 'modules/chat/data/messagesLoader';

import { Chat } from 'modules/chat/components/Chat';

class Index extends Component<{ messages: Messages[]; me?: any }, { messages: Messages[]; theme?: any }> {
    public static async getInitialProps(ctx) {
        const messages = await messageLoader.fetchMessages({
            password: '1234',
            username: '1234',
        });
        return { messages };
    }

    // public interval;

    // constructor(props) {
    //     super(props);
    // }

    // public componentWillMount() {
    //     this.interval = setInterval(this.fetchMessages, 1000);
    // }

    public render() {
        console.log(this.props.messages);
        return (
            <ThemeProvider theme={themes.normal}>
                <App>
                    <Head>
                        <title>Wii chat</title>
                    </Head>
                    {/* todo: react context */}
                    <Chat />
                </App>
            </ThemeProvider>
        );
    }
}

export default Index;
