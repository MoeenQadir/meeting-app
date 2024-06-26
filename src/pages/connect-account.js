import Head from 'next/head';
import {Box, Button, Card, Container, Grid, Stack} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import EmailAnimation from "../components/EmailAnimation";
import {useRouter} from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {

    const router = useRouter();
    const handleClick = () => {

        router.push('/');
      toast.success('Connected successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    return (
        <>
            <Head>
                <title>
                    Connect Your Email
                </title>
            </Head>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <Container maxWidth="lg">
                    <Grid container style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '60%'
                    }} marginTop={"2rem"}>
                        <Grid item md={12} lg={12} sm={12}>
                            <Card>
                                <div className={"mb-5"}>
                                    <EmailAnimation/>
                                </div>
                                <Stack spacing={2} sx={{p: 5}}>
                                    <LoadingButton fullWidth={true} size="small" type="submit" variant="contained"
                                                   onClick={handleClick}>
                                        Connect Email Account
                                    </LoadingButton>
                                </Stack>

                            </Card>
                        </Grid>
                    </Grid>
                </Container>
              <ToastContainer />
            </Box>
        </>
    )
}

export default Page;
