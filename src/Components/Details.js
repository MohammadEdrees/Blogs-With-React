import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Details extends React.Component {
    constructor(props) {
        super(props);
        //seen by anonymous users
        this.getPosts('https://myfirstnode7.herokuapp.com/posts/')
    }
    state = {
        data: []
    }

    Add = (obj) => {
        console.log(this);

        this.state.arr.push(obj);
        this.setState({
            arr: this.state.arr
        })

    }
    editObj = (obj) => {
        console.log(this);
        this.state.arr.forEach(e => {
            if (e.Id === obj.Id) {
                console.log('Edit', obj)
                e.Name = obj.Name;
                e.Age = obj.Age;
                e.Address = obj.Address;
                e.DOB = obj.DOB;
            }

        });
        this.setState({
            arr: this.state.arr
        })

    }


    componentDidMount() {
        try {
            this.props.location.flag === 1
                ?
                this.editObj(this.props.location.newData)
                :
                this.Add(this.props.location.Data)


        } catch (e) {

        }
    }


    Delete(obj) {
        this.state.arr.splice(obj, 1)
        this.setState({
            arr: this.state.arr
        })
    }

    getPosts(url) {
        axios.get(url).then((r) => {
            console.log('Response', r);
            this.setState({
                data: r.data
            })

        }).catch((e) => {
            console.log('Error', e)
        })
    }

    deletePostWithId(post){
        axios({
            method:'delete',
            url:`https://myfirstnode7.herokuapp.com/posts/${post._id}`,
            headers:{"Authorization":` ${localStorage.getItem('token')}`

        },
        })
        .then(success=>{
            console.log('deleted Successfully',success.data);
        })
        .catch(error=>{
            console.log('Faild To delete',error);
        })
    }

    render() {

        return (
            <>
                {console.log(this.props)}

                <div className='container mt-5   text-center '>
                    {this.state.data.map((post, index) => (
                        <div className='container lg-col-8 mb-3 '>
                            <div class="card offset-2  p-4" style={{ "width": "65%" ,
                            border:'3px dashed grey ',borderRadius:'15px'}}>
                                <div class="card-body  mb-2 d-flex justify-content text-truncate">
                                    <p class="card-text offset-1 p-1 text-truncate" style={{"width": "30%", border:'.3px dotted black ',borderRadius:'15px',fontFamily:'cursive'}}>{post.title}</p>

                                    <p class="card-text offset-3">
                                    <Link to={
                                        {pathname:`/Edit/${post._id}`,
                                         Id:`${post._id}`,
                                         title:`${post.title}`,
                                         body:`${post.body}`,
                                    }
                                    }  className='btn btn-outline-info 'style={{ fontFamily:'cursive' }  }>Edit</Link>
                                    </p>
                                    <p class="card-text offset-3">
                                    <button className='btn btn-outline-danger 'style={{ fontFamily:'cursive' }}  onClick={()=>this.deletePostWithId(post)} >Delete</button>
                                    </p>
                                </div>
                                <div className='d-flex p-1' >
                                <img src={post.img} class="card-img-top offset-1 mb-2" 
                                 alt="..."style={{ "width": "50%",borderRadius:'15px' }}/>
                                <div className='p-3 offset-1 text-truncate text-wrap ' style={{"width": "30%",border:'1.1px dashed black  ',borderRadius:'15px',fontFamily:'cursive'}}>
                                    <p >{post.body}</p>
                                </div>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>
            </>
        );

    }
}