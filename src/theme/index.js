import { createTheme } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

// Docs: https://mui.com/material-ui/customization/theming/
const theme = createTheme({
    palette: {
        background: {
            default: deepPurple[700],
            light: deepPurple[100],
        },
    },
});

export default theme;
