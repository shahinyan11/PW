import React, {Component} from 'react';
import {Field, reduxForm, SubmissionError} from 'redux-form'
import RenderTextField from "./RenderTextField";
import validator from 'validator';
import {connect} from "react-redux";
import {signIn} from "../../store/actions";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required'
  } else if (!validator.isEmail(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}


class SignInForm extends Component {

  handleSubmit =(values) => {
    return new Promise((resolve, reject) => {
      this.props.signIn(values, (errors) => {
        if (errors) {
          reject(new SubmissionError(errors));
        }
        resolve();
      });
    })
  }

  render() {
    const {error, handleSubmit, submitting} = this.props;
    return (
      <form className={'SignInForm'}  onSubmit={handleSubmit(this.handleSubmit)}>
        <Field name="email" component={RenderTextField} label="Email"/>
        <Field name="password" type={'password'} component={RenderTextField} label="Password"/>
          {error && <strong>{error}</strong>}
        <div>
          <button type="submit" disabled={submitting}>SIGN IN</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  // token: state.user.token,
  form: state.form
});

const mapDispatchToProps = {
  signIn
};

let Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);

Container = reduxForm({
  form: 'index',
  validate
})(Container);

export default Container;
