import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";
export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
            {/* <a class="ui inverted button" role="button" onClick={signIn}>Sign in</a> */}
             <Button color="ui orange inverted button" onClick={signIn} >Sign in</Button> 
            {/* <a class="ui inverted button" role="button" style={{marginLeft:"0.5em"}} as={Link} to="/signup" >Sign Up</a> */}
             <Button  as={Link} to="/signup"  color="ui inverted button" style={{marginLeft:"0.5em"}}>Sign up</Button> 
            </Menu.Item>
           
        </div>
    )
}
