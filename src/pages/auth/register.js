import Head from 'next/head';
import  { useState } from 'react';
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
  Typography, useMediaQuery
} from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { Layout as AuthLayout } from 'src/layouts/auth/layout';
import { FcGoogle } from 'react-icons/fc';

import { MdEmail } from 'react-icons/md';
import InputAdornment from '@mui/material/InputAdornment';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        router.push('/login');
        toast.success('Successfully Login', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })

      } catch (err) {
        toast.error('Something went wrong', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);

      }
    }
  });
  const isSmallDevice = useMediaQuery('(max-width:600px)');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const showToast = () => {
    toast.success('Successfully Login with email ', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <>
      <Head>
        <title>Register | Email Meetings</title>
      </Head>
      <Box
        sx={{
          backgroundColor: isSmallDevice ? '#4267cf' : '#f5f8ff',
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',

        }}
      >
        <div className={"w-96 flex items-center justify-center rounded-md"}>
          <div className=" md:px-3  rounded-md md:py-8 w-full bg-[#4267cf]"
            // sx={{
            //   maxWidth: 650,
            //   px: 3,
            //   py: '30px',
            //   width: '100%',
            //   backgroundColor: '#4267cf'
            // }}
          >
            <div className="px-4">
              <Stack spacing={1} sx={{ mb: 3 }}>
                <div className="mx-auto">
                  <img src="/assets/images/logo.jpg" width={120} />
                </div>
                <Typography variant="h5" className="text-center text-white py-2">
                  Sign In
                </Typography>

                <button
                  onClick={showToast}
                  className="px-4 py-2 w-full mt-4 flex justify-center items-center bg-white hover:bg-blue-200 hover:text-gray-800 text-gray-800 text-sm font-bold rounded-full">
                  <FcGoogle style={{ fontSize: '18px' , marginRight: '8px' }}/> Login in with Google
                </button>
                <button
                  onClick={showToast}
                  className="px-4 py-2 w-full mt-4 flex justify-center items-center bg-white hover:bg-blue-200 hover:text-gray-800 text-gray-800 text-sm font-bold rounded-full">
                  <MdEmail style={{ fontSize: '18px' , marginRight: '8px' }}/> Login in with Email
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
                    type={showPassword ? 'text' : 'password'} // Toggle between 'text' and 'password' based on showPassword state
                    value={formik.values.password}
                    InputProps={{
                      style: { color: 'white' },
                      endAdornment: (
                        <InputAdornment position="end">
                          <div onClick={handleTogglePasswordVisibility} style={{ cursor: 'pointer', color: "white" }}>
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                          </div>
                        </InputAdornment>
                      ),
                    }}
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
                {/*  type="submit"*/}
                {/*  variant="contained"*/}
                {/*  sx={{*/}
                {/*    mt: 3,*/}
                {/*    backgroundColor: 'white',*/}
                {/*    color: 'black'*/}
                {/*  }}*/}
                {/*>*/}
                {/*  Register*/}
                {/*</Button>*/}

                <button
                  type={"submit"}
                  className="px-4 py-2 w-full mt-4 flex justify-center items-center bg-white hover:bg-blue-200 hover:text-gray-800 text-gray-800 text-sm font-bold rounded-full">
                  Register
                </button>
                <ToastContainer />
              </form>
            </div>
            <p className="mb-0 m-4 mt-2 pt-1 text-sm md:text-sm text-gray-100">
              <span>Already have an account?</span>
              <Link href="/auth/login">
                <span className="text-white font-bold px-4">Login</span>
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
    title="Automate Your Email"
    para="Effortless email automation for efficient communication. Get started today!"
    img="/assets/images/login.jpg"
  >
    {page}
  </AuthLayout>
);

export default Page;
