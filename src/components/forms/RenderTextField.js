import React, {Component} from 'react';
import {TextField} from "@material-ui/core";

class RenderTextField extends Component {
    render() {
        const {input, type, meta: {touched, error, invalid}, ...custom} = this.props;
        return (
            <TextField type={type} error={touched && invalid} helperText={touched && error} {...input} {...custom}/>
        );
    }
}

export default RenderTextField;