import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Toolbar,
} from '@material-ui/core';
import {
  ChatBubbleOutline,
  Notifications,
  PowerSettingsNew,
} from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#fff',
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar>
        <Grid container>
          <Grid item>
            <InputBase />
          </Grid>

          <Grid item sm></Grid>

          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color='secondary'>
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color='primary'>
                <ChatBubbleOutline />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNew />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
