import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { setCIR } from '../../../../../redux/create_contract/cc.actions';
import { selectCCCIR } from '../../../../../redux/create_contract/cc.selector'
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText
} from '@material-ui/core';

export default function CheckboxField_smpc(props) {
    const { label, ...rest } = props;
    const [field, meta, helper] = useField(props);
    const { setValue } = helper;
    const dispatch = useDispatch()
    const ccreduxcir = useSelector(state => selectCCCIR(state))
    console.log(ccreduxcir)
    function _renderHelperText() {
        const [touched, error] = at(meta, 'touched', 'error');
        if (touched && error) {
            return <FormHelperText>{error}</FormHelperText>;
        }
    }

    function _onChange(e) {
        setValue(e.target.checked);
        dispatch(setCIR())
    }

    return (
        <FormControl {...rest}>
            <FormControlLabel
                value={field.checked}
                checked={field.checked ? field.checked : ccreduxcir}
                control={<Checkbox {...field} onChange={_onChange} />}
                label={label}
            />
            {_renderHelperText()}
        </FormControl>
    );
}
