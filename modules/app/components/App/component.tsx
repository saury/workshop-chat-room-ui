import * as React from 'react';

interface Props {
    className?: string;
}

export class App extends React.Component<Props> {
    public render() {
        return (
            <div className={this.props.className} {...this.props}>
                {this.props.children}
            </div>
        );
    }
}
