import React from 'react';
import {NavLink} from 'react-router-dom';


let SignOutLinks = () =>{
    return(
              <ul className="right">
                  <li> <NavLink to='/signUp'>Sign Up</NavLink> </li>
                  <li> <NavLink to='/signIn'>Sign In</NavLink> </li>
              </ul>
    )
}

export default SignOutLinks