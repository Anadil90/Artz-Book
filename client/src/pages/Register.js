import { Form, Input, Button } from 'antd';

const Register = () => {
    return (
        <div className="auth">
            <div className="register card p-3">
                <h1 className="form-title">Register for your user account</h1>

                <Form layout="vertical">
                    <Form.Item label="Name" name="name">
                        <Input placeholder="Name" />
                    </Form.Item>

                    <Form.Item label="Email" name="email">
                        <Input placeholder="Name" />
                    </Form.Item>

                    <Form.Item label="Password" name="password">
                        <Input placeholder="Name" />
                    </Form.Item>

                    <Button type="primary" className="register-btn mt-3">Register</Button>
                </Form>
            </div>
        </div>
    )
    
}

export default Register;