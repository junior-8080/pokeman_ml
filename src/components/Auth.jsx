import React, { useState } from "react";
import { Form, Input, Modal } from "antd";
import { useNavigate } from "react-router-dom";





const Auth = ({ isOpen, handleCancel }) => {

    const [auth, setAuth] = useState('login');
    const [submitting, setSubmit] = useState(false);
    const navigation = useNavigate();

    const handleAuthen = () => {
        navigation("/dashboard");
    }



    return (
        <Modal
            open={isOpen}
            onCancel={handleCancel}
            footer={[]}
            width="30%"
            destroyOnClose={true}
        >
            <div className="flex justify-center py-5">
                <div className="bg-white  w-full p-5">
                    <h2 className="text-lg font-bold">{auth === "register" ? "Create Account" : "Login"}</h2>
                    <Form className="mt-10" onFinish={handleAuthen} layout="vertical">
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Please enter your name' }]}
                        >
                            <Input
                                placeholder="User Name"
                                size="large"
                                className="border border-primary_dark"
                            />
                        </Form.Item>
                        {auth === "register" && <>
                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: 'Please enter your email' }]}
                            >
                                <Input
                                    placeholder="Email Address"
                                    size="large"
                                    className="border border-primary_dark"
                                />
                            </Form.Item>
                        </>}
                        <Form.Item
                            rules={[{ required: true, message: 'Please enter a password' }]}
                            name="password"
                        >
                            <Input.Password
                                placeholder="Password"
                                size="large"
                                className="border border-primary_dark"
                            />
                        </Form.Item>
                        <button className="btn btn-secondary btn-lg w-full font-semibold uppercase bg-primary_blue text-primary_yellow py-2 rounded-md" type="submit">{submitting ? "loading" : auth === "login" ? "Register!" : "Login!"}</button>
                    </Form>
                    {
                        auth === "login" ? <p className="my-2">Don’t have an account?{" "}<span className="primary cursor-pointer text-primary_dark" onClick={() => setAuth("register")}>Sign up</span></p> : <p className="mt-2">Already have an account?{" "}<span className="primary cursor-pointer text-primary_dark" onClick={() => setAuth("login")}>Login!</span></p>
                    }
                </div>
            </div>
        </Modal>
    );
}

export default Auth;
