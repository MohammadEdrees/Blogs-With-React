import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router';
import Details from './Details';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        user: {
            mail: "m@a.com",
            password: "123"
            // mail: "",
            // password: ""
        }
    }
    changeMailValue = (e) => {
        this.setState(({
            user: { mail: e.target.value }
        }))
        console.log(this.state.user)
    }
    changePassValue = (e) => {
        this.setState(({
            user: { mail: this.state.user.mail, password: e.target.value }
        }))
        console.log(this.state.user)
    }

    userLogin(user) {
        if(this.state.user.mail===''||this.state.user.password===''){
            alert('complete data');
        }
        localStorage.removeItem('token')
        axios.post('https://myfirstnode7.herokuapp.com/users/login', user)
            .then(success => {
                console.log('Login successful', success.data);
                localStorage.setItem('token', success.data.token);
                if(localStorage.getItem('token')===success.data.token){
                this.props.history.push('/details')
                }
                //go to Home
            })
            .catch(error => {
                console.log('FaildToLogin', error);
            })

    }




    render() {

        return (
            <>
                <div className="col-lg-4 col-md-4 mt-2 offset-4 border pb-2 border-info ">
                    <br />
                     <label for="txtMail" class="form-label">First name</label>
                    <input type="text" id='txtMail' placeholder="Mail" className="form-control" required value={this.state.user.mail} onChange={this.changeMailValue} />
                    <br />
                    <input type="text" id="txtName" placeholder="Name" className="form-control" required value={this.state.user.password} onChange={this.changePassValue} />
                    <br />
                    <button className='btn btn-outline-info' onClick={()=>this.userLogin(this.state.user)} >Login</button>
                </div>
    {/* <form class=" container " post action="" >
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationDefault01" value={this.state.user.mail} onChange={this.changeMailValue} required/>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Password</label>
    <input type="password" class="form-control" id="validationDefault02" value={this.state.user.password} onChange={this.changePassValue} required/>
  </div>
  
  <div class="col-12">
    <button class="btn btn-primary" type="button" onClick={()=>this.userLogin(this.state.user)} >Login</button>
  </div>
</form> */}
                
            </>
        );

    }
}