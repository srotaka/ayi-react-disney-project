import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../../assets/images/logo03.jpg'
import { login } from '../../redux/actions/users';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2"

const theme = createTheme();
export default function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const savedEmail = 'kate@gmail.com';
        const savedPassword = 'kfejk@*_'
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        if (email === savedEmail && password === savedPassword) {
            dispatch(login());
            Swal.fire({
                title: "Success!",
                text: "You are logged in!",
                imageUrl: "https://www.lifeboxset.com/wp-content/uploads/2021/11/Captura-de-pantalla-2021-11-12-a-las-15.01.40.png",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image",
            });
            navigate('/characters');

        } else {
            Swal.fire({
                title: "Error!",
                text: "User or password incorrect. Please try again.",
                imageUrl: "https://www.nacionflix.com/__export/1636731723950/sites/debate/img/2021/11/12/baymax-disney.jpg_976912859.jpg",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image",

            });
        }
    };

    // EMAIL: kate@gmail.com
    // PASS: kfejk@*_

    return (
        <section className="login-section">
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{ height: '100%', width: '80%' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: 'url(https://c4.wallpaperflare.com/wallpaper/1010/757/230/disney-disney-pixar-wall%C2%B7e-eva-wallpaper-preview.jpg)',
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
                                Sign in
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                                <Grid container>                                    
                                    <Grid item xs>
                                        <Link href="/register" variant="body2">
                                            {"Don't have an account? Click here"}
                                        </Link>
                                    </Grid>
                                </Grid>

                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </section>
    );
}