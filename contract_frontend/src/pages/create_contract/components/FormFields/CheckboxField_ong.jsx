import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { setONG } from '../../../../redux/create_contract/cc.actions';
import { selectCCONG } from '../../../../redux/create_contract/cc.selector'
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
    const ccreduxong = useSelector(state => selectCCONG(state))
    console.log(ccreduxong)
    function _renderHelperText() {
        const [touched, error] = at(meta, 'touched', 'error');
        if (touched && error) {
            return <FormHelperText>{error}</FormHelperText>;
        }
    }

    function _onChange(e) {
        setValue(e.target.checked);
        dispatch(setONG())
    }

    return (
        <FormControl {...rest}>
            <FormControlLabel
                value={field.checked}
                checked={field.checked ? field.checked : ccreduxong}
                control={<Checkbox {...field} onChange={_onChange} />}
                label={label}
            />
            {_renderHelperText()}
        </FormControl>
    );
}
