import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { setAuthenticated } from '../redux/reducers/authenticated-slice';
const Register = () => {
  const initialValues = { name: '', username: '', email: '', password: '', confirmPassword: '' };
  const isAuthenticated = useSelector((state) => state.authentication.authenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isErrorActive, setError] = useState(false);

  console.log(isAuthenticated)
  if (isAuthenticated) {
    navigate("/");
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Required')
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/,
        'Email must be from example.com domain'
      ),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .required('Required'),
    username: Yup.string()
      .min(2, 'Username must be at least 2 characters')
      .required('Required'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    localStorage.setItem("userList", JSON.stringify(values));
    localStorage.setItem("currentUser", JSON.stringify(values));
    dispatch(setAuthenticated(true));
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-80 p-6 border rounded">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="flex flex-col gap-4">

            {/* ✅ Added: Name field */}
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm">Name</label>
              <Field
                id="name"
                name="name"
                placeholder="Your full name"
                className="border rounded px-3 py-2 text-sm"
              />
              
              
              
            </div>

            {/* ✅ Added: Username field */}
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="text-sm">Username</label>
              <Field
                id="username"
                name="username"
                placeholder="Your username"
                className="border rounded px-3 py-2 text-sm"
              />
              <ErrorMessage name="username" component="div" className="text-red-500 text-xs" />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="you@example.com"
                className="border rounded px-3 py-2 text-sm"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm">Password</label>
              <Field
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                className="border rounded px-3 py-2 text-sm"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-xs" />
            </div>

            {/* ✅ Added: Confirm Password field */}
            <div className="flex flex-col gap-1">
              <label htmlFor="confirmPassword" className="text-sm">Confirm Password</label>
              <Field
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                type="password"
                className="border rounded px-3 py-2 text-sm"
              />
              <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs" />
            </div>

            <button
              type="submit"
              className="bg-black text-white rounded py-2 text-sm"
            >
              Register
            </button>

          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Register;