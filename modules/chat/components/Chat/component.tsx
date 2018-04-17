import * as React from 'react';

import { MeContext } from 'modules/authentication';
import { Conversation } from 'modules/chat/components/Conversation';
import { Editor } from 'modules/chat/components/Editor';

interface Props {
    className?: string;
}

class Chat extends React.Component<Props> {
    public render() {
        return (
            <div className={this.props.className}>
                <Conversation />
                <MeContext.Consumer>{(me) => <Editor me={me} />}</MeContext.Consumer>
            </div>
        );
    }
}

export { Chat };
