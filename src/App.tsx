import { makeStyles } from '@material-ui/core';
import { PeopleOutlineTwoTone } from '@material-ui/icons';
import { SideMenu, Header, PageHeader } from 'components';

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
        <PageHeader
          title='Page Header'
          subtitle='Page Subtitle'
          icon={<PeopleOutlineTwoTone fontSize='large' />}
        />
      </div>
    </>
  );
}

export default App;
