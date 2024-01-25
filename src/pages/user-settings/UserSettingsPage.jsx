import {
    Grid,
} from '@mui/material';
import React from 'react';
import Page from '../../components/Page/Page';
import { GeneralSettings } from './components/GeneralSettings';
import { PasswordSettings } from './components/PasswordSettings';

function EditProfileForm() {
    return (
        <Page title="Settings">
            <Grid item xs={12} md={6}>
                <GeneralSettings />
            </Grid>
            <Grid item xs={12} md={6}>
                <PasswordSettings />
            </Grid>
        </Page>
    );
}

export default EditProfileForm;
