import React, {Component} from 'react';
// import '../asset/style/login.css'
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom'
import {signIn, getUserInfo} from "../store/actions";
import SignInForm from "../components/forms/SignInForm";
import RegisterForm from "../components/forms/RegisterForm";

class Login extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const {id_token} = this.props
        if ( nextProps.id_token && nextProps.id_token  !== id_token){
            nextProps.getUserInfo();
        }
        return true
    }



    render() {
        const id_token = localStorage.getItem('id_token');
        return (
            <>
                {id_token ?
                    <Redirect to="/"/>
                    :
                    <div className={'Login'}>
                        <SignInForm/>
                        <RegisterForm/>
                    </div>


                }
            </>
        );
    }
}


const mapStateToProps = (state) => ({
  id_token: state.index.id_token
});

const mapDispatchToProps = {
    signIn,
    getUserInfo
};

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);

// export default withRouter(LoginContainer);
export default LoginContainer;
