import Head from 'next/head';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CompanyCard } from 'src/sections/companies/company-card';

const meetings = [
  {
    id: '2569ce0d517a7f06d3ea1f24',
    createdAt: 'July 10, 2023, 10:00am',
    description: 'CallSense Progress meeting with senior developers.',
    logo: '/assets/logos/logo-dropbox.png',
    title: 'CallSense meeting',
    downloads: '594'
  },
  {
    id: 'ed2b900870ceba72d203ec15',
    createdAt: '31/03/2019',
      description: 'CallSense Progress meeting with senior developers.',
      logo: '/assets/logos/logo-dropbox.png',
      title: 'CallSense meeting',
    downloads: '625'
  },
  {
    id: 'a033e38768c82fca90df3db7',
    createdAt: '03/04/2019',
      description: 'CallSense Progress meeting with senior developers.',
      logo: '/assets/logos/logo-dropbox.png',
      title: 'CallSense meeting',
    downloads: '857'
  },
  {
    id: '1efecb2bf6a51def9869ab0f',
    createdAt: '04/04/2019',
      description: 'CallSense Progress meeting with senior developers.',
      logo: '/assets/logos/logo-dropbox.png',
      title: 'CallSense meeting',
    downloads: '406'
  },
  {
    id: '1ed68149f65fbc6089b5fd07',
    createdAt: '04/04/2019',
      description: 'CallSense Progress meeting with senior developers.',
      logo: '/assets/logos/logo-dropbox.png',
      title: 'CallSense meeting',
    downloads: '835'
  },
  {
    id: '5dab321376eff6177407e887',
    createdAt: '04/04/2019',
      description: 'CallSense Progress meeting with senior developers.',
      logo: '/assets/logos/logo-dropbox.png',
      title: 'CallSense meeting',
    downloads: '835'
  }
];

const Page = () => (
  <>
    <Head>
      <title>
        Meetings | Email Meetings
      </title>
    </Head>
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
                Meetings
              </Typography>
              <Stack
                alignItems="center"
                direction="row"
                spacing={1}
              >
              </Stack>
            </Stack>
            <div>
              <Button
                variant="contained"
              >
                Schedule Meetings
              </Button>
            </div>
          </Stack>
          <Grid
            container
            spacing={3}
          >
            {meetings.map((company) => (
              <Grid
                xs={12}
                md={6}
                lg={4}
                key={company.id}
              >
                <CompanyCard company={company} />
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Pagination
              count={3}
              size="small"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
