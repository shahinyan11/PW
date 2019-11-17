import React, {Component} from 'react';
import {connect} from "react-redux";
import Header from "./Header";

class Wrapper extends Component {

    render() {
        return (
            <>
                <Header/>
                <div className='content'>
                    {this.props.children}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {};

const WrapperContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Wrapper);

export default WrapperContainer;