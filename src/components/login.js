import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const validate = values => {
    console.log(values)
    const errors = {}
    if (!values.Mail) {
        errors.Mail = 'este campo es obligatorio'
    }
    if (!values.Password) {
        errors.Password = 'este campo es obligatorio'
    }
    return errors
}

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            Mail: '',
            Password: '',

            errors: {}
        } 

        this.handleChange = this.handleChange.bind(this)
        this.handleSumbit = this.handleSumbit.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSumbit(e) {
        e.preventDefault();
        const { errors, ...sinErrors } = this.state
        const result = validate(sinErrors)
        this.setState({errors: result})
        if (!Object.keys(result).length) {
            console.log('enviar formulario')
        }
    }

    render() {
        const { errors } = this.state
        return (
            <div>
                <form onSubmit={this.handleSumbit}>
                    <h3>Mail</h3>
                    <input
                        className='input'
                        name='Mail'
                        onChange={this.handleChange}
                        id='mail'
                    />
                    <br />
                    {errors.Mail &&  <label for='mail' className="error">{errors.Mail}</label>}
                    <br />

                    <h3>Password</h3>
                    <input
                        className='input'
                        name='Password'
                        onChange={this.handleChange}
                        id='password'
                    />
                    <br />
                    {errors.Mail && <label for='password'>{errors.Password}</label>}
                    <br />
                    <br />
                    <button className='btn btn-primary' type='submit'>Login</button>
                </form>
            </div>
        )
    }
}

export default Login