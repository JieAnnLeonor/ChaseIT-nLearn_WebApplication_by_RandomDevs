import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const FooterC = () =>
{
return (
        <Box sx={{position:"fixed", left: 0, bottom: 0, width: "100%", color: "white", textAlign: "center"}}>
            <Typography sx={{fontSize: "0.7rem", backgroundColor: "rgba(0, 38, 65, 1)"}}>
                    ©ChaseIT’nLearn Inc. All Right Reserved
            </Typography>
        </Box>
);
}
 
export default FooterC;