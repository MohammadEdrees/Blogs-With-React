import React, { Component } from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class Add extends Component {
    constructor(props) {
        super(props);
        //worked
        // this.userRegistration({
        //     "username":"M2",
        //     "password":"123",
        //     "firstname":"M2",
        //     "mail":"m@a.com"
        // });
        this.img='../img/161394448942vvv4.jpg'
        this.token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYWlsIjoibUBhLmNvbSIsInBhc3N3b3JkIjoiMTIzIiwiaWQiOiI2MDg4MTFjMmVjN2MzMjAwMTVkZGE3ZDYiLCJpYXQiOjE2MTk1MzA1OTEsImV4cCI6MTYxOTcwMzM5MX0.P9dMh03adX3b4_JSkz29kTzCFwuWlZm9VTF5uhcrEqU"
        // this.userLogin({
        //     "mail":"m@a.com",
        //     "password":"123"
        // })
        //worked
        //this.getAllUsers();
        //this.addPost();
    }
    state = {
        post:{title:'',body:'',img:''},
        user:{},
        obj: { Id:'', Name:'',Age:'',Address:'',DOB:'' }
    }
    changeTitleValue=(e)=>{
        this.setState(({
            post:{title:e.target.value}
        }))
        console.log(this.state.post)
    }
    changeBodyValue=(e)=>{
        this.setState(({
            post:{title:this.state.post.title,body:e.target.value}
        }))
        console.log(this.state.post)
    }
    changeImgValue=(e)=>{
        this.setState(({
            post:{title:this.state.post.title,body:this.state.post.body,img:e.target.value}
        }))
        console.log(this.state.post)
    }
    changeIdValue=(e)=>{
        this.setState(({
            obj:{Id:e.target.value}
        }))
        console.log(this.state.obj)
    }
    changeNameValue=(e)=>{
        this.setState(({
            obj:{Id:this.state.obj.Id,Name:e.target.value}
        }))
        console.log(this.state.obj)
    }
    //stoped here 3:00 PM
    changeAgeValue=(e)=>{
        this.setState(({
            obj:{Id:this.state.obj.Id,Name:this.state.obj.Name,Age:e.target.value}
        }))
        console.log(this.state.obj)
    }
    changeAddressValue=(e)=>{
        this.setState(({
            obj:{Id:this.state.obj.Id,Name:this.state.obj.Name,Age:this.state.obj.Age,Address:e.target.value}
        }))
        console.log(this.state.obj)
    }
    changeDOBValue=(e)=>{
        this.setState(({
            obj:{Id:this.state.obj.Id,Name:this.state.obj.Name,Age:this.state.obj.Age,Address:this.state.obj.Age,DOB:e.target.value}
        }))
        console.log(this.state.obj)
    }
    userRegistration(user){
        axios.post('https://myfirstnode7.herokuapp.com/users',user).then(r=>{
            console.log('success',r.data)
        }).catch(e=>{
            console.log('faild',e)
        })
    }
    userLogin(user){
        axios.post('https://myfirstnode7.herokuapp.com/users/login',user)
        .then(success=>{
            console.log('Login successful',success.data);
            localStorage.setItem('token',success.data.token);

        })
        .catch(error=>{
            console.log('FaildToLogin',error);
        })

    }
    
    getAllUsers(){
       
        // const config = {
        //     headers: { 'Authorization': ` ${localStorage.getItem('token')}` }
        // };
        console.log('token',localStorage.getItem('token'))
        axios({
            method:'get',//default
            url:"https://myfirstnode7.herokuapp.com/users",
            headers:{"Authorization":` ${localStorage.getItem('token')}`}
        })
        .then(success=>{
            console.log('success to users',success.data);
        })
        .catch(error=>{
            console.log('blocked',error);
        })
    }
    addPost(){
        var myPost = new FormData();
        myPost.append('title',`${this.state.post.title}`);
        myPost.append('body',`${this.state.post.body}`)
        let p={
            "title":`${this.state.post.title}`,
            "body" : `${this.state.post.body}`
        }
        console.log('post',p);
        // const config = {
        //     headers: { 'Authorization': ` ${localStorage.getItem('token')}` },
        //     'Content-Type': `multipart/form-data`
        // };
        axios({
            method:'post',
            url:"https://myfirstnode7.herokuapp.com/posts/p",
            data:p,
            headers:{"Authorization":` ${localStorage.getItem('token')}`

        },
        })
        .then(success=>{
            console.log('Added Well',success.data);
        })
        .catch(error=>{
            console.log('FaildToAdd',error);
        })
    }
    



    render() {
        return (
            <>
                <div  className="col-lg-4 col-md-4 mt-2 offset-4 border pb-2 border-info ">
                    <br />
                    <input type="text" id='title' placeholder="title" className="form-control" value={this.state.post.title} onChange={this.changeTitleValue}/>
                    <br />
                    <input type="text" id="body" placeholder="body" className="form-control" value={this.state.post.body} onChange={this.changeBodyValue} />
                    <br />
                    <button className='btn btn-success' onClick={()=>{this.addPost()}}>add</button>        
                </div>
            </>
        )
    }
}