import * as base64 from 'base-64';

import { API_BASE_URL, fetch } from 'modules/core';

export interface Messages {
    id: string;
    message: string;
    sentAt: string;
    user: string;
    receivedByServerAt: string;
}

export const messageLoader = {
    async fetchMessages({ username, password }: { username: string; password: string }): Promise<Messages> {
        return await (await fetch(`${API_BASE_URL}/messages`, {
            headers: {
                Authorization: `Basic ${base64.encode(`${username}:${password}`)}`,
                'content-type': 'application/json',
            },
            method: 'get',
        })).json();
    },
};
