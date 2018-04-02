import Head from 'next/head';
import React, { Component } from 'react';

class Index extends Component {
    public render() {
        return (
            <div>
                <Head>
                    <title>index page title</title>
                </Head>
                <p>Hello Next.js</p>
            </div>
        );
    }
}

export default Index;
