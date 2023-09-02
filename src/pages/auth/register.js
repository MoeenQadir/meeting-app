import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Link,
  Stack,
  Card,
  TextField,
  Typography
} from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { Layout as AuthLayout } from 'src/layouts/auth/layout';
import { FcGoogle } from 'react-icons/fc';
import { PiMicrosoftOutlookLogoFill } from 'react-icons/pi';
import { BsLinkedin } from 'react-icons/bs';
import { BiLogoInstagramAlt } from 'react-icons/bi';

const Page = () => {
  const router = useRouter();
  const auth = useAuth();
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup.string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
      name: Yup.string()
               .max(255)
               .required('Name is required'),
      password: Yup.string()
                   .max(255)
                   .required('Password is required')
    }),
    onSubmit: async (values, helpers) => {
      try {
        await auth.signUp(values.email, values.name, values.password);
        router.push('/');
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });

  return (
    <>
      <Head>
        <title>Register | Email Meetings</title>
      </Head>
      <Box
        sx={{
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#f5f8ff'
        }}
      >
        <Card>
          <Box
            sx={{
              maxWidth: 650,
              px: 3,
              py: '30px',
              width: '100%',
              backgroundColor: '#4267cf'
            }}
          >
            <div>
              <Stack spacing={1} sx={{ mb: 3 }}>
                <div className="mx-auto">
                  <img src="/assets/images/logo.jpg" width={180} />
                </div>
                <Typography variant="h4" className="text-center text-white py-2">
                  Sign In
                </Typography>

                <button
                  type="button"
                  className="w-full py-2 px-4 inline-flex justify-center items-center gap-2 md:text-2xl rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                >
                  <FcGoogle style={{ fontSize: '20px' }} /> Login in with Google
                </button>
                <button
                  type="button"
                  className="w-full py-2 px-4 inline-flex justify-center items-center md:text-2xl gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark-bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                >
                  <PiMicrosoftOutlookLogoFill
                    style={{ fontSize: '28px', color: '#0072b1' }}
                  />{' '}
                  Login in with OutLook
                </button>
                <button
                  type="button"
                  className="w-full py-2 px-4 inline-flex justify-center items-center md:text-2xl gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark-bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                >
                  <BsLinkedin
                    style={{ fontSize: '20px', color: '#0072b1' }}
                  />{' '}
                  Login in with Linkedin
                </button>
                <button
                  type="button"
                  className="w-full py-2 px-4 inline-flex justify-center md:text-2xl items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark-bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                >
                  <BiLogoInstagramAlt
                    style={{ fontSize: '26px', color: '#FCAF45' }}
                  />{' '}
                  Login in with Instagram
                </button>
                <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-b border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span
                      className="px-4 text-sm text-white"
                      style={{ backgroundColor: '#4267CF' }}
                    >
                      OR
                    </span>
                  </div>
                </div>
              </Stack>
              <form noValidate onSubmit={formik.handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    error={!!(formik.touched.name && formik.errors.name)}
                    fullWidth
                    helperText={formik.touched.name && formik.errors.name}
                    label="Name"
                    name="name"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    InputProps={{ style: { color: 'white' } }}
                    InputLabelProps={{ style: { color: 'white' } }}
                  />
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
                <Button
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 3,
                    backgroundColor: 'white',
                    color: 'black'
                  }}
                >
                  Register
                </Button>
              </form>
            </div>
            <p className="mb-0 mt-2 pt-1 text-sm md:text-sm text-gray-100">
              <span>Already have an account?</span>
              <Link href="/auth/login">
                <span className="text-white font-bold px-4">Login</span>
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
    title="Join Us for Seamless Email Automation – Register Today"
    para="Streamline your inbox, automate your emails, and stay ahead of the game."
    img="/assets/images/login.jpg"
  >
    {page}
  </AuthLayout>
);

export default Page;
