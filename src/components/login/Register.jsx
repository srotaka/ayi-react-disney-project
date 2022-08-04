import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import logo from '../../assets/images/logo03.jpg'
import Swal from "sweetalert2"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/actions/users';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const data = new FormData(event.currentTarget);
        const firstname = data.get('firstname');
        const lastname = data.get('lastname');
        const email = data.get('email');
        const password = data.get('password');

        if (firstname !== '' && lastname !== '' && email !== '' && password !== '') {
            dispatch(register());
            Swal.fire({
                title: "Success!",
                text: "Your account has been created!",
                imageUrl: "https://cdn.wallpapersafari.com/63/58/YLgn7q.jpg",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image",
            });
            navigate('/characters');

        } else {
            Swal.fire({
                title: "Error!",
                text: "Please complete all fields.",
                imageUrl: "https://bajopalabra.com.mx/wp-content/uploads/2015/09/Pixar-change-la-fin-du-Monde-de-Dory-a-cause-d-un-documentaire-ecolo_portrait_w532.jpg",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image",

            });
        }
    };



    return (
        <section className="login-section">
            <Grid container component="main" sx={{ height: '100%', width: '80%' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://wallpaper.dog/large/141828.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={10} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar alt="User" src={logo} />
                        <Typography component="h1" variant="h5">
                            Create your Account
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="firstname"
                                label="First Name"
                                name="firstname"
                                autoComplete="First Name"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="lastname"
                                label="Last Name"
                                name="lastname"
                                autoComplete="Last Name"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Register
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </section>
    )
};

export default Register;