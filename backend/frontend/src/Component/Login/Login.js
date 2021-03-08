
// import axios from 'axios'
import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css'
import { useHistory } from "react-router-dom";



export class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            password:'',
            email:''
        }
    }
   
    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler = e =>{
        // const history = useHistory();

        e.preventDefault()
        console.log(this.state)
        axios.post('http://127.0.0.1:8000/login/',this.state)
            
            .then(res => {
                
                // res.send(this.state)
                console.log(res)
                // this.props.history.push('/landing')
                console.log('Successfully Login');
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { password,email} = this.state
        return (
            <div>
                {/* <form onSubmit={this.submitHandler}>

                    <input type='password' name='password' placeholder='Password' onChange={this.handleChange} value={password}></input><br/>
                    <input type='text' name='email' placeholder='Email'onChange={this.handleChange} value={email}></input><br/>

                    <button type='submit'>Register</button>
                </form> */}

                    <form>

                    <h3>Log in</h3>
                    <div className='Card'>                   <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                    </div>
 
                    </form>



            </div>
        )
    }
}

export default Login