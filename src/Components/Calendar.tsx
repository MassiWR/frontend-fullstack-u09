import { Box, Grid, Typography } from "@mui/material"
import { FC } from "react"

export const Calendar: FC = () => {
 

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
            <Typography>Book a date</Typography>
        </Box>
        
    </Grid>
        
    </>)
}