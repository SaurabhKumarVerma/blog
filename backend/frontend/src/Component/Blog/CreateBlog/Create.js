
// import axios from 'axios'
import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css'
import { history, Redirect } from "react-router-dom";



export class Create extends Component {
    constructor(props){
        super(props)
        this.state={
            blog_title:'',
            blog_text:'',
            blog_Author:''
                       
        }
    }
   
    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    
    submitHandler = e =>{
        // const history = useHistory();

        e.preventDefault()
        
        const config = {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('access_token')}
        };
        
        console.log(this.state)
         axios.post('http://127.0.0.1:8000/create_blog/',this.state,config)
            
            .then(res => {
                console.log(res.data)
                localStorage.getItem('access_token')
                console.log('Successfully Login');
                console.log(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
      
        const { blog_Author,blog_title,blog_text} = this.state
        
        return (
            <div>
                <form onSubmit={this.submitHandler}>

                
                    <input type='text' name='blog_title' placeholder='Blog Title' onChange={this.handleChange} value={blog_title}></input><br/>
                    <input type='hidden' name='blog_title' placeholder='Blog Title' onChange={this.handleChange} value={this.setState({blog_Author:localStorage.getItem('id')})}></input><br/>
                    <input type='text' name='blog_text' placeholder='Blog Details'onChange={this.handleChange} value={blog_text}></input><br/>

                    <button type='submit'  >Create Blog</button>
                </form>
            </div>
        )
    }
}

export default Create