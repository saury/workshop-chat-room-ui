import { Component } from 'react';

import { Theme } from 'modules/core/styles';

import { injectGlobalWithTheme } from './injectGlobalWithTheme';

export class ThemeApp extends Component<{ theme: Theme }> {
    public componentWillMount() {
        injectGlobalWithTheme(this.props.theme);
    }

    public render() {
        return this.props.children;
    }
}
