import React, { useCallback, useState } from 'react';
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
  Tab,
  Tabs,
  Card,
  TextField,
  Typography
} from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { Layout as AuthLayout } from 'src/layouts/auth/layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { PiMicrosoftOutlookLogoFill } from 'react-icons/pi';
import { BsLinkedin } from 'react-icons/bs';

const Login = () => {

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
        toast.success('Successful login', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        });
        router.push('/connect-account');
      } catch (err) {
        toast.error('Something went wrong', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        });
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

  return (
    <div className=" px-2 lg:px-12 md:px-12 py-8 h-full "
         style={{ backgroundColor: '#f5f8ff' }}>
      <Card variant="outlined"
            className=" w-full lg:w-3/5 md:w-3/5 mx-auto"
      >


        <Box
          sx={{
            backgroundColor: '#4267cf',
            flex: '1 1 auto',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              maxWidth: 550,
              px: '60px',
              py: '23px',
              width: '100%'
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
                <Typography variant="h3" className="text-center text-white py-10">
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
                <form className="space-y-6" action="#" method="POST">
                  <div>
                    <label htmlFor="email"
                           className="block text-sm text-white font-medium leading-6 ">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input

                        style={{background: "none", fontSize: "20px" }}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="Enter Your Email"
                        className="block w-full px-2 rounded-md border-0 py-1.5 text-xl shadow-sm text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-100 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-none"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password"
                             className="block text-sm  text-white font-medium leading-6 -">
                        Password
                      </label>
                      <div className="text-sm">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div className="">
                      <input
                        style={{background: "none",fontSize: "20px" }}
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter Your Password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md  px-2 border-0 py-1.5 text-white text-xl shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-100 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />

                    </div>
                    <span className={'text-white'}>At least 8 characters and one number</span>
                  </div>

                  <div>
                    <button type="button"
                            className="w-full py-2 px-4 font-bold text-2xl inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all  dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                      Sign In
                    </button>
                  </div>
                </form>

              )}
            </div>
            <p className="mb-0 mt-2 pt-1 text-sm md:text-xl text-gray-100">
              Don't have an account?
              <Link

               href={"/auth/register"}
                className=" transition decoration-red-300 duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 text-red-200"
              >
              <span className="text-white font-bold px-4"> Register</span>
              </Link
              >
            </p>
          </Box>
        </Box>
      </Card>
    </div>
  );
};

Login.getLayout = (page) => (
  <AuthLayout title={"Unlock the Power of Automated Email Management"} para={"with our seamless login experience."} img={"/assets/images/Signin.jpg"}>
    {page}
  </AuthLayout>
);

export default Login;
