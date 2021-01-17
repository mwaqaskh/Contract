import { makeStyles } from '@material-ui/core/styles';
import { irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs';
export default makeStyles(theme => ({
    listItem: {
        padding: theme.spacing(1, 0)
    },
    total: {
        fontWeight: '700'
    },
    title: {
        marginTop: theme.spacing(2)
    },
    thead: {
        marginBottom: '0.8em'
    },
    reviewlabel: {
        marginBottom: '0.6em',
        fontWeight: 'normal',
        color: 'black'
    },
    reviewvalue: {
        marginBottom: '0.6em',
        fontWeight: 'bolder',
        color: '#1976d2'
    },
    reviewcard: {
        marginBottom: '1em',
    },
    reviewcard1: {
        marginBottom: '2.5em',
    }
}));