import React from 'react'
import axios from 'axios'
export default class Edit extends React.Component {
    state={
        
        post:{_id:this.props.location._id,title:this.props.location.title,
         body:this.props.location.body}
    }

    
    changeTitleValue=(e)=>{
        this.setState(({
            post:{title:e.target.value, body:this.state.post.body}  
        }))
        console.log(this.state.obj)
    }
    changeBodyValue=(e)=>{
        this.setState(({
            post:{title:this.state.post.title, body:e.target.value}  
        }))
        console.log(this.state.obj)
    }
    
    EditCase(){
        console.log(this.props.location._id)
        console.log(this.props.location.title)
        console.log(this.props.location.body)
        console.log(this.state.post)
        axios({
            method:'patch',
            url:`https://myfirstnode7.herokuapp.com/posts/${this.props.location._id}`,
            data:this.state.post,
            headers:{"Authorization":` ${localStorage.getItem('token')}`,

        },
        })
        .then(success=>{
            console.log('Done',success.data);
        })
        .catch(error=>{
            console.log('Failed',error);
        })
    }
    render() {
        return (
            
           <div className='container mt-5 text-center'>
            <h1>Edit Case</h1>
           Title:<input type='text' className='form-control'value={this.state.post.title} onChange={this.changeTitleValue} />
           Body:<input type='text' className='form-control'value={this.state.post.body}    onChange={this.changeBodyValue} />
           <br/>
           <button onClick={()=>this.EditCase()}>Save Changes</button>
           </div>
        )
    }


}


