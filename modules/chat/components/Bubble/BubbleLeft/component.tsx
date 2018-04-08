import { PureComponent } from 'react';

import { Icon } from 'modules/icons';

import tailSvg from '../tail.svg';

export interface Props {
    from?: string;
    content: string;
    className?: string;
    type?: 'primary' | 'secondary';
    tail?: boolean;
    separation?: 'big' | 'small';
}

class Component extends PureComponent<Props> {
    public static displayName = 'BubbleLeft';

    public render() {
        return (
            <div data-type={this.props.from === 'left' ? 'primary' : 'secondary'} className={this.props.className}>
                {!!this.props.tail && <Icon src={tailSvg} />}
                <div>{this.props.content}</div>
            </div>
        );
    }
}

export { Component };
