import React, {Component} from 'react';
import {connect} from "react-redux";
import Wrapper from "../components/Wrapper";
import {getTransactionList} from "../store/actions";
import CreateTransactionForm from "../components/forms/CreateTransactionForm";
import TransactionsTable from "../components/TransactionsTable";

class Home extends Component {

    componentWillMount() {
        this.props.getTransactionList()
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const {userData} = this.props
        if (userData && userData.balance !== nextProps.userData.balance) {
            this.props.getTransactionList()
        }
        return true
    }

    render() {
        const {transactionList} = this.props;
        return (
            <div className={'Home'}>
                <Wrapper>
                    <TransactionsTable data={transactionList}/>
                </Wrapper>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userList: state.index.userList,
    userData: state.index.userData,
    transactionList: state.index.transactionList
});

const mapDispatchToProps = {
    getTransactionList
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
export default HomeContainer
