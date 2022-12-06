import React, { Component } from 'react';
import '../App.css';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import logox_img from '../img/logox_img.png';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import axios from 'axios';

const x = (e) =>{
    const MY_URL = "http://localhost:8080/course/postCourse";
    e.preventDefault();
    var dataName = e.target.c_name.value;
    var dataDescription = e.target.c_description.value;
    var dataUnit = e.target.c_unit.value;
    var dataCode = e.target.c_code.value;

    var databody = {
        coursecode: dataCode,
        coursename: dataName,
        coursedescription: dataDescription,
        unit: dataUnit
    }
    axios.post(MY_URL,databody,{
        headers:{
            "Content-Type": "application/json",
        }
    }).then((response) => {
        console.log(response);
    }).catch(err => console.log(err));
}
class CreateCourse extends Component {
    render() {
        return (
            <div>
                <CssBaseline>
                    <Grid container rowSpacing={1} 
                        direction="column"
                        justifyContent="space-evenly"
                        alignItems="center">
                            <Grid item xs={12}>
                                <Box sx={{flexGrow: 1, height: "3rem", color:"green"}}>
                                <AppBar sx={{backgroundColor: "rgba(0, 38, 65, 1)", height: "4.5rem", borderBottom:"5px solid black"}}>
                                        <Toolbar variant='dense' disableGutters>
                                            <Grid container 
                                                direction="row"
                                                justifyContent="space-evenly"
                                                alignItems="flex-start"
                                                item xs={12}
                                            >
                                                <Grid item xs={6}>
                                                <Stack direction="row" spacing={2} justifyContent="flex-start" alignItems="center" sx={{marginLeft: 2, marginTop: 2}}>
                                                    <ArrowBackIcon fontSize='xs'/>
                                                    <img src={logox_img} alt="logo" className='img_logo' height={50} />
                                                </Stack>
                                                </Grid>
                                                <Grid item xs={6} alignSelf="center">
                                                    <Stack direction="row" spacing={2} justifyContent="space-evenly" alignItems="center">
                                                        <Button>
                                                            <Typography sx={{fontSize: "1rem", color: "white"}}>
                                                                Home
                                                            </Typography>
                                                        </Button>
                                                        <Button>
                                                            <Typography sx={{fontSize: "1rem", color: "white"}}>
                                                                Course
                                                            </Typography>
                                                        </Button>
                                                        <Avatar sx={{ bgcolor: "green", height: 25, width: 25}}>
                                                            <Typography sx={{fontSize: "1rem"}}>N</Typography> 
                                                        </Avatar>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </Toolbar>
                                    </AppBar>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{flexGrow: 1, height: "8rem", paddingTop: "2rem"}}>
                                    <Typography sx={{fontSize: "2rem"}}>
                                        Course Information
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    '& > :not(style)': {
                                    m: -2,
                                    width: 500,
                                    height: 370,
                                    padding: 5
                                    },
                                }}>
                                    <Paper elevation={5} sx={{borderLeft: "5px solid black", backgroundColor: "rgba(1, 87, 146, 1)"}}>
                                       <form onSubmit={x}>
                                            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                                    direction="column"
                                                    justifyContent="space-evenly"
                                                    alignItems="flex-start"
                                                    spacing={4}>
                                                <Grid item xs={12}>
                                                    <Stack direction="row" spacing={5.5} justifyContent="flex-start" alignItems="center" sx={{paddingTop:1, paddingLeft:1}}>
                                                        <Typography sx={{fontSize: "0.8rem", display: "inline=block", color:"white"}}>
                                                            Course Name:
                                                        </Typography>
                                                        <TextField id="c_name" variant="standard" sx={{width: 232, backgroundColor:"white"}} InputProps={{ sx: { height: 20, fontSize: 5} }}/>
                                                    </Stack>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Stack direction="row" spacing={7} justifyContent="flex-start" alignItems="center" sx={{paddingTop:1, paddingLeft:1}}>
                                                        <Typography sx={{fontSize: "0.8rem", display: "inline=block", color:"white"}}>
                                                            Course Unit:
                                                        </Typography>
                                                        <TextField id="c_unit" variant="standard" sx={{width: 232, backgroundColor:"white"}} InputProps={{ sx: { height: 20, fontSize: 5} }}/>
                                                    </Stack>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Stack direction="row" spacing={6.2} justifyContent="flex-start" alignItems="center" sx={{paddingTop:1, paddingLeft:1}}>
                                                        <Typography sx={{fontSize: "0.8rem", display: "inline=block", color:"white"}}>
                                                            Course Code:
                                                        </Typography>
                                                        <TextField id="c_code" variant="standard" sx={{width: 232, backgroundColor:"white"}} InputProps={{ sx: { height: 20, fontSize: 5} }}/>
                                                    </Stack>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Stack direction="row" spacing={2} justifyContent="flex-start" alignItems="center" sx={{paddingTop:1, paddingLeft:1}}>
                                                        <Typography sx={{fontSize: "0.8rem",color:"white"}}>
                                                            Course Description:
                                                        </Typography>
                                                        <TextField
                                                            id="c_description"
                                                            multiline
                                                            rows={2}
                                                            sx={{backgroundColor:"white"}}
                                                            InputProps={{ sx: { height: 50, fontSize: 5, margin: 0, width: 250} }}
                                                            />
                                                    </Stack>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Button variant="outlined" type="submit" sx={{width: 80, height: 30, backgroundColor: "white", marginLeft: 1}}>
                                                        DONE
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </form>
                                    </Paper>
                                </Box>
                            </Grid> 
                    </Grid>
                    <footer className='footer'>
                        <Box>
                            <Typography sx={{fontSize: "0.7rem", backgroundColor: "rgba(0, 38, 65, 1)"}}>
                                ©ChaseIT’nLearn Inc. All Right Reserved
                            </Typography>
                        </Box>
                    </footer>
                </CssBaseline>
            </div>
        );
    }
}

export default CreateCourse;