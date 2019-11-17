import React, {Component} from 'react';
import MUIDataTable from "mui-datatables";
import {connect} from "react-redux";
import CreateTransactionForm from "./forms/CreateTransactionForm";

class TransactionsTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
            amount: null,
        }

        this.columns = [
            {
                name: 'username',
                label: 'Correspondent Name',
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: 'date',
                label: 'Date/Time',
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: 'amount',
                label: 'Transaction amount',
                options: {
                    filter: true,
                    sort: true,
                }
            },
            {
                name: 'balance',
                label: 'Balance',
                options: {
                    filter: false,
                    sort: false,
                }
            },
        ]
        this.options = {
            print: false,
            download: false,
            selectableRows: 'none',
            onRowClick: this.rowClick
        }
    }

    rowClick = (rowData) => {
        this.setState({
            name: rowData[0],
            amount: rowData[2]
        })
    }

    render() {
        const {data} = this.props;
        const {name, amount} = this.state;
        return (
            <>
                <CreateTransactionForm name={name} amount={amount}/>
                <MUIDataTable
                    className={'transactionLists'}
                    title={"Transactions List"}
                    data={data}
                    columns={this.columns}
                    options={this.options}
                />
            </>
        );
    }

}

const mapStateToProps = (state) => ({
    transactionList: state.index.transactionList
});

const mapDispatchToProps = {};

const TransactionsTableContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TransactionsTable);

export default TransactionsTableContainer