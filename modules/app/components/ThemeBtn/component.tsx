import * as React from 'react';

export interface Props {
    onClick: () => void;
    themeType: string;
    className?: string;
}

export class ThemeBtn extends React.Component<Props> {
    constructor(props) {
        super(props);
    }

    public onClickHandler = () => {
        this.props.onClick!();
    };

    public render() {
        return (
            <div className={this.props.className} onClick={this.onClickHandler}>
                {this.props.themeType !== 'night' ? '㊰' : '㊐'}
            </div>
        );
    }
}
