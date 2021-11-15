import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
} from '@material-ui/core';
import {
  ChatBubbleOutline,
  Notifications,
  PowerSettingsNew,
} from '@material-ui/icons';

const Header = () => {
  return (
    <AppBar position='static'>
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
