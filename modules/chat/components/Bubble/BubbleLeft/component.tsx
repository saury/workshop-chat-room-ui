import { PureComponent } from 'react';

import { Icon } from 'modules/icons';

import { Bubble } from '../index';

import tailSvg from '../tail.svg';

export interface Props {
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
            <div className={this.props.className}>
                <Bubble content={this.props.content} />
                {this.props.tail && <Icon src={tailSvg} />}
            </div>
        );
    }
}

export { Component };
