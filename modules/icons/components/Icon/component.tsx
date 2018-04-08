import * as React from 'react';

export interface Props {
    src: string;
    className?: string;
}

class Component extends React.Component<Props> {
    public static displayName = 'Icon';

    public render() {
        return <i className={this.props.className} dangerouslySetInnerHTML={{ __html: this.props.src }} />;
    }
}

export { Component };
