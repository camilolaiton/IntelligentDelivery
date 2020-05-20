import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AllInbox from '@material-ui/icons/AllInbox';
import LocalAtm from '@material-ui/icons/LocalAtm';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { makeStyles, fade } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import profileImage from '../images/profile1.jpeg';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

/* 
<IconButton
  edge="end"
  aria-label="account of current user"
  aria-controls='profile-menu'
  aria-haspopup="true"
  color="inherit"
>
  

</IconButton>
*/

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
        position: "static",
        backgroundColor: theme.palette.text.primary,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    shippingIcon: {
        marginRight: theme.spacing(2),
        backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '25ch',
        },
      },
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
}));

const Menu = (props) => {

    const classes = useStyles();

    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

    const list = (anchor, user) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
            <ListItem button key={'domicilios'} component={Link} to={{ pathname: '/manage', state: {user: props.user}} }>
              <ListItemIcon><AllInbox/></ListItemIcon>
              <ListItemText primary='Mis domicilios' />
            </ListItem>

            <ListItem button key={'Sección de ventas'} component={Link} to='/sells'>
              <ListItemIcon><LocalAtm/></ListItemIcon>
              <ListItemText primary='Sección de ventas' />
            </ListItem>
        </List>

        <Divider />

        <List>

            <ListItem button key={'Perfil'} component={Link} to='/profile'>
              <ListItemIcon><AccountCircle/></ListItemIcon>
              <ListItemText primary='Perfil' />
            </ListItem>

            <ListItem button key={'Cerrar sesión'} component={Link} to='/'>
              <ListItemIcon><ExitToApp/></ListItemIcon>
              <ListItemText primary='Cerrar sesión' />
            </ListItem>
        </List>
      </div>
    );

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer('left', true)}
                        key={'left'}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Drawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
                      {list('left', props.user)}
                    </Drawer>

                    <Avatar className={classes.shippingIcon}>
                        <LocalShippingIcon />
                    </Avatar>

                    <Typography className={classes.title} variant="overline" noWrap>
                        Intelligent Delivery
                    </Typography>
                    
                    <StyledBadge
                        overlap="circle"
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'right',
                        }}
                        variant="dot"
                      >
                        <Avatar alt="Remy Sharp" src={profileImage} />
                    </StyledBadge>    
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Menu;