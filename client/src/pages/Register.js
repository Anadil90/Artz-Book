import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

const Register = () => {
    const onFinish = (values) => {
        console.log('form values: ', values)
    }

    return (
        <div className="auth">
            <div className="register card p-3">
                <h1 className="form-title">Register for your user account</h1>

                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item label="Name" name="name">
                        <Input placeholder="Name" />
                    </Form.Item>

                    <Form.Item label="Email" name="email">
                        <Input placeholder="Name" />
                    </Form.Item>

                    <Form.Item label="Password" name="password" type="password">
                        <Input placeholder="Name" />
                    </Form.Item>

                    <Button type="primary" className="register-btn mt-3" htmlType="submit">Register</Button>
                    <Link to="/login" className="my-2">Login to your account</Link>
                </Form>
            </div>
        </div>
    )
    
}

export default Register;