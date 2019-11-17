import React, {Component} from 'react';
import {connect} from "react-redux";
import {signOut} from "../store/actions";

class Header extends Component {


    handleClick = ()=>{
        this.props.signOut()
    }

    render() {
        const {userData} = this.props;
        return (
            <div className={'Header'}>
                <div className={'logo'}>
                    PW payment
                </div>
                {
                    userData ?
                        <div className={'account'}>
                            <ul>
                                <li>{userData.name}</li>
                                <li>Balance {userData.balance}pw</li>
                                <li className={'signOut'}>
                                    <button onClick={this.handleClick}>
                                        Sign Out
                                    </button>
                                </li>
                            </ul>
                        </div>
                        :null
                }

            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    userData: state.index.userData
});

const mapDispatchToProps = {
    signOut
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Header);

export default HeaderContainer;