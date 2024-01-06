import React from 'react';
import Checkbox from '@mui/material/Checkbox';

function CheckboxCellRenderer({
    value, onChange,
}) {
    return (
        <Checkbox checked={value} onChange={onChange} />
    );
}

export default CheckboxCellRenderer;
