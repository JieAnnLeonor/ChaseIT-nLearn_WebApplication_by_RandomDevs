import React, { Component } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import FooterC from './FooterC';

class ReadResources extends Component {
    constructor(props){
        super(props)
        this.state={
            resources:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/resources/getAllResources').then(res => { 
            this.setState({resources:res.data});
        });
    }
    render() {
        return (
            <>
               {/*<CNav/>*/}
               <TableContainer sx={{display: "flex", justifyContent:"center", alignItems: "center", alignContent: "center"}} component={Paper}>
                    <Table sx={{ width: "800px", backgroundColor: "rgb(130, 170, 227)", overflowY: "scroll"}} aria-label="caption table">
                        <TableHead>
                        <caption><Typography sx={{color:"white", fontSize: "2rem", fontWeight: "bolder"}}>RESOURCES</Typography></caption>
                            <TableRow>
                                <TableCell><Typography sx={{fontWeight: "bold", color:"white", fontSize: "1.5rem"}}>TITLE</Typography></TableCell>
                                <TableCell align="right"><Typography sx={{fontWeight: "bold", color:"white", fontSize: "1.5rem"}}>Name</Typography></TableCell>
                                <TableCell align="right"><Typography sx={{fontWeight: "bold", color:"white", fontSize: "1.5rem"}}>Type</Typography></TableCell>
                                <TableCell align="right"><Typography sx={{fontWeight: "bold", color:"white", fontSize: "1.5rem"}}>Description</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.resources.map((row) => (
                                <TableRow key={row.r_id}>
                                <TableCell component="th" scope="row">
                                    {row.r_title}
                                </TableCell>
                                <TableCell align="right">{row.r_name}</TableCell>
                                <TableCell align="right">{row.r_type}</TableCell>
                                <TableCell align="right">{row.r_description}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <FooterC/>
            </>
        );
    }
}

export default ReadResources;