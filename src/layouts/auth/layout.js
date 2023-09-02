import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Box, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Logo } from 'src/components/logo';
import LottieAnimation from "../../components/LottieAnimation";
// TODO: Change subtitle text

export const Layout = (props) => {
  const { children } = props;
  const title = props.title;
  const img = props.img;
  const para = props.para;
  return (



    <Box

      component="main"
      sx={{
        display: 'flex',
        flex: '1 1 auto'
      }}

    >
      <Grid
        container
        sx={{ flex: '1 1 auto' }}
      >
        {/*Left */}

        <Grid

          xs={12}
          lg={6}
          sx={{
            alignItems: 'center',
            background: 'background.paper',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            '& img': {
              maxWidth: '100%',

            }
          }}
        >
        <div className={"hidden md:inline"}>
          <div>
          <h1 className=" text-center text-4xl"
          style={{color: "#4267CF"}}>
            {title}
          </h1>
          <p className={"text-gray-900 text-2xl text-center px-12 my-2"}>{para}</p>
          </div>
          <img src={img} width={800} />
        </div>
        </Grid>


        {/*Right */}

        <Grid

          xs={12}
          lg={6}
          sx={{
            backgroundColor: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}
        >

          {children}
        </Grid>
      </Grid>
    </Box>

  );
};

Layout.prototypes = {
  children: PropTypes.node
};