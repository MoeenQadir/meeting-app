import {subDays, subHours} from "date-fns";
import {Layout as DashboardLayout} from "../../layouts/dashboard/layout";
import {Box, Button, Container, Stack, Typography} from "@mui/material";
import {TfiReload} from "react-icons/tfi";
const now = new Date();
const data = [
    {
        id: '5e887b209c2dac3dd497f6db5',
        avatar: '/assets/avatars/avatar-fran-perez.png',
        createdAt: subDays(subHours(now, 1), 2).getTime(),
        content: 'Meeting regarding Q3 financials at 2 PM on Wed, Sep 15, 2023',
        name: 'Moon Darrin',
        phone: '304-428-3097',
    },
    {
        id: '5e887b209c2dac3dd497f6db6',
        avatar: '/assets/avatars/avatar-jane-doe.png',
        createdAt: subDays(subHours(now, 3), 5).getTime(),
        content: 'Lunch appointment with a client at 12:30 PM on Thu, Sep 10, 2023',
        name: 'Jane Doe',
        phone: '555-123-4567',
    },
    {
        id: '5e887b209c2dac3dd497f6db7',
        avatar: '/assets/avatars/avatar-john-smith.png',
        createdAt: subDays(subHours(now, 6), 10).getTime(),
        content: 'Conference call with the marketing team at 4 PM on Mon, Sep 5, 2023',
        name: 'John Smith',
        phone: '123-456-7890',
    },
    {
        id: '5e887b209c2dac3dd497f6db8',
        avatar: '/assets/avatars/avatar-susan-davis.png',
        createdAt: subDays(subHours(now, 2), 4).getTime(),
        content: 'Project status update meeting at 9 AM on Tue, Sep 13, 2023',
        name: 'Susan Davis',
        phone: '789-456-1230',
    },
    {
        id: '5e887b209c2dac3dd497f6db9',
        avatar: '/assets/avatars/avatar-mark-wilson.png',
        createdAt: subDays(subHours(now, 5), 8).getTime(),
        content: 'Training session for new employees at 3 PM on Fri, Sep 8, 2023',
        name: 'Mark Wilson',
        phone: '555-789-1234',
    },
    {
        id: '5e887b209c2dac3dd497f6db5',
        avatar: '/assets/avatars/avatar-fran-perez.png',
        createdAt: subDays(subHours(now, 1), 2).getTime(),
        content: 'Updated invitation: Augier CEO Meeting @ Fri Sep 1, 2023 10pm - 10:30pm (PKT) - 10:30pm (PKT)  ',
        name: 'Moon Darrin',
        phone: '304-428-3097'
    }
];
const EmailDetail = ({ emailData }) => (
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
                                Email
                            </Typography>
                            <Stack
                                alignItems="center"
                                direction="row"
                                spacing={1}
                            >
                            </Stack>
                        </Stack>
                        <div className={"flex justify-between items-center w-56 "}>
                            <TfiReload width={60}/>
                            <Button
                                variant="contained"
                            >
                                Schedule Meetings
                            </Button>
                        </div>
                    </Stack>
                    <h1>{emailData.name}</h1>
                    <p>{emailData.content}</p>
                </Stack>
            </Container>
        </Box>
    </>
);

export async function getServerSideProps({ params }) {
    const emailId = params.id;
    const emailData = data.find((email) => email.id === emailId);

    return {
        props: {
            emailData
        },
    };
}
EmailDetail.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);
export default EmailDetail;
