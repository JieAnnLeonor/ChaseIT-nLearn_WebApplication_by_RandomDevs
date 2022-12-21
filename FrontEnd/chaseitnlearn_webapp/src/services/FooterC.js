import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const FooterC = () =>
{
return (
    <footer className='footer'>
                <Box>
                    <Typography sx={{fontSize: "0.7rem", backgroundColor: "rgba(0, 38, 65, 1)"}}>
                        ©ChaseIT’nLearn Inc. All Right Reserved
                    </Typography>
                </Box>
    </footer>
);
}
 
export default FooterC;