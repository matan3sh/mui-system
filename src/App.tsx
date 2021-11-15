import { CssBaseline, makeStyles } from '@material-ui/core';
import { SideMenu, Header } from 'components';

const useStyles = makeStyles({
  appMain: {
    paddingLeft: 320,
    width: '100%',
  },
});

function App() {
  const classes = useStyles();

  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
