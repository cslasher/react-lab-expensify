import React from 'react';
import { connect } from 'react-redux';
import { startGoogleLogin, startGithubLogin } from '../actions/auth';

export const LoginPage = props => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>Get your expenses under control!</p>
      <div>
        <button
          className="button button--login"
          onClick={props.startGoogleLogin}
        >
          Login with Google
        </button>
        <button
          className="button button--login"
          onClick={props.startGithubLogin}
        >
          Login with Github
        </button>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startGoogleLogin: () => dispatch(startGoogleLogin()),
  startGithubLogin: () => dispatch(startGithubLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
