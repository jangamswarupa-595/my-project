/*import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import ExploreIcon from '@mui/icons-material/Explore';
import AnimationIcon from '@mui/icons-material/Animation';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import StarIcon from '@mui/icons-material/Star';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -${drawerWidth}px,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: calc(100% - ${drawerWidth}px),
    marginLeft: ${drawerWidth}px,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  position: 'relative',
}));

const NetflixTypography = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  textAlign: 'center',
  color: 'white',
  fontWeight: 'bold',
}));

const BoldButton = styled(Button)(({ theme }) => ({
  fontWeight: 'bold',
}));

export default function PersistentDrawerLeft({ onCategorySelect }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [createAccountOpen, setCreateAccountOpen] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(false); // State for settings dialog
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [accessGranted, setAccessGranted] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleCreateAccountOpen = () => {
    setCreateAccountOpen(true);
    setLoginOpen(false);
  };

  const handleCreateAccountClose = () => {
    setCreateAccountOpen(false);
  };

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      setAccessGranted(true);
      setLoginOpen(false);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleForgotPassword = () => {
    alert('Forgot Password functionality is not implemented.');
  };

  const handleSettingsOpen = () => {
    setSettingsOpen(true);
  };

  const handleSettingsClose = () => {
    setSettingsOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <ToolbarStyled>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search…"
            sx={{ backgroundColor: 'background.paper' }}
          />
          <NetflixTypography variant="h6" noWrap component="div">
            NETFLIX-4.0
          </NetflixTypography>
          <BoldButton color="inherit" onClick={handleLoginOpen}>
            Login Page
          </BoldButton>
        </ToolbarStyled>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Home', 'Popular', 'Top Rated', 'Upcoming'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => handleCategoryClick(text)}>
                <ListItemIcon>
                  {text === 'Home' ? <HomeIcon /> :
                  text === 'Popular' ? <TrendingUpIcon /> :
                  text === 'Top Rated' ? <StarIcon /> :
                  text === 'Upcoming' ? <NewReleasesIcon /> :
                  null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Action', 'Comedy', 'Adventure', 'Animation', 'Favourites', 'Settings'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => text === 'Settings' ? handleSettingsOpen() : handleCategoryClick(text)}>
                <ListItemIcon>
                  {text === 'Action' ? <SportsMotorsportsIcon /> :
                  text === 'Comedy' ? <EmojiEmotionsIcon /> : 
                  text === 'Adventure' ? <ExploreIcon /> :
                  text === 'Animation' ? <AnimationIcon /> :
                  text === 'Favourites' ? <FavoriteIcon sx={{ color: 'black' }} /> : 
                  text === 'Settings' ? <SettingsIcon /> :
                  null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {accessGranted && (
          <Typography variant="h6">Welcome, Admin!</Typography>
        )}
      </Main>
      <Dialog open={loginOpen} onClose={handleLoginClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="normal">
            <InputLabel>Username</InputLabel>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Password</InputLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormHelperText>
              <Button color="inherit" onClick={handleForgotPassword}>
                Forgot Password?
              </Button>
            </FormHelperText>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLoginClose}>Cancel</Button>
          <Button onClick={handleLogin}>Login</Button>
          <Button onClick={handleCreateAccountOpen}>Create Account</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={createAccountOpen} onClose={handleCreateAccountClose}>
        <DialogTitle>Create Account</DialogTitle>
        <DialogContent>
          {/* Add your form fields here for account creation }
          <TextField
            label="New Username"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="New Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCreateAccountClose}>Cancel</Button>
          <Button onClick={handleCreateAccountClose}>Create Account</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={settingsOpen} onClose={handleSettingsClose}>
        <DialogTitle>Settings</DialogTitle>
        <DialogContent>
          /* Add settings form fields here */
          /*<TextField label="Setting " fullWidth margin="normal" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSettingsClose}>Cancel</Button>
          <Button onClick={handleSettingsClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}*/


/*import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import ExploreIcon from '@mui/icons-material/Explore';
import AnimationIcon from '@mui/icons-material/Animation';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import StarIcon from '@mui/icons-material/Star';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`, // Corrected to use backticks for template literals
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`, // Corrected to use backticks for template literals
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  position: 'relative',
}));

const NetflixTypography = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  textAlign: 'center',
  color: 'white',
  fontWeight: 'bold',
}));

const BoldButton = styled(Button)(({ theme }) => ({
  fontWeight: 'bold',
}));

export default function PersistentDrawerLeft({ onCategorySelect }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [createAccountOpen, setCreateAccountOpen] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(false); // State for settings dialog
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [accessGranted, setAccessGranted] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleCreateAccountOpen = () => {
    setCreateAccountOpen(true);
    setLoginOpen(false);
  };

  const handleCreateAccountClose = () => {
    setCreateAccountOpen(false);
  };

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      setAccessGranted(true);
      setLoginOpen(false);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleForgotPassword = () => {
    alert('Forgot Password functionality is not implemented.');
  };

  const handleSettingsOpen = () => {
    setSettingsOpen(true);
  };

  const handleSettingsClose = () => {
    setSettingsOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <ToolbarStyled>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search…"
            sx={{ backgroundColor: 'background.paper' }}
          />
          <NetflixTypography variant="h6" noWrap component="div">
            NETFLIX-4.0
          </NetflixTypography>
          <BoldButton color="inherit" onClick={handleLoginOpen}>
            Login Page
          </BoldButton>
        </ToolbarStyled>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Home', 'Popular', 'Top Rated', 'Upcoming'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => handleCategoryClick(text)}>
                <ListItemIcon>
                  {text === 'Home' ? <HomeIcon /> :
                  text === 'Popular' ? <TrendingUpIcon /> :
                  text === 'Top Rated' ? <StarIcon /> :
                  text === 'Upcoming' ? <NewReleasesIcon /> :
                  null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Action', 'Comedy', 'Adventure', 'Animation', 'Favourites', 'Settings'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => text === 'Settings' ? handleSettingsOpen() : handleCategoryClick(text)}>
                <ListItemIcon>
                  {text === 'Action' ? <SportsMotorsportsIcon /> :
                  text === 'Comedy' ? <EmojiEmotionsIcon /> : 
                  text === 'Adventure' ? <ExploreIcon /> :
                  text === 'Animation' ? <AnimationIcon /> :
                  text === 'Favourites' ? <FavoriteIcon sx={{ color: 'black' }} /> : 
                  text === 'Settings' ? <SettingsIcon /> :
                  null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {accessGranted && (
          <Typography variant="h6">Welcome, Admin!</Typography>
        )}
      </Main>
      <Dialog open={loginOpen} onClose={handleLoginClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="normal">
            <InputLabel>Username</InputLabel>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Password</InputLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormHelperText>
              <Button color="inherit" onClick={handleForgotPassword}>
                Forgot Password?
              </Button>
            </FormHelperText>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLoginClose}>Cancel</Button>
          <Button onClick={handleLogin}>Login</Button>
          <Button onClick={handleCreateAccountOpen}>Create Account</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={createAccountOpen} onClose={handleCreateAccountClose}>
        <DialogTitle>Create Account</DialogTitle>
        <DialogContent>
          {/* Add your form fields here for account creation }
          <TextField
            label="New Username"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="New Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCreateAccountClose}>Cancel</Button>
          <Button onClick={handleCreateAccountClose}>Create Account</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={settingsOpen} onClose={handleSettingsClose}>
        <DialogTitle>Settings</DialogTitle>
        <DialogContent>
          {/* Add settings form fields here }
          <TextField label="Setting" fullWidth margin="normal" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSettingsClose}>Cancel</Button>
          <Button onClick={handleSettingsClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}*/

/*import * as React from 'react';
import { styled, useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import TheatersIcon from '@mui/icons-material/Theaters';
import StarIcon from '@mui/icons-material/Star';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  position: 'relative',
}));

const NetflixTypography = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  textAlign: 'center',
  color: 'white',
  fontWeight: 'bold',
}));

const BoldButton = styled(Button)(({ theme }) => ({
  fontWeight: 'bold',
}));

const sidebarTheme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#2c3e50',
          color: '#ecf0f1',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#34495e',
          },
          '&.Mui-selected:hover': {
            backgroundColor: '#1abc9c',
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: '#ecf0f1', // Default color for icons
        },
      },
    },
  },
});

export default function PersistentDrawerLeft({ onCategorySelect }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [createAccountOpen, setCreateAccountOpen] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [accessGranted, setAccessGranted] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleCreateAccountOpen = () => {
    setCreateAccountOpen(true);
    setLoginOpen(false);
  };

  const handleCreateAccountClose = () => {
    setCreateAccountOpen(false);
  };

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      setAccessGranted(true);
      setLoginOpen(false);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleForgotPassword = () => {
    alert('Forgot Password functionality is not implemented.');
  };

  const handleSettingsOpen = () => {
    setSettingsOpen(true);
  };

  const handleSettingsClose = () => {
    setSettingsOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <ToolbarStyled>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search…"
            sx={{ backgroundColor: 'background.paper' }}
          />
          <NetflixTypography variant="h6" noWrap component="div">
            MovieMaster
          </NetflixTypography>
          <BoldButton color="inherit" onClick={handleLoginOpen}>
            Login Page
          </BoldButton>
        </ToolbarStyled>
      </AppBar>

      <ThemeProvider theme={sidebarTheme}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {['Home', 'Popular', 'Top Rated', 'Upcoming'].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => handleCategoryClick(text)}>
                  <ListItemIcon sx={{ color: '#ecf0f1' }}>
                    {text === 'Home' ? <HomeIcon /> :
                    text === 'Popular' ? <TrendingUpIcon /> :
                    text === 'Top Rated' ? <StarIcon /> :
                    text === 'Upcoming' ? <NewReleasesIcon /> :
                    null}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Action', 'Comedy', 'Favourites', 'Love', 'Thriller', 'Horror', 'Drama', 'Settings'].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => text === 'Settings' ? handleSettingsOpen() : handleCategoryClick(text)}>
                  <ListItemIcon sx={{ color: '#ecf0f1' }}>
                    {text === 'Action' ? <SportsMotorsportsIcon /> :
                    text === 'Comedy' ? <EmojiEmotionsIcon /> : 
                    text === 'Favourites' ? <FavoriteIcon sx={{ color: '#ecf0f1' }} /> :
                    text === 'Love' ? <FavoriteBorderIcon /> :
                    text === 'Thriller' ? <FlashOnIcon /> :
                    text === 'Horror' ? <TheaterComedyIcon /> :
                    text === 'Drama' ? <TheatersIcon /> :
                    text === 'Settings' ? <SettingsIcon /> :
                    null}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </ThemeProvider>

      <Main open={open}>
        <DrawerHeader />
        {accessGranted && (
          <Typography variant="h6">Welcome, Admin!</Typography>
        )}
      </Main>

      <Dialog open={loginOpen} onClose={handleLoginClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="normal">
            <InputLabel>Username</InputLabel>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Password</InputLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormHelperText>
              <Button color="inherit" onClick={handleForgotPassword}>
                Forgot Password?
              </Button>
            </FormHelperText>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLoginClose}>Cancel</Button>
          <Button onClick={handleLogin}>Login</Button>
          <Button onClick={handleCreateAccountOpen}>Create Account</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={createAccountOpen} onClose={handleCreateAccountClose}>
        <DialogTitle>Create Account</DialogTitle>
        <DialogContent>
          <TextField
            label="New Username"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="New Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCreateAccountClose}>Cancel</Button>
          <Button onClick={handleCreateAccountClose}>Create Account</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={settingsOpen} onClose={handleSettingsClose}>
        <DialogTitle>Settings</DialogTitle>
        <DialogContent>
          <TextField label="Setting" fullWidth margin="normal" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSettingsClose}>Cancel</Button>
          <Button onClick={handleSettingsClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}*/


/*import * as React from 'react';
import { styled, useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import TheatersIcon from '@mui/icons-material/Theaters';
import StarIcon from '@mui/icons-material/Star';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import LoginIcon from '@mui/icons-material/Login'; // Import LoginIcon

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
}));

const NetflixTypography = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontWeight: 'bold',
}));

const sidebarTheme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#2c3e50',
          color: '#ecf0f1',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#34495e',
          },
          '&.Mui-selected:hover': {
            backgroundColor: '#1abc9c',
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: '#ecf0f1', // Default color for icons
        },
      },
    },
  },
});

export default function PersistentDrawerLeft({ onCategorySelect }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [createAccountOpen, setCreateAccountOpen] = React.useState(false);
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [accessGranted, setAccessGranted] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleCreateAccountOpen = () => {
    setCreateAccountOpen(true);
    setLoginOpen(false);
  };

  const handleCreateAccountClose = () => {
    setCreateAccountOpen(false);
  };

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      setAccessGranted(true);
      setLoginOpen(false);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleForgotPassword = () => {
    alert('Forgot Password functionality is not implemented.');
  };

  const handleSettingsOpen = () => {
    setSettingsOpen(true);
  };

  const handleSettingsClose = () => {
    setSettingsOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <ToolbarStyled>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <NetflixTypography variant="h6" noWrap component="div">
              MovieMaster
            </NetflixTypography>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search…"
              sx={{ ml: 2, backgroundColor: 'background.paper' }}
            />
          </Box>
          <IconButton color="inherit" onClick={handleLoginOpen}>
            <LoginIcon />
          </IconButton>
        </ToolbarStyled>
      </AppBar>

      <ThemeProvider theme={sidebarTheme}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {['Home', 'Popular', 'Top Rated', 'Upcoming'].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => handleCategoryClick(text)}>
                  <ListItemIcon sx={{ color: '#ecf0f1' }}>
                    {text === 'Home' ? <HomeIcon /> :
                    text === 'Popular' ? <TrendingUpIcon /> :
                    text === 'Top Rated' ? <StarIcon /> :
                    text === 'Upcoming' ? <NewReleasesIcon /> :
                    null}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Action', 'Comedy', 'Favourites', 'Love', 'Thriller', 'Horror', 'Drama', 'Settings'].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => handleCategoryClick(text)}>
                  <ListItemIcon sx={{ color: '#ecf0f1' }}>
                    {text === 'Action' ? <SportsMotorsportsIcon /> :
                    text === 'Comedy' ? <TheaterComedyIcon /> :
                    text === 'Favourites' ? <FavoriteIcon /> :
                    text === 'Love' ? <FavoriteBorderIcon /> :
                    text === 'Thriller' ? <FlashOnIcon /> :
                    text === 'Horror' ? <TheatersIcon /> :
                    text === 'Drama' ? <EmojiEmotionsIcon /> :
                    text === 'Settings' ? <SettingsIcon /> :
                    null}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </ThemeProvider>

      <Main open={open}>
        <DrawerHeader />
        {/*Main content goes here}
      </Main>

      {/*Login Dialog}
      <Dialog open={loginOpen} onClose={handleLoginClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              aria-describedby="username-helper-text"
            />
            <FormHelperText id="username-helper-text">Enter your username</FormHelperText>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-describedby="password-helper-text"
            />
            <FormHelperText id="password-helper-text">Enter your password</FormHelperText>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleForgotPassword}>Forgot Password</Button>
          <Button onClick={handleCreateAccountOpen}>Create Account</Button>
          <Button onClick={handleLogin} color="primary">Login</Button>
        </DialogActions>
      </Dialog>

      {/*Create Account Dialog}
      <Dialog open={createAccountOpen} onClose={handleCreateAccountClose}>
        <DialogTitle>Create Account</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Account creation is not implemented.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCreateAccountClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>

      {/* Settings Dialog }
      <Dialog open={settingsOpen} onClose={handleSettingsClose}>
        <DialogTitle>Settings</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Settings are not implemented.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSettingsClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
} */

  
  
  import React, { useState } from 'react';
  import {
    styled,
    useTheme,
    ThemeProvider,
    createTheme,
  } from '@mui/material/styles';
  import Box from '@mui/material/Box';
  import Drawer from '@mui/material/Drawer';
  import CssBaseline from '@mui/material/CssBaseline';
  import MuiAppBar from '@mui/material/AppBar';
  import Toolbar from '@mui/material/Toolbar';
  import Typography from '@mui/material/Typography';
  import IconButton from '@mui/material/IconButton';
  import MenuIcon from '@mui/icons-material/Menu';
  import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
  import ChevronRightIcon from '@mui/icons-material/ChevronRight';
  import List from '@mui/material/List';
  import ListItem from '@mui/material/ListItem';
  import ListItemButton from '@mui/material/ListItemButton';
  import ListItemIcon from '@mui/material/ListItemIcon';
  import ListItemText from '@mui/material/ListItemText';
  import HomeIcon from '@mui/icons-material/Home';
  import TrendingUpIcon from '@mui/icons-material/TrendingUp';
  import StarIcon from '@mui/icons-material/Star';
  import NewReleasesIcon from '@mui/icons-material/NewReleases';
  import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
  import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
  import FavoriteIcon from '@mui/icons-material/Favorite';
  import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
  import FlashOnIcon from '@mui/icons-material/FlashOn';
  import TheatersIcon from '@mui/icons-material/Theaters';
  import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
  import SettingsIcon from '@mui/icons-material/Settings';
  import TextField from '@mui/material/TextField';
  import Button from '@mui/material/Button';
  import Dialog from '@mui/material/Dialog';
  import DialogTitle from '@mui/material/DialogTitle';
  import DialogContent from '@mui/material/DialogContent';
  import DialogActions from '@mui/material/DialogActions';
  import FormControl from '@mui/material/FormControl';
  import InputLabel from '@mui/material/InputLabel';
  import Input from '@mui/material/Input';
  import FormHelperText from '@mui/material/FormHelperText';
  import LoginIcon from '@mui/icons-material/Login';
  import axios from 'axios';
  
  const drawerWidth = 240;
  
  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    })
  );
  
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));
  
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
  }));
  
  const NetflixTypography = styled(Typography)(({ theme }) => ({
    color: 'white',
    fontWeight: 'bold',
  }));
  
  const sidebarTheme = createTheme({
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: '#2c3e50',
            color: '#ecf0f1',
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            '&.Mui-selected': {
              backgroundColor: '#34495e',
            },
            '&.Mui-selected:hover': {
              backgroundColor: '#1abc9c',
            },
          },
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            color: '#ecf0f1', // Default color for icons
          },
        },
      },
    },
  });
  
  export default function PersistentDrawerLeft({ onCategorySelect }) {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [createAccountOpen, setCreateAccountOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accessGranted, setAccessGranted] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    const handleCategoryClick = (category) => {
      onCategorySelect(category);
    };
  
    const handleLoginOpen = () => {
      setLoginOpen(true);
    };
  
    const handleLoginClose = () => {
      setLoginOpen(false);
    };
  
    const handleCreateAccountOpen = () => {
      setCreateAccountOpen(true);
      setLoginOpen(false);
    };
  
    const handleCreateAccountClose = () => {
      setCreateAccountOpen(false);
    };
  
    const handleLogin = () => {
      if (username === 'admin' && password === 'password') {
        setAccessGranted(true);
        setLoginOpen(false);
      } else {
        alert('Invalid username or password');
      }
    };
  
    const handleForgotPassword = () => {
      alert('Forgot Password functionality is not implemented.');
    };
  
    const handleSettingsOpen = () => {
      setSettingsOpen(true);
    };
  
    const handleSettingsClose = () => {
      setSettingsOpen(false);
    };
  
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const handleSearchSubmit = async () => {
      try {
        const apiKey = "9320f923d506550f84b0e5a4d4e6c97b"; // Replace with your TMDb API key
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`
        );
  
        setSearchResults(response.data.results);
      } catch (error) {
        console.error('Error fetching movie data:', error);
        setSearchResults([]);
      }
    };
  
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <ToolbarStyled>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <NetflixTypography variant="h6" noWrap component="div">
                MovieMaster
              </NetflixTypography>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search…"
                sx={{ ml: 2, backgroundColor: 'background.paper' }}
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyPress={(event) => {
                  if (event.key === 'Enter') {
                    handleSearchSubmit();
                  }
                }}
              />
            </Box>
            <IconButton color="inherit" onClick={handleLoginOpen}>
              <LoginIcon />
            </IconButton>
          </ToolbarStyled>
        </AppBar>
  
        <ThemeProvider theme={sidebarTheme}>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </DrawerHeader>
            <List>
              {['Home', 'Popular', 'Top Rated', 'Upcoming'].map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton onClick={() => handleCategoryClick(text)}>
                    <ListItemIcon sx={{ color: '#ecf0f1' }}>
                      {text === 'Home' ? <HomeIcon /> :
                      text === 'Popular' ? <TrendingUpIcon /> :
                      text === 'Top Rated' ? <StarIcon /> :
                      text === 'Upcoming' ? <NewReleasesIcon /> :
                      null}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <List>
              {['Action', 'Comedy', 'Favourites', 'Love', 'Thriller', 'Horror', 'Drama', 'Settings'].map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton onClick={() => handleCategoryClick(text)}>
                    <ListItemIcon sx={{ color: '#ecf0f1' }}>
                      {text === 'Action' ? <SportsMotorsportsIcon /> :
                      text === 'Comedy' ? <TheaterComedyIcon /> :
                      text === 'Favourites' ? <FavoriteIcon /> :
                      text === 'Love' ? <FavoriteBorderIcon /> :
                      text === 'Thriller' ? <FlashOnIcon /> :
                      text === 'Horror' ? <TheatersIcon /> :
                      text === 'Drama' ? <EmojiEmotionsIcon /> :
                      text === 'Settings' ? <SettingsIcon /> :
                      null}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </ThemeProvider>
  
        <Main open={open}>
          <DrawerHeader />
          {/* Display search results here */}
          {searchResults.length > 0 ? (
            searchResults.map((result, index) => (
              <Box sx={{ mt: 2 }} key={index} display="flex" alignItems="center">
                <img
                  src={`https://image.tmdb.org/t/p/w200/${result.poster_path}`}
                  alt={result.title}
                  style={{ borderRadius: 8, marginRight: 16 }}
                />
                <Box>
                  <Typography variant="h5">{result.title}</Typography>
                  <Typography variant="body1">{result.overview}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Release Date: {result.release_date}
                  </Typography>
                </Box>
              </Box>
            ))
          ) : (
            searchQuery && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">Not Found</Typography>
                <Typography variant="body1">No movie found with that name.</Typography>
              </Box>
            )
          )}
        </Main>
  
        {/* Login Dialog */}
        <Dialog open={loginOpen} onClose={handleLoginClose}>
          <DialogTitle>Login</DialogTitle>
          <DialogContent>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                aria-describedby="username-helper-text"
              />
              <FormHelperText id="username-helper-text">Enter your username</FormHelperText>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-describedby="password-helper-text"
              />
              <FormHelperText id="password-helper-text">Enter your password</FormHelperText>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleForgotPassword}>Forgot Password</Button>
            <Button onClick={handleCreateAccountOpen}>Create Account</Button>
            <Button onClick={handleLogin} color="primary">Login</Button>
          </DialogActions>
        </Dialog>
  
        {/* Create Account Dialog */}
        <Dialog open={createAccountOpen} onClose={handleCreateAccountClose}>
          <DialogTitle>Create Account</DialogTitle>
          <DialogContent>
            <Typography variant="body1">
              Account creation is not implemented.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCreateAccountClose} color="primary">Close</Button>
          </DialogActions>
        </Dialog>
  
        {/* Settings Dialog */}
        <Dialog open={settingsOpen} onClose={handleSettingsClose}>
          <DialogTitle>Settings</DialogTitle>
          <DialogContent>
            <Typography variant="body1">
              Settings are not implemented.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSettingsClose} color="primary">Close</Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
  }
  

    /*import React, { useState } from 'react';
import {
  styled,
  useTheme,
  ThemeProvider,
  createTheme,
} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import TheatersIcon from '@mui/icons-material/Theaters';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SettingsIcon from '@mui/icons-material/Settings';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import LoginIcon from '@mui/icons-material/Login';
import axios from 'axios';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
}));

const NetflixTypography = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontWeight: 'bold',
}));

const sidebarTheme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#2c3e50',
          color: '#ecf0f1',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#34495e',
          },
          '&.Mui-selected:hover': {
            backgroundColor: '#1abc9c',
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: '#ecf0f1', // Default color for icons
        },
      },
    },
  },
});

export default function PersistentDrawerLeft({ onCategorySelect }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [createAccountOpen, setCreateAccountOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleCategoryClick = async (category) => {
    let genreId;
    switch (category) {
      case 'Action':
        genreId = 28;
        break;
      case 'Comedy':
        genreId = 35;
        break;
      case 'Horror':
        genreId = 27;
        break;
      case 'Love':
        genreId = 10749;
        break;
      case 'Drama':
        genreId = 18;
        break;
      default:
        genreId = null;
    }

    if (genreId) {
      try {
        const apiKey = '9320f923d506550f84b0e5a4d4e6c97b'; // Replace with your TMDb API key
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`
        );
        setSearchResults(response.data.results);
      } catch (error) {
        console.error('Error fetching category movies:', error);
        setSearchResults([]);
      }
    } else {
      // Default action for categories like "Home", "Top Rated", etc.
      onCategorySelect(category);
    }
  };

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleCreateAccountOpen = () => {
    setCreateAccountOpen(true);
    setLoginOpen(false);
  };

  const handleCreateAccountClose = () => {
    setCreateAccountOpen(false);
  };

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      setAccessGranted(true);
      setLoginOpen(false);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleForgotPassword = () => {
    alert('Forgot Password functionality is not implemented.');
  };

  const handleSettingsOpen = () => {
    setSettingsOpen(true);
  };

  const handleSettingsClose = () => {
    setSettingsOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async () => {
    try {
      const apiKey = '9320f923d506550f84b0e5a4d4e6c97b'; // Replace with your TMDb API key
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`
      );

      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error fetching movie data:', error);
      setSearchResults([]);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <ToolbarStyled>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <NetflixTypography variant="h6" noWrap>
            Netflix Clone
          </NetflixTypography>
          <Button
            color="inherit"
            onClick={handleLoginOpen}
            startIcon={<LoginIcon />}
          >
            {accessGranted ? 'Logout' : 'Login'}
          </Button>
        </ToolbarStyled>
      </AppBar>

      <ThemeProvider theme={sidebarTheme}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>

          <List>
            {[
              { text: 'Home', icon: <HomeIcon /> },
              { text: 'Trending', icon: <TrendingUpIcon /> },
              { text: 'Top Rated', icon: <StarIcon /> },
              { text: 'New Releases', icon: <NewReleasesIcon /> },
            ].map((item, index) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={() => onCategorySelect(item.text)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}

            <ListItem key="action" disablePadding>
              <ListItemButton onClick={() => handleCategoryClick('Action')}>
                <ListItemIcon>
                  <SportsMotorsportsIcon />
                </ListItemIcon>
                <ListItemText primary="Action" />
              </ListItemButton>
            </ListItem>

            <ListItem key="comedy" disablePadding>
              <ListItemButton onClick={() => handleCategoryClick('Comedy')}>
                <ListItemIcon>
                  <TheaterComedyIcon />
                </ListItemIcon>
                <ListItemText primary="Comedy" />
              </ListItemButton>
            </ListItem>

            <ListItem key="horror" disablePadding>
              <ListItemButton onClick={() => handleCategoryClick('Horror')}>
                <ListItemIcon>
                  <FavoriteBorderIcon />
                </ListItemIcon>
                <ListItemText primary="Horror" />
              </ListItemButton>
            </ListItem>

            <ListItem key="love" disablePadding>
              <ListItemButton onClick={() => handleCategoryClick('Love')}>
                <ListItemIcon>
                  <FavoriteIcon />
                </ListItemIcon>
                <ListItemText primary="Love" />
              </ListItemButton>
            </ListItem>

            <ListItem key="drama" disablePadding>
              <ListItemButton onClick={() => handleCategoryClick('Drama')}>
                <ListItemIcon>
                  <TheatersIcon />
                </ListItemIcon>
                <ListItemText primary="Drama" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </ThemeProvider>

      <Main open={open}>
        <DrawerHeader />

        <Box sx={{ mb: 3 }}>
          <TextField
            label="Search Movies"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                handleSearchSubmit();
              }
            }}
          />
        </Box>

        {/* Display search results }
        <Box>
          {searchResults.length === 0 && <p>No results found.</p>}
          {searchResults.map((movie) => (
            <div key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </div>
          ))}
        </Box>

        {/* Login Dialog }
        <Dialog open={loginOpen} onClose={handleLoginClose}>
          <DialogTitle>Login</DialogTitle>
          <DialogContent>
            <FormControl fullWidth>
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <FormHelperText>Enter your username</FormHelperText>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormHelperText>Enter your password</FormHelperText>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleForgotPassword}>Forgot Password?</Button>
            <Button onClick={handleLogin}>Login</Button>
          </DialogActions>
        </Dialog>

        {/* Create Account Dialog }
        <Dialog open={createAccountOpen} onClose={handleCreateAccountClose}>
          <DialogTitle>Create Account</DialogTitle>
          <DialogContent>
            {/* Form content for creating an account }
            <p>Create Account functionality is not implemented yet.</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCreateAccountClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </Main>
    </Box>
  );
}*/
