import { Form, Input, Button } from 'antd';

const Login = () => {

    return (
        <div className="auth">
            <div className="register card p-3">
                <h1 className="form-title">Login to your user account</h1>

                <Form layout="vertical">

                    <Form.Item label="Email" name="email">
                        <Input placeholder="Name" />
                    </Form.Item>

                    <Form.Item label="Password" name="password" type="password">
                        <Input placeholder="Name" />
                    </Form.Item>

                    <Button type="primary" className="register-btn mt-3" htmlType="submit">Sign in</Button>
                </Form>
            </div>
        </div>
    )
    
}

export default Login;