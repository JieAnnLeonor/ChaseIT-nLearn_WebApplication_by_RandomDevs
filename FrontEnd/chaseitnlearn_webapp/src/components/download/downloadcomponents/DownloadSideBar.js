import React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';

function DownloadSideBar(){
    function renderRow(props) {
        const { index, style } = props;
    
        return (
          <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton sx={{":hover" : "#318CE7" }}>
              <ListItemText primary={`Educational Material ${index + 1}`} />
            </ListItemButton>
          </ListItem>
        );
    }

    return (
        <div>
            <Box
            sx={{ width: '100%', height: 650, maxWidth: 257, bgcolor: 'background.paper', 
                paddingTop: 1, paddingLeft: 2, paddingRight: 1, borderRadius: 2}}
            >
                <FixedSizeList
                    height={630}
                    width={230}
                    itemSize={46}
                    itemCount={50}
                    overscanCount={5}
                >
                    {renderRow}
                </FixedSizeList>
            </Box>   
        </div>
    )
}

export default DownloadSideBar;