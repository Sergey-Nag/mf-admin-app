import React from 'react';
import ImageIcon from '@mui/icons-material/Image';
import { Box } from '@mui/material';

function ImageCellRenderer({ value }) {
    if (!value) {
        return (
            <Box height="100%" display="flex" alignItems="center" justifyContent="center">
                <ImageIcon sx={{ fontSize: '3rem', opacity: 0.2 }} />
            </Box>
        );
    }

    return (
        <img
            src={value?.thumbUrl || value?.url}
            alt={value}
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
            }}
        />
    );
}

export default ImageCellRenderer;
