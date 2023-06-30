import React from 'react'
//import mylogo from '../src/Assets/Images/logo.jpg'

class Condition extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
         
         isloggedin: true   
        }

    }

    login = () => {
        this.setState({ isloggedin: false })
    }

    logout = () => {
        this.setState({ isloggedin: true})
    }

    render() {
       let { isloggedin } = this.state
if (isloggedin) {
    return(

        <>
           <div className="from-outer">
            <div className='inst'></div>

            <form className='hello'>                
            <input type="text" placeholder="Username, phone number, or email" className="input"/>
         <input type="password" placeholder="Password" className="input"/>

            </form>
            
        <button onClick={this.login} className="logi">Login</button>
        </div>

        
        
        </>
    )
} else {
    return(

        <>
        <div className="from-outer">
            
        <div className='inst'></div>

        <h3>User is logged in</h3>
        
     <button onClick={this.logout} className="logu">Logout</button>

        </div>
        

     
        
        </>
    )
}
            
}

}


export default Condition