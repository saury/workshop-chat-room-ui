import * as React from 'react';

import { Conversation } from 'modules/chat/components/Conversation';
import { Editor } from 'modules/chat/components/Editor';

class Component extends React.Component {
    public static displayName = 'Chat';
    public render() {
        return (
            <div>
                <Conversation />
                <Editor />
            </div>
        );
    }
}

export { Component };
