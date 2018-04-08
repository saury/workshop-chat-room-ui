import * as React from 'react';

import { Bubble } from 'modules/chat/components/Bubble';

const me = { id: '2' };
const messages = [
    { id: '1', from: '1', message: 'Hi, there!' },
    { id: '2', from: '1', message: 'How have you been?' },
    { id: '3', from: '2', message: 'Hey!' },
    { id: '4', from: '2', message: 'Good, and you?' },
];

for (let i = 0; i < 50; i += 1) {
    messages.push({ id: `${1000 + i}`, from: '2', message: 'Good, and you?' });
}

class Component extends React.Component {
    public static displayName = 'Conversation';

    public render() {
        return (
            <div>
                {messages.map((msg, index) => {
                    const isNewSender = msg.from !== (messages[index - 1] || {}).from;
                    const needSeparation = isNewSender && index !== 0;

                    return (
                        <Bubble
                            key={msg.id}
                            content={msg.message}
                            from={msg.from !== me.id ? 'left' : 'right'}
                            separation={needSeparation ? 'big' : 'small'}
                            tail={isNewSender}
                        />
                    );
                })}
            </div>
        );
    }
}

export { Component };
