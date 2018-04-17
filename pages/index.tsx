import * as nCookie from 'next-cookies';

import Head from 'next/head';
import { Component } from 'react';

import { App } from 'modules/app';

import { authenticator, Me, MeContext } from 'modules/authentication';

import { ThemeProvider, themes } from 'modules/core/styles';

import { messageLoader, Messages, MessagesContext } from 'modules/chat';

import { Chat } from 'modules/chat/components/Chat';

import { Login } from 'modules/chat/components/Login';

class Index extends Component<{ messages: Messages[]; me?: Me }, { messages: Messages[]; theme?: any }> {
    public static async getInitialProps(ctx) {
        const { password, username } = nCookie(ctx);
        if (!password || !username) return {};
        const me = await authenticator.signIn({
            password,
            username,
        });
        const messages = await messageLoader.fetchMessages(me);
        messages.sort((a, b) => a.sentAt.localeCompare(b.sentAt));
        return { messages, me };
    }

    public state = { messages: this.props.messages };
    public interval: NodeJS.Timer;

    constructor(props) {
        super(props);
    }

    public componentWillMount() {
        this.interval = setInterval(() => {
            // tslint:disable-next-line:no-console
            console.warn('fetch msgs');
            this.fetchMessages();
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
                    {!!this.props.me && (
                        <MeContext.Provider value={this.props.me}>
                            <MessagesContext.Provider value={this.state.messages}>
                                <Chat />
                            </MessagesContext.Provider>
                        </MeContext.Provider>
                    )}
                    {!this.props.me && <Login />}
                </App>
            </ThemeProvider>
        );
    }

    private fetchMessages = async () => {
        if (!this.props.me) return;
        const messages = await messageLoader.fetchMessages(this.props.me);
        messages.sort((a, b) => a.sentAt.localeCompare(b.sentAt));
        this.setState({ messages });
    };
}

export default Index;
