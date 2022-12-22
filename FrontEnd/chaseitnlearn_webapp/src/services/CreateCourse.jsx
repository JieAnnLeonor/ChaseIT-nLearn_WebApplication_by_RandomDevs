import React, { Component } from 'react';
import Card from '@mui/material/Card';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import FooterC from './FooterC';
import { Box } from '@mui/system';


class CreateCourse extends Component {
    constructor(props){
        super(props);
        this.state = {
            coursecode: '',
            coursename: '',
            coursedescription: '',
            unit: '',
            tcourse: [{id: this.props.value}]
        };
    
        this.handleCodeChange = this.handleCodeChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleUnitChange = this.handleUnitChange.bind(this);
        this.handleCnameChange = this.handleCnameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    //update code
    handleCodeChange(e){
        this.setState({coursecode: e.target.value});
    }
    //update description
    handleDescChange(e){
        this.setState({coursedescription: e.target.value});
    }
    //update coursename
    handleCnameChange(e){
        this.setState({coursename: e.target.value});
    }
    //update unit
    handleUnitChange(e){
        this.setState({unit: e.target.value});
    }
    //when submit file
    handleSubmit(e){
        const MY_URL = "http://localhost:8080/course/postCourse";
        e.preventDefault();
    
        var stateVal = {
            coursecode: this.state.coursecode,
            coursedescription: this.state.coursedescription,
            coursename: this.state.coursename,
            unit: this.state.unit,
            tcourse: [{id: 1}]
        }
    
        axios.post(MY_URL,stateVal,{
            headers:{
                "Content-Type": "application/json",
            }
        }).then((response) => {
            this.setState({coursecode: '', coursename: '', coursedescription: '', unit: '',});
            console.log(response);
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <>
            <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                <Box sx={{padding: 1, fontSize: "3rem", fontFamily: 'Trocchi', fontWeight: "bold"
                    ,letterSpacing: "-1px", lineHeight: "2", textAlign: "center", color: "rgb(130, 170, 227)"}}>
                        ADD COURSE
                </Box>
                <Card variant='outlined' 
                    sx={{width: 700, height: 300, display: "flex", 
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
                                    <Typography sx={{fontSize: "1.5rem", display: "inline-block", color: "grey", fontWeight: "700"}}>COURSE NAME:</Typography>
                                    <TextField value={this.state.coursename} onChange={this.handleCnameChange} id="cname" variant="standard" 
                                            InputProps={{ sx: { width: 300 ,height: 30, fontSize: "1rem", 
                                            backgroundColor: "white", padding: 2, color: 'black'} }}
                                    />   
                            </Stack>
                            <Stack
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="center"
                                spacing={3}
                            >
                                    <Typography sx={{fontSize: "1.5rem", display: "inline-block", color: "grey", fontWeight: "700"}}>UNIT:</Typography>
                                    <TextField value={this.state.unit} onChange={this.handleUnitChange} id="cunit" variant="standard" 
                                            InputProps={{ sx: { width: 300 ,height: 30, fontSize: "1rem", 
                                            backgroundColor: "white", padding: 2, color: 'black'} }}
                                    />   
                            </Stack>
                            <Stack
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="center"
                                spacing={3}
                            >
                                    <Typography sx={{fontSize: "1.5rem", display: "inline-block", color: "grey", fontWeight: "700"}}>COURSE CODE:</Typography>
                                    <TextField value={this.state.coursecode} onChange={this.handleCodeChange} id="ccode" variant="standard" 
                                            InputProps={{ sx: { width: 300 ,height: 30, fontSize: "1rem", 
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
                                    value={this.state.coursedescription}
                                    id="cdescr"
                                    multiline
                                    rows={3}
                                    InputProps={{ sx: { height: 80, fontSize: "1rem",  
                                    margin: 0, backgroundColor:"white", width:295, fontColor: "black"} }}
                                />
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

export default CreateCourse;