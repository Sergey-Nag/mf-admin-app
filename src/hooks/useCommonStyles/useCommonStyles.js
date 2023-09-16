import { tss } from 'tss-react/mui';
import theme from '../../theme';

const useCommonStyles = tss.create({
    page: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'inherit',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.light,
    },
    sideBar: {
        width: '300px',
        backgroundColor: theme.palette.background.default,
        height: '100%',

    },
});

export default useCommonStyles;
