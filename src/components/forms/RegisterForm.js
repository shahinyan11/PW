import React, {Component} from 'react';
import {Field, reduxForm, SubmissionError} from 'redux-form'
import RenderTextField from "./RenderTextField";
import validator from 'validator';
import {connect} from "react-redux";
import {register} from "../../store/actions";

const validate = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required'
    }else if(!values.email){
        errors.email = 'Required'
    }else if (!validator.isEmail(values.email)) {
        errors.email = 'Invalid email address'
    }else if (!values.password) {
        errors.password = 'Required'
    }else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Confirm password does not match'
    }
    return errors
}


class RegisterForm extends Component {

    handleSubmit =(values) => {
        const data = {
            username: values.name,
            password: values.password,
            email: values.email
        }
        return new Promise((resolve, reject) => {
            this.props.register(data, (errors) => {
                if (errors) {
                    reject(new SubmissionError(errors));
                }
                resolve();
            });
        })
    }

    render() {
        const {error, handleSubmit, submitting, token} = this.props;
        if (token) {
            // return <Redirect to="/account"/>
        }
        return (
            <form className={'RegisterForm'}  onSubmit={handleSubmit(this.handleSubmit)}>
                <Field name="name" component={RenderTextField} label="Name"/>
                <Field name="email" component={RenderTextField} label="Email"/>
                <Field name="password" type={'password'} component={RenderTextField} label="Password"/>
                <Field name="confirmPassword" type={'password'} component={RenderTextField} label="Confirm Password"/>
                {error && <strong>{error}</strong>}
                <div>
                    <button type="submit" disabled={submitting}>Register</button>
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
    register
};

let Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterForm);

Container = reduxForm({
    form: 'register',
    validate,
})(Container);

export default Container;
