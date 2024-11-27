import * as React from 'react';
import {Routes, Route,BrowserRouter,useNavigate, Router} from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Home from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PeopleIcon from '@mui/icons-material/People';
import Groups3Icon from '@mui/icons-material/Groups3';
import SpatialTrackingIcon from '@mui/icons-material/SpatialTracking';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import PersonIcon from '@mui/icons-material/Person';
import Groups2Icon from '@mui/icons-material/Groups2';
import Student from "./Student";
import Teacher from "./Teacher";
import Dashboard from "./Home";
import Nonteachingstaff from "./Nonteachingstaff";
import Gaurd from './Gaurd';
import FacultyMember from "./FacultyMember";
import Administrative from './Administrative';
import Accountant from'./Accountant';

 


const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const dash   =useNavigate();
  
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
   
    <div>
      <Toolbar />
      <Divider />
      <List>
       <Router>
      <ListItem disablePadding onClick ={() => dash("/")}>
            <ListItemButton>
              <ListItemIcon>
               <Home />
              </ListItemIcon>
              <ListItemText> Home </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <Groups2Icon />
              </ListItemIcon>
              <ListItemText> Student </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <PeopleIcon />
              </ListItemIcon>
              <ListItemText> Teacher </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding >
            <ListItemButton>
              <ListItemIcon>
               <LocalLibraryIcon />
              </ListItemIcon>
              <ListItemText> Faculty-Member </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding >
            <ListItemButton>
              <ListItemIcon>
               <SpatialTrackingIcon />
              </ListItemIcon>
              <ListItemText> Gaurd </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding >
            <ListItemButton>
              <ListItemIcon>
               <Groups3Icon />
              </ListItemIcon>
              <ListItemText> Non-teaching-staff </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding >
            <ListItemButton>
              <ListItemIcon>
               <PersonIcon />
              </ListItemIcon>
              <ListItemText> Administrative </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding >
            <ListItemButton>
              <ListItemIcon>
               <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText> Accountant </ListItemText>
            </ListItemButton>
          </ListItem>
          </Router>
      </List>
    </div>
 
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      <BrowserRouter>
      <Router>
        <Routes>
          <Route exact path="/" Element={<Dashboard />}></Route>
          <Route path="/student" Element={<Student />}></Route> 
          <Route path="/teacher" Element={<Teacher />}></Route>
          <Route path="/facultymember" Element={<FacultyMember />}></Route>
          <Route path="/gaurd" Element={<Gaurd />}></Route>
          <Route path="/nonteachingstaff" Element={<Nonteachingstaff />}></Route>
          <Route path="/administrative" Element={<Administrative />}></Route>
          <Route path="/accountant" Element={<Accountant />}></Route>
        </Routes> 
        </Router>
        </BrowserRouter>

        
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
