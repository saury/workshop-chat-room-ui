import * as React from 'react';

import { Bubble } from 'modules/chat/components/Bubble';

class Component extends React.Component {
    public static displayName = 'Conversation';

    public render() {
        return (
            <div>
                <Bubble from="left" tail content="ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha" />
                <Bubble from="left" content="ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha" />
                <Bubble tail separation="big" content="ha ha ha ha ha ha ha ha ha ha ha ha ha  ha ha ha" />
                <Bubble content="ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha ha" />
            </div>
        );
    }
}

export { Component };
