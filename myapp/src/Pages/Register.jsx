import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Register = () => {
    return (
        <>
            <Formik
                initialValues={{ firstname: '', lastname: '', email: '', password: '', cpassword: '' }}
                validationSchema={Yup.object({
                    firstname: Yup
                        .string()
                        .required('firstnaem is mamdatory')
                        .max(20, '20 characters or less'),
                    lastname: Yup
                        .string()
                        .required('lastname is mamdatory')
                        .max(20, '20 characters or less'),
                    email: Yup
                        .string()

                        .email('invalid e,mail format'),

                    password: Yup
                        .string()
                        .required('password is mandatory')
                        .matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$!_?])[a-zA-Z\d@#$!_?]{8,50}$ /, 'must contain one uppercase, one lowercase,one digit and one special character and must be minimum of 8 characters'),                                                      // .= single character   * precedence character

                    cpassword: Yup
                        .string()
                        .required('confirm password is mandatory')
                        .oneOf([Yup.ref('password'), null], 'password and confirm password doesnot match')
                })}
            >
                <div className="container my-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-mod-6 shadow p-3">
                            <Form>
                                <div className="mb-2">
                                    <label htmlFor='firstname'>FirstName</label>
                                    <Field type='text' name='firstname' id='firstname'
                                        className='form-control' />
                                    <ErrorMessage name='firstname'>
                                        {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor='lastname'>lastname</label>
                                    <Field type='text' name='lastname' id='lastname'
                                        className='form-control' />
                                    <ErrorMessage name='lastname'>
                                        {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor='email'>Email</label>
                                    <Field type='text' name='email' id='email'
                                        className='form-control' />
                                    <ErrorMessage name='email'>
                                        {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor='password'>Password</label>
                                    <Field type='text' name='password' id='password'
                                        className='form-control' />
                                    <ErrorMessage name='password'>
                                        {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor='cpassword'>CPassword</label>
                                    <Field type='text' name='cpassword' id='cpassword'
                                        className='form-control' />
                                    <ErrorMessage name='cpassword'>
                                        {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                    </ErrorMessage>
                                </div>
                                <div className="mb-2">
                                    <button className='btn btn-primary'>Register</button>
                                </div>
                            </Form>

                        </div>
                    </div>
                </div>

            </Formik>
        </>
    )
}

export default Register