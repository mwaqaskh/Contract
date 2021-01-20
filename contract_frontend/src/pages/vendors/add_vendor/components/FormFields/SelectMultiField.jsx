import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import { at } from 'lodash';
import { useField } from 'formik';
import {
    InputLabel,
    FormControl,
    Select,
    MenuItem,
    FormHelperText
} from '@material-ui/core';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 100,
        },
    },
};

function SelectField(props) {
    const { label, data, ...rest } = props;
    const [field, meta] = useField(props);
    const { value: selectedValue } = field;
    const [touched, error] = at(meta, 'touched', 'error');
    const isError = touched && error && true;
    function _renderHelperText() {
        if (isError) {
            return <FormHelperText>{error}</FormHelperText>;
        }
    }
    const [personName, setPersonName] = React.useState([]);
    return (
        <FormControl {...rest} error={isError}>
            <InputLabel>{label}</InputLabel>
            <Select multiple {...field} MenuProps={MenuProps} renderValue={(selected) => selected ? selected.join(', ') : ''} value={selectedValue ? selectedValue : ''}>
                {data.map((item, index) => (
                    <MenuItem key={item} value={item}>
                        <Checkbox checked={selectedValue.indexOf(item) > -1} />
                        <ListItemText primary={item} />
                    </MenuItem>

                ))}
            </Select>
            {_renderHelperText()}
        </FormControl>
    );
}

SelectField.defaultProps = {
    data: []
};

SelectField.propTypes = {
    data: PropTypes.array.isRequired
};

export default SelectField;
