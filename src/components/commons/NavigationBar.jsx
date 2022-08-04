import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../assets/images/castle02.png'
import userPic from '../../assets/images/logo03.jpg'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/users';
import Typography from "@mui/material/Typography";


const NavigationBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleLogout = () => {
        dispatch(logout());
        navigate("/farewell");
    };
    const handleProfile = () => {        
        navigate("/profile");
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#f10002' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={logo} height={60} alt="Logo" />
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem key="home" onClick={handleCloseNavMenu}>
                                <NavLink to='/' className='navbarhover'>Home</NavLink>
                            </MenuItem>
                            <MenuItem key="characters" onClick={handleCloseNavMenu}>
                                <NavLink to='/characters' className='navbarhover'>Characters</NavLink>
                            </MenuItem>
                            <MenuItem key="users" onClick={handleCloseNavMenu}>
                                <NavLink to='/users' className='navbarhover'>Users</NavLink>
                            </MenuItem>
                            <MenuItem key="login" onClick={handleCloseNavMenu}>
                                <NavLink to='/login' className='navbarhover'>Login</NavLink>
                            </MenuItem>
                            <MenuItem key="register" onClick={handleCloseNavMenu}>
                                <NavLink to='/register' className='navbarhover'>Register</NavLink>
                            </MenuItem>
                        </Menu>
                    </Box>


                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <MenuItem key="home2" onClick={handleCloseNavMenu}>
                            <NavLink to='/' className='navbarhover'>Home</NavLink>
                        </MenuItem>

                        <MenuItem key="characters2" onClick={handleCloseNavMenu}>
                            <NavLink to='/characters' className='navbarhover'>Characters</NavLink>
                        </MenuItem>
                        <MenuItem key="users2" onClick={handleCloseNavMenu}>
                            <NavLink to='/users' className='navbarhover'>Users</NavLink>
                        </MenuItem>
                        <MenuItem key="login2" onClick={handleCloseNavMenu}>
                            <NavLink to='/login' className='navbarhover'>Login</NavLink>
                        </MenuItem>
                        <MenuItem key="register2" onClick={handleCloseNavMenu}>
                            <NavLink to='/register' className='navbarhover'>Register</NavLink>
                        </MenuItem>
                        <MenuItem key="close" onClick={handleCloseNavMenu}>
                        </MenuItem>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="User" src={userPic} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography className='settings' onClick={handleProfile}>Profile</Typography>
                            </MenuItem>

                            <MenuItem onClick={handleCloseUserMenu}>
                                <Typography className='settings' onClick={handleLogout}>Logout</Typography>
                            </MenuItem>


                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavigationBar;
