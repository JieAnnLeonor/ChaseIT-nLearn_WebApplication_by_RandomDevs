import React, { Component } from 'react';
import Card from '@mui/material/Card';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import FooterC from './FooterC';
import { Box } from '@mui/system';


class CreateResources extends Component {
    constructor(props){
        super(props);
        this.state = {
            r_title: ' ',
            r_description: ' ',
            filex: ' ',
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //update title
    handleTitleChange(e){
        this.setState({r_title: e.target.value});
    }
    //update description
    handleDescChange(e){
        this.setState({r_description: e.target.value});
    }
    //update file
    handleFile(e){
        var formData = new FormData();
        formData.append("file",e.target.files[0]);
        this.setState({filex: formData});
    }
    //when submit file
    handleSubmit(e){
        const MY_URL = "http://localhost:8080/resources/postResources";
        e.preventDefault();

        axios.post(MY_URL,this.state.filex,{
            params:{
                r_title: this.state.r_title,
                r_description: this.state.r_description
            },
            headers:{
                "Content-Type": "multipart/form-data",
            }
        }).then((response) => {
            this.setState({r_title: ' ', r_description: ' ', filex: ''});
            e.target.filex.value = null;
            console.log(response);
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <>
            <CNav/>
            <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                <Box sx={{padding: 1, fontSize: "3rem", fontFamily: 'Trocchi', fontWeight: "bold"
                    ,letterSpacing: "-1px", lineHeight: "2", textAlign: "center", color: "rgb(130, 170, 227)"}}>
                        ADD RESOURCES
                </Box>
                <Card variant='outlined' 
                    sx={{width: 600, height: 300, display: "flex", 
                        flexDirection: "column", alignItems: "center",  
                        justifyContent: "center", padding: 1, backgroundColor: "#BFEAF5", 
                        borderRight: "2px solid black", borderLeft: "10px solid black", borderBottomRightRadius: "20px", 
                        borderTopRightRadius: "20px", borderTop: "2px solid black", borderBottom: "2px solid black"}}>
                    <Box sx={{padding: 5, display: "flex", justifyContent: "flex-start", 
                        flexDirection: "column",alignItems: "flex-start"}}
                    >
                        <form onSubmit={this.handleSubmit}>     
                            <Stack
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="center"
                                spacing={3}
                            >
                                    <Typography sx={{fontSize: "1.5rem", display: "inline-block", color: "grey", fontWeight: "700"}}>TITLE:</Typography>
                                    <TextField value={this.state.r_title} onChange={this.handleTitleChange} id="r_title" variant="standard" 
                                            InputProps={{ sx: { width: 320 ,height: 30, fontSize: "1rem", 
                                            backgroundColor: "white", padding: 2, color: 'black'} }}
                                    />   
                            </Stack>
                            <Stack
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="center"
                                spacing={3}
                                sx={{padding:1}}
                            >
                                <Typography sx={{fontSize: "1.5rem", display: "inline-block", color: "grey", fontWeight: "700"}}>DESCRIPTION:</Typography>
                                <TextField
                                    onChange={this.handleDescChange}
                                    value={this.state.r_description}
                                    id="r_description"
                                    multiline
                                    rows={3}
                                    InputProps={{ sx: { height: 80, fontSize: "1rem", 
                                    margin: 0, backgroundColor:"white", width:310, fontColor: "black"} }}
                                />
                            </Stack>
                            <Stack
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="center"
                                spacing={5}
                                sx={{padding:1}}
                            >
                                <Typography sx={{fontSize: "1.5rem", display: "inline-block", color: "grey", fontWeight: "700"}}>FILE:</Typography>
                                <IconButton color="primary" aria-label="upload picture" component="label">
                                    <DriveFolderUploadIcon/>
                                    <input type="file" id='filex' onChange={this.handleFile}/>
                                </IconButton>
                                {/*<input type="file" id='filex' onChange={this.handleFile}/>*/}
                            </Stack>
                            <Box>
                                <Button 
                                    type='submit' 
                                    variant="contained"
                                    endIcon={<ArrowUpwardIcon />}
                                    sx={{fontWeight: "700", backgroundColor:"rgba(0, 38, 65, 1)"}}
                                >
                                    SUBMIT
                                </Button>
                            </Box>   
                        </form>
                    </Box>
                </Card>
            </Box>
            <FooterC />
            </>   
        );
    }
}

export default CreateResources;