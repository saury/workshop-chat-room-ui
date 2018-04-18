import * as React from 'react';

interface Props {
    onClick: () => void;
    className?: string;
    theme?: string;
}

export class Component extends React.Component<Props> {
    public onClickHandler = () => {
        this.props.onClick();
    };
    public render() {
        return (
            <div
                style={{
                    color: this.props.theme === 'night' ? '#fff' : '#000',
                    fontSize: '24px',
                    padding: '4px 16px',
                    left: '0',
                    position: 'absolute',
                    top: '0',
                    zIndex: '99',
                    opacity: 0.4,
                }}
                onClick={this.onClickHandler}
            >
                {this.props.theme !== 'night' ? '㊰' : '㊐'}
            </div>
        );
    }
}
