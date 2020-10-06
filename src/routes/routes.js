const routers = [
  {
    component: 'AuthLayout',
    path: '/healthCareProvider',
    exact: false,
    childrens: [
      {
        component: 'Login',
        path: '/Login',
        exact: true,
      },
      {
        component: 'Register',
        path: '/Register',
        exact: true,
      },
      {
        component: 'VerifyOTP',
        path: '/VerifyOTP',
        exact: true,
      },
    ],
  },
  {
    component: 'AuthLayout',
    path: '/admin',
    exact: false,
    childrens: [
      {
        component: 'AdminLogin',
        path: '/Login',
        exact: true,
      },
      {
        component: 'AdminVerifyOTP',
        path: '/VerifyOTP',
        exact: true,
      },
    ],
  },
  {
    component: 'HCPLayout',
    path: '/careProvider',
    exact: false,
    childrens: [
      {
        component: 'HCPAppointments',
        path: '/Appointments',
        exact: true,
      },
    ],
  },
];

export default routers;
