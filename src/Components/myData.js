import React,{Component} from 'react'

export default class MyData extends Component{
 
    state={
        mData:[{Id:0,Name:'A'},{Id:1,Name:'B'}],
        displyAll:()=>{
           return(
               <>
                <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Operations</th>
                </tr>
            </thead>
            <tbody>
            {this.state.mData.map((person, index) => (
                <tr>
                    <td>{person.Id}</td>
                    <td>{person.Name}</td>
                </tr>
            ))}
            </tbody>
            </table>
               </>
           )

       },//DisplyAllEnd
       Add:(obj)=>{
           this.state.mData.push(obj);
        
       }


    }
 
    addObj(obj){
        this.state.Add(obj);
        this.setState({
            mData:this.state.mData
        })
    }
    render(){
        return(
            <>
            {this.state.Add({Id:3,Name:'C'})}
            {this.state.displyAll()}
            </>
        )
    }
    
}