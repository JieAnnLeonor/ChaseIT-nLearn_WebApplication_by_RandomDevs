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
import IconButton from '@mui/material/IconButton';
import UploadFileSharpIcon from '@mui/icons-material/UploadFileSharp';
import axios from 'axios';


const x = (e) =>{
    const MY_URL = "http://localhost:8080/resources/postResources";
    e.preventDefault();
    var dataTitle = e.target.r_title.value;
    var dataDescription = e.target.r_description.value;
    var formData = new FormData();
    formData.append("file",e.target.r_file.files[0]);

    axios.post(MY_URL,formData,{
        params:{
            r_title: dataTitle,
            r_description: dataDescription
        },
        headers:{
            "Content-Type": "multipart/form-data",
        }
    }).then((response) => {
        console.log(response);
    }).catch(err => console.log(err));
}

class CreateResources extends Component {
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
                                                    <ArrowBackIcon fontSize='medium'/>
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
                                                                Manage Resources
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
                                        Resources Upload
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    '& > :not(style)': {
                                    m: -2,
                                    width: 450,
                                    height: 230,
                                    },
                                }}>
                                    <Paper elevation={5} sx={{borderLeft: "5px solid black", backgroundColor: "rgba(1, 87, 146, 1)"}}>
                                       <form onSubmit={x}>
                                            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
                                                    direction="column"
                                                    justifyContent="space-evenly"
                                                    alignItems="flex-start"
                                                    spacing={5}>
                                                <Grid item xs={12}>
                                                    <Stack direction="row" spacing={5.5} justifyContent="flex-start" alignItems="center" sx={{paddingTop:1, paddingLeft:1}}>
                                                        <Typography sx={{fontSize: "0.8rem", display: "inline=block", color: "white"}}>
                                                            Resources Title:
                                                        </Typography>
                                                        <TextField id="r_title" variant="standard" sx={{width: 232, backgroundColor:"white"}} InputProps={{ sx: { height: 20, fontSize: 5} }}/>
                                                    </Stack>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Stack direction="row" spacing={3} justifyContent="flex-start" alignItems="center" sx={{paddingTop:1, paddingLeft:1}}>
                                                            <Typography sx={{fontSize: "0.8rem", color: "white"}}>
                                                                Resources Description: 
                                                            </Typography>
                                                            <TextField
                                                                id="r_description"
                                                                multiline
                                                                rows={2}
                                                                sx={{backgroundColor:"white", width:200}}
                                                                InputProps={{ sx: { height: 50, fontSize: 5, margin: 0} }}
                                                                />
                                                        </Stack>
                                                    </Grid>
                                                <Grid item xs={12}>
                                                    <IconButton color="white" component="label">
                                                        <input hidden accept ="image/*, video/*, .pdf, .doc, .xml, .txt" formEncType='multipart/form-data' type="file" id="r_file"/>
                                                        <UploadFileSharpIcon />
                                                    </IconButton>
                                                    <Button variant="outlined" type="submit" sx={{width: 50, height: 20, backgroundColor: "white", marginLeft: 1}}>
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

export default CreateResources;