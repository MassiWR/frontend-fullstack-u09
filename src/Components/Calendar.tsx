import { Box, Button, Grid, Modal, Typography } from "@mui/material"
import { FC, useEffect, useState } from "react"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const MyCalendar: FC = () => {
    const [value, onChange] = useState(new Date());
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    const func: any = () => {
        console.log(value); 
    }
    
    useEffect(() => {
        func();
        
    },)
    
    return (<>
    <Grid container justifyContent = "center" marginTop={4}>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
                height: '500',
                width: {
                    xs: 200, // 0vw
                    sm: 300, // 600vw
                    md: 400, // 900vw
                    lg: 500, // 1200vw
                    xl: 600  // 1536vw
                },
            }}
        >
            
            <Calendar onChange={handleOpen} onClickDay={onChange} value={value} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ m:2 }}>
                        Book a date
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ m:2 }}>
                        {value.toDateString()}
                    </Typography>
                    <Button sx={{ m: 1 }}>Confirm</Button>
                </Box>
            </Modal>
        </Box>
    </Grid>
        
    </>)
}