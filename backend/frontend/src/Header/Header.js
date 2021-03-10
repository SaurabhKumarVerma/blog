import React from 'react'
import {Link} from 'react-router-dom'


export default class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div><Link to='/login'>Login</Link></div>
                <div><Link to='/landing'>Landing</Link></div>
                <div><Link to='/register'>Register</Link></div>
            </div>
        )
    }
}