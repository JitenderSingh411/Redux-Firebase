import React from 'react';
import {NavLink} from 'react-router-dom';


let SignInLinks = () =>{
    return(
              <ul className="right">
                  <li> <NavLink to='/newProject'>New Project</NavLink> </li>
                  <li> <NavLink to='/Logout'>Logout</NavLink> </li>
                  <li> <NavLink to='/' className='btn btn-floating green darken-2'>JS</NavLink> </li>
              </ul>
    )
}

export default SignInLinks