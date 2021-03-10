import axios from 'axios'
import React from 'react'

export default class Landing extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:''
        }
    }    
    componentDidMount () {
        this.setState({username: localStorage.getItem('username') })
    }
    render(){
        return(
            <>
                <div>
                    <h1>Landing {this.state.username}</h1>
                </div>
            </>
        )
    }
}