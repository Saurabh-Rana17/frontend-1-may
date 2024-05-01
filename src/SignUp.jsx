import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Autocomplete} from "@mui/material";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
    let navigate = useNavigate();
    const [failed, setFailed] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const response = await fetch("http://localhost:8080/register", {
            method: "POST", body: JSON.stringify({
                name: data.get("fullName"),
                email: data.get("email"),
                phone: data.get("phoneNumber"),
                password: data.get("password"),
                interest: selectedItems
            }), headers: {
                'Content-Type': "application/json"
            }
        });
        if (response.headers.get('content-type')) {
            const user = await response.json();
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/");
        } else {
            setFailed(true);
        }

    };

    const [selectedItems, setSelectedItems] = useState([]);

    const handleChange = (event, newValues) => {
        setSelectedItems(newValues);
    };

    return (<ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center",
                }}
            >
                <Avatar sx={{m: 1, bgcolor: "secondary.main"}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{mt: 3}}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="fullName"
                                required
                                fullWidth
                                id="fullName"
                                label="Full Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="phoneNumber"
                                label="Phone Number"
                                name="phoneNumber"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Autocomplete
                                multiple
                                value={selectedItems}
                                onChange={handleChange}
                                options={["Adventure", "Nature", "Spiritual"]}
                                renderInput={(params) => (<TextField
                                    {...params}
                                    label="Select Interest or type here"
                                />)}
                            />
                        </Grid>
                    </Grid>
                    {failed  && <Typography paddingY={1} align={'center'} sx={{color: "red"}}>Email already exist</Typography>}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/signIn" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    </ThemeProvider>);
}
