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
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { PiMicrosoftOutlookLogoFill } from 'react-icons/pi';
import { BsLinkedin } from 'react-icons/bs';
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

  return (
    <>
      <Head>
        <title>
          Login | Email Meetings
        </title>
      </Head>

      <Box
        sx={{
          backgroundColor: '#f5f8ff',
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Card>
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '30px',
            width: '100%',
            backgroundColor: '#4267cf'
          }}
        >
          <div>
            <Stack
              spacing={1}
              sx={{ mb: 3 }}
            >
              <div className={"mx-auto"}>
                <img src="/assets/images/logo.jpg" width={180} />
              </div>
              <Typography variant="h4" className="text-center text-white py-2">
                Sign In
              </Typography>

              <button type="button"
                      className="w-full py-2 px-4 inline-flex justify-center items-center gap-2 md:text-2xl rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                <FcGoogle style={{ fontSize: '20px' }}/> Login in with Google
              </button>
              <button type="button"
                      className="w-full py-2 px-4 inline-flex justify-center items-center md:text-2xl gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                <PiMicrosoftOutlookLogoFill style={{ fontSize: '28px', color: '#0072b1' }}/> Login
                in with OutLook
              </button>
              <button type="button"
                      className="w-full py-2 px-4 inline-flex justify-center items-center md:text-2xl gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                <BsLinkedin style={{ fontSize: '20px', color: '#0072b1' }}/> Login in with
                Linkedin
              </button>
              <button type="button"
                      className="w-full py-2 px-4 inline-flex justify-center md:text-2xl items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                <BiLogoInstagramAlt style={{ fontSize: '26px', color: '#FCAF45' }}/> Login in with
                Instagram
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
                  <span className={'text-white'}>At least 8 characters and one number</span>
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
                <Button
                  fullWidth
                  size="large"
                  sx={{
                    mt: 3,
                    backgroundColor: 'white',
                    color: 'black',
                  }}
                  type="submit"
                  variant="contained"
                >
                  Login
                </Button>
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
          <p className="mb-0 mt-2 pt-1 text-sm md:text-sm text-gray-100">
            <span>Don't have an account?</span>
            <Link href={"/auth/register"}>
              <span className="text-white font-bold px-4"> Register</span>
            </Link>
          </p>

        </Box>
        </Card>
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
