import React from 'react'

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
            <h2 className='lo'>Login</h2>
            <div className="from">
            <input type="text" placeholder="Full Name" className="input"/>
            
            <input type="phone" placeholder="Phone" className="input2"/>
            <input type="password" placeholder="Password" className="input2"/>

        </div>

        <button onClick={this.login} className="logi">Login</button>
        <h6>Developed by Pooja Mittal</h6>
        </div>
        
        </>
    )
} else {
    return(

        <>
        <div className="from-outer">
            <h2 className='lo'>Logout</h2>
            <div className="from">
            <input type="text" placeholder="Pooja" className="input"/>
            
            <input type="password" placeholder="pooja@123" className="input2"/>
            
            <input type="phone" placeholder="9898776678" className="input2"/>

        </div>
        
     <button onClick={this.logout} className="logi">Logout</button>

     <h6>Developed by Pooja Mittal</h6>
        </div>
        
        </>
    )
}
            
}

}


export default Condition