import React, {Component} from 'react';
import {Field, reduxForm, SubmissionError} from 'redux-form'
import {Autocomplete} from "@material-ui/lab";
import {connect} from "react-redux";
import {createTransaction, getUsersList} from "../../store/actions";
import RenderTextField from "./RenderTextField";
import validator from "validator";


const validate = (values) => {
    const errors = {};
    if (!values.amount) {
        errors.amount = 'Required'
    }else if (!validator.isNumeric(values.amount)){
        errors.amount = 'invalid amount'
    }
    return errors
}


class CreateTransactionForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            name: '',
            amount: ''
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const {name, amount} = this.props
        if(name !== nextProps.name || amount !== nextProps.amount ){
            this.props.getUsersList({filter: nextProps.name})
            this.setState({
                name: nextProps.name,
                amount: nextProps.amount
            })
        }
        if(name !== nextProps.name ){
            this.props.getUsersList({filter: nextProps.name})
        }
        return true
    }

    handleSubmit =(values) => {
        const {name, amount, resetForm} = this.state
        return new Promise((resolve, reject) => {
            this.props.createTransaction({name, amount}, (errors) => {
                if (errors) {
                    reject(new SubmissionError(errors));
                }
                resolve(this.setState({
                    name: '',
                    amount: ''
                }));
            });
        })

    }
    nameChange = (e) =>{
        this.props.getUsersList({filter: e.target.value})
        this.setState({
            name: e.target.value
        })
    }
    amountChange = (e) =>{
        this.setState({
            amount: e.target.value
        })
    };

    autoCompleteChange =(e, value)=>{
        this.setState({
            name: value ? value.name: ''
        })
    }

    render() {
        const {
            error,
            handleSubmit,
            pristine,
            reset,
            submitting,
            filterUsers,
        } = this.props;
        const{
            name,
            amount
        } = this.state
        return (
            <form className={'CreateTransactionForm'}  onSubmit={handleSubmit(this.handleSubmit)}>
                <Autocomplete
                    id="filter"
                    options={filterUsers}
                    getOptionLabel={option => option.name}
                    onChange={this.autoCompleteChange}
                    freeSolo
                    style={{ width: 300 }}
                    renderInput={params => (
                        <Field
                            {...params}
                            name='name'
                            label="search user"
                            variant="outlined"
                            component={RenderTextField}
                            fullWidth
                            onChange={this.nameChange}
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'off',
                                value: name
                            }}
                        />
                    )}
                />
                <Field
                    name="amount"
                    component={RenderTextField}
                    variant="outlined"
                    label="Amount"
                    onChange={this.amountChange}
                    inputProps={{
                        value: amount
                    }}
                />
                <div>
                    <button type="submit" disabled={submitting}>Create Transaction</button>
                </div>
                {error && <strong style={{display: 'flex', alignItems:'center'}}>{error}</strong>}
            </form>
        );
    }
}

const mapStateToProps = (state) => ({
    // token: state.user.token,
    form: state.form,
    filterUsers: state.index.filterUsers
});

const mapDispatchToProps = {
    createTransaction,
    getUsersList
};

let Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateTransactionForm);

Container = reduxForm({
    form: 'createTransaction',
    validate
})(Container);

export default Container;
