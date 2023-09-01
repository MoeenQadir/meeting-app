import React from 'react';
import {Layout as DashboardLayout} from "../layouts/dashboard/layout";
import {
    Box,
    Card,
    CardContent,
    Container,
    Stack,
    Typography
} from "@mui/material";
import {BsCalendar} from "react-icons/bs";
import Switch from '@material-ui/core/Switch';


const Settings = () => {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <Container maxWidth="xl">
                    <Stack spacing={3}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            spacing={4}
                        >
                            <Stack spacing={1}>
                                <Typography variant="h4">
                                    Settings
                                </Typography>
                                <Stack
                                    alignItems="center"
                                    direction="row"
                                    spacing={1}
                                >
                                </Stack>
                            </Stack>
                        </Stack>
                        <Card>
                            <CardContent>
                                <div className={"h-full"}>
                                <div>
                                    <Card>
                                        <div className={"flex justify-between w-full py-3 items-center"}>
                                            <h3 className={"ms-5"}>Auto</h3>
                                                           <Switch
                                                               checked={state.checkedB}
                                                               onChange={handleChange}
                                                               color="primary"
                                                               name="checkedB"
                                                               inputProps={{ 'aria-label': 'primary checkbox' }}
                                                           />
                                        </div>
                                    </Card>
                                </div>
                                <div className={"mt-5 "}>
                                    <Card>
                                        <div className={"flex justify-between w-full items-center py-3"}>
                                            <h3 className={"ms-5"}>Email</h3>
                                            <h3 className={"me-5 bg-[#ecf0fa] text-[#5173d4] py-1 rounded px-2"}>
                                                view Email</h3>
                                        </div>
                                    </Card>
                                </div>
                                <div className={"mt-5"}>
                                    <Card>
                                        <div className={"flex justify-between w-full py-3 items-center"}>
                                            <h3 className={"ms-5"}>Calendar</h3>
                                            <span className={"me-5 bg-[#ecf0fa] text-[#5173d4] py-1 rounded px-2"}>
                                                <BsCalendar/>
                                            </span>
                                        </div>
                                    </Card>
                                </div>
                                <div className={"mt-5"}>
                                    <Card>
                                        <div className={"flex justify-between w-full py-3 items-center"}>
                                            <h3 className={"ms-5"}>Choose AI response style</h3>
                                            <h3 className={"me-5 bg-[#ecf0fa] text-[#5173d4] py-1 rounded px-2"}>
                                                Choose Style</h3>
                                        </div>
                                    </Card>
                                </div>
                                </div>
                            </CardContent>
                        </Card>

                    </Stack>
                </Container>
            </Box>
        </>
    );
};
Settings.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);
export default Settings;