import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import CopyrightIcon from '@mui/icons-material/Copyright';
import Toolbar from '@mui/material/Toolbar';

function BottomBar(props) {
    return (
        <div>
            <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, height: 30, backgroundColor: "#002641" }}>
                <Toolbar>
                    <Typography variant="h9" component="div" sx={{ flexGrow: 1, textAlign: "center", paddingBottom: 4, fontSize: 14 }}>
                        <CopyrightIcon sx={{ blockSize: 15 }} />ChaseIT'nLearn Inc. All rights reserved. 
                    </Typography>
                </Toolbar>
            </AppBar>    
        </div>
    );
}

export default BottomBar;