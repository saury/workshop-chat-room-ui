import cookie from 'js-cookie';
import * as React from 'react';

import { authenticator } from 'modules/authentication';

interface Props {
    className?: string;
}

class Login extends React.Component<Props> {
    public state = {
        password: '',
        username: '',
    };

    public signIn = async (e) => {
        e.preventDefault();
        const me = await authenticator.signIn({
            password: this.state.password,
            username: this.state.username,
        });
        this.saveToCookie();
        return me;
    };

    public signUp = async (e) => {
        e.preventDefault();
        const me = await authenticator.signUp({
            password: this.state.password,
            username: this.state.username,
        });
        this.saveToCookie();
        return me;
    };

    public onChangeHandler = (evt) => {
        const obj = {};
        obj[(evt.target as HTMLInputElement).id] = evt.target.value;
        this.setState(obj);
    };

    public render() {
        return (
            <form className={this.props.className}>
                <div>
                    <label htmlFor="username">Name:</label>
                    <div>
                        <input type="text" value={this.state.username} id="username" onChange={this.onChangeHandler} />
                    </div>
                </div>
                <div>
                    <label htmlFor="username">Password</label>
                    <div>
                        <input
                            type="password"
                            value={this.state.password}
                            id="password"
                            onChange={this.onChangeHandler}
                        />
                    </div>
                </div>
                <div className="btn-group">
                    <button onClick={this.signIn}>Sign In</button>
                    <button onClick={this.signUp}>Sign Up</button>
                </div>
            </form>
        );
    }
    private saveToCookie() {
        cookie.set('username', this.state.username);
        cookie.set('password', this.state.password);
        location.reload();
    }
}

export { Login };
