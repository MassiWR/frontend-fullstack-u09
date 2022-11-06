import { ChangeEvent, FC, useState } from "react";
import { useNavigate } from "react-router-dom"
import { RegisterModel } from "../Services/auth.service";
import AuthService from "../Services/auth.service";
import { Box, Button, Stack, TextField, Grid } from "@mui/material";


 export const RegisterPage: FC = () => {
    const navigate = useNavigate();

    const [registerData, setregisterData] = useState<RegisterModel>({email: " ", password: ""});

    const [loading, setloading] = useState(false);
    
    function handleChangeEmail(e: ChangeEvent<HTMLInputElement>) {
        setregisterData({
            email: e.target.value,
            password: registerData.password

        });
    }

    function handleChangePassword(e: ChangeEvent<HTMLInputElement>) {
        setregisterData({
            email: registerData.email,
            password: e.target.value
        });
    }


    async function handleClickRegister() {
        setloading(true);

        try {
            const success = await AuthService.register(registerData);
            if(success) {
                navigate("/Login")
            } else {
                alert("Error registering user");
            }
        } catch (error) {
            alert(error);
        } 
        finally {
            setloading(false);
        }
    }


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
                    xl: 600,  // 1536vw
                    bgcolor: 'primary.main'
                },
                
            }}
        >
            <Stack spacing={4}>
                <Stack direction="column" spacing={2}>
                    {loading && <h4>Loading...</h4>}
                    <TextField label="Email" type="email" value={registerData.email} onChange={handleChangeEmail} />
                    <TextField label="Password" type="password" value={registerData.password} onChange={handleChangePassword} />
                </Stack>
                <Button  color="inherit" className="btn btn-blue" onClick={handleClickRegister}>Register</Button>
            </Stack>
        </Box>
        </Grid>
    </>)
}