import React from 'react';
import PublishButton from './PublishButton';
import SaveButton from '../Buttons/SaveButton';

export default function ProductControls({
    publishValue, onPublishChange, isSaveDisabled, onSave, isSaveBusy,
}) {
    return (
        <>
            <PublishButton
                value={publishValue}
                onChange={onPublishChange}
            />
            <SaveButton
                disabled={isSaveDisabled}
                onClick={onSave}
                busy={isSaveBusy}
            />
        </>
    );
}
