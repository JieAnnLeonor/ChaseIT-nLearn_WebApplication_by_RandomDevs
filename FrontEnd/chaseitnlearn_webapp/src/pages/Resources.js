import React from 'react';
import StudentNavbar from '../components/dashboard/dashpages/StudentNavbar';
import BottomBar from '../components/download/downloadcomponents/BottomBar';
import { Box } from '@mui/system';
import DownloadSideBar from '../components/download/downloadcomponents/DownloadSideBar';
import PDFViewer from '../components/download/downloadcomponents/PDFViewer';

function Resources() {
    return (
        <>
            <StudentNavbar />
            <Box position="fixed" 
            sx={{paddingTop: 1, paddingLeft: 1, background: "#035F9E", 
                 width: 275, maxHeight: "flex", height: '100%'}}>
                <DownloadSideBar />
            </Box>

            <Box position="fixed"
            sx={{paddingTop: 1, paddingLeft: 36}}>
                <PDFViewer /> 
            </Box>
                      
            <BottomBar />
        </>   
    );
};

export default Resources;