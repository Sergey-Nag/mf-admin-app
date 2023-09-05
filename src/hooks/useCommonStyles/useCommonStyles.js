import { tss } from 'tss-react/mui';

const useCommonStyles = tss.create({
    page: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'inherit',
    },
    pageColumn: {
        flexDirection: 'column',
    },
});

export default useCommonStyles;
