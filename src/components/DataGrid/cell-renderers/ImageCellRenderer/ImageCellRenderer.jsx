import React from 'react';

function ImageCellRenderer({ value }) {
    return (
        <img
            src={value}
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
