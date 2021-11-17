import { makeStyles } from '@material-ui/core';
import { SideMenu, Header } from 'components';
import { Employees } from 'pages';

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
        <Employees />
      </div>
    </>
  );
}

export default App;
