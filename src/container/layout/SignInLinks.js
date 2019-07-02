import React from 'react';
import {NavLink} from 'react-router-dom';


let SignInLinks = () =>{
    return(
              <ul className="right">
                  <li> <NavLink to='/newProject' className=' '>New Project</NavLink> </li>
                  <li> <NavLink to='/Logout' className='waves-effect'>Logout</NavLink> </li>
                  <li> <NavLink to='/' className='btn btn-floating green darken-2 waves-effect'>JS</NavLink> </li>
              </ul>
    )
}

export default SignInLinks