import { useCallback, useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Alert,
  Box,
  Button,
  FormHelperText,
  Link,
  Stack,
  Tab,
  Tabs,
  Card,
  TextField,
  Typography
} from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { Layout as AuthLayout } from 'src/layouts/auth/layout';
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
import { useMediaQuery } from '@mui/material';
const Page = () => {
  const router = useRouter();
  const auth = useAuth();
  const [method, setMethod] = useState('email');
  const formik = useFormik({
    initialValues: {
      email: 'admin@gmail.com',
      password: 'admin',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required')
    }),
    onSubmit: async (values, helpers) => {
      try {
        await auth.signIn(values.email, values.password);
        router.push('/');
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });

  const handleMethodChange = useCallback(
    (event, value) => {
      setMethod(value);
    },
    []
  );

  const handleSkip = useCallback(
    () => {
      auth.skip();
      router.push('/');
    },
    [auth, router]
  );
  const isSmallDevice = useMediaQuery('(max-width:600px)');
  return (
    <>
      <Head>
        <title>
          Login | Email Meetings
        </title>
      </Head>

      <Box
        sx={{
          backgroundColor: isSmallDevice ? '#4267cf' : '#f5f8ff',
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div className={"w-96 flex items-center justify-center rounded-md"}>
        <div className=" md:px-3  rounded-md md:py-16 w-full bg-[#4267cf]">

          <div className="px-4">
            <Stack
              spacing={1}
              sx={{ mb: 3 }}
            >
              <div className={"mx-auto"}>
                <img src="/assets/images/logo.jpg" width={120} />
              </div>
              <Typography variant="h5" className="text-center text-white py-2">
                Sign In
              </Typography>

              <button
                className="px-4 py-2 flex justify-center items-center bg-gray-50 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-full">
                <FcGoogle style={{ fontSize: '18px' , marginRight: '8px' }}/> Login in with Google
              </button>
              <button
                className="px-4 py-2 flex justify-center items-center bg-gray-50 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-full">
                <MdEmail style={{ fontSize: '18px' , marginRight: '8px' }}/> Login in with Email
              </button>
              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-b border-gray-300"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className=" px-4 text-sm text-white"
                        style={{ backgroundColor: '#4267CF' }}
                  >OR</span>
                </div>
              </div>

            </Stack>

            {method === 'email' && (
              <form
                noValidate
                onSubmit={formik.handleSubmit}
              >
                <Stack spacing={3}>
                  <TextField
                    error={!!(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    label="Email Address"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.email}
                    InputProps={{ style: { color: 'white' } }}
                    InputLabelProps={{ style: { color: 'white' } }}
                  />
                  <TextField
                    error={!!(formik.touched.password && formik.errors.password)}
                    fullWidth
                    helperText={formik.touched.password && formik.errors.password}
                    label="Password"
                    name="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="password"
                    value={formik.values.password}
                    InputProps={{ style: { color: 'white' } }}
                    InputLabelProps={{ style: { color: 'white' } }}
                  />

                </Stack>

                {formik.errors.submit && (
                  <Typography
                    color="error"
                    sx={{ mt: 3 }}
                    variant="body2"
                  >
                    {formik.errors.submit}
                  </Typography>
                )}
                {/*<Button*/}
                {/*  fullWidth*/}
                {/*  size="large"*/}
                {/*  sx={{*/}
                {/*    mt: 3,*/}
                {/*    backgroundColor: 'white',*/}
                {/*    color: 'black',*/}
                {/*  }}*/}
                {/*  type="submit"*/}
                {/*  variant="contained"*/}
                {/*>*/}
                {/*  Login*/}
                {/*</Button>*/}
                <button
                  type={"submit"}
                  className="px-4 py-2 w-full mt-4 flex justify-center items-center bg-gray-50 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-full">
                Login
                </button>
                             </form>
            )}
            {/*{method === 'phoneNumber' && (*/}
            {/*  <div>*/}
            {/*    <Typography*/}
            {/*      sx={{ mb: 1 }}*/}
            {/*      variant="h6"*/}
            {/*    >*/}
            {/*      Not available in the demo*/}
            {/*    </Typography>*/}
                {/*<Typography color="text.secondary">*/}
                {/*  To prevent unnecessary costs we disabled this feature in the demo.*/}
                {/*</Typography>*/}
            {/*  </div>*/}
            {/*)}*/}

          </div>

          <p className=" mt-2 m-4 pt-1 text-sm md:text-sm text-gray-100">
            <span>Don't have an account?</span>
            <Link href={"/auth/register"}>
              <span className="text-white font-bold px-2">Register</span>
            </Link>
          </p>

        </div>
        </div>
      </Box>

    </>
  );
};

Page.getLayout = (page) => (


<AuthLayout
  title="Unlock the Power of Automated Email Management"
  para="with our seamless login experience."
  img="/assets/images/Signin.jpg"
>
  {page}
</AuthLayout>
);

export default Page;
