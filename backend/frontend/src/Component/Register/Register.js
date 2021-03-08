
    // import axios from 'axios'
    import React, { Component } from 'react'
    import axios from 'axios'



    export class Register extends Component {
        constructor(props){
            super(props)
            this.state={
                username:'',
                firstname:'',
                lastname:'',
                password:'',
                email:''
            }
        }
            
        handleChange = (e) => {
            this.setState({[e.target.name]:e.target.value})
        }

        submitHandler = e =>{
            e.preventDefault()
            console.log(this.state)
            axios.post('http://127.0.0.1:8000/registation/',this.state)
                
                .then(res => {
                    
                    // res.send(this.state)
                    console.log(res)
                })
                .catch(error => {
                    console.log(error)
                })
        }

        render() {
            const { username,firstname,lastname,password,email} = this.state
            return (
                <div>
                    <form onSubmit={this.submitHandler}>
                        <input type='text' name='username' onChange={this.handleChange} value={username} placeholder='username'></input>
                            <br/>
                        <input type='text' name='firstname' onChange={this.handleChange} value={firstname} placeholder='First name'></input><br/>
                        <input type='text' name='lastname' onChange={this.handleChange} value={lastname} placeholder='last Name'></input><br/>
                        <input type='password' name='password' placeholder='Password' onChange={this.handleChange} value={password}></input><br/>
                        <input type='text' name='email' placeholder='Email'onChange={this.handleChange} value={email}></input><br/>

                        <button type='submit'>Register</button>
                    </form>
                </div>
            )
        }
    }

    export default Register