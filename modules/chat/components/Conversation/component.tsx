import * as React from 'react';

import { MeContext } from 'modules/authentication';

import { MessagesContext } from 'modules/chat';
import { Bubble } from 'modules/chat/components/Bubble';

export interface Props {
    className?: string;
}

class Conversation extends React.Component<Props> {
    public render() {
        return (
            <div className={this.props.className}>
                <MeContext.Consumer>
                    {(me) => (
                        <MessagesContext.Consumer>
                            {(messages) =>
                                messages.map((msg, index) => {
                                    const isNewSender = msg.user !== (messages[index - 1] || {}).user;
                                    const needSeparation = isNewSender && index !== 0;

                                    return (
                                        <Bubble
                                            key={msg.id}
                                            content={msg.message}
                                            from={msg.user !== me.id ? 'left' : 'right'}
                                            separation={needSeparation ? 'big' : 'small'}
                                            tail={isNewSender}
                                            type={msg.user === me.id ? 'primary' : 'secondary'}
                                        />
                                    );
                                })
                            }
                        </MessagesContext.Consumer>
                    )}
                </MeContext.Consumer>
            </div>
        );
    }
}

export { Conversation };
