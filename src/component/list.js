import React from 'react';
import {connect} from 'react-redux'
import {deletetask,complettask,edittask} from '../Action'


//  const List=(props)=> {
  class List extends React.Component{
    constructor(props){
      super(props)
      this.state={
edit:""
      }
    }
    handleedit=e=>{
   this.setState({
     edit:e.target.value
   })
   
    }
   
    
     
      render(){
        return(<div >
          <h2>Mytodo List</h2>
      <ul>
    
        {this.props.tab.map(el => (
          <div className="list-group list-group-horizontal" key={el.key}>
          <li className="list-group-item">
          <h3 className={el.completed ? "completed" : ""} value={this.state.edit} >
            {el.edit ? <input type="text" value={this.state.edit} onChange={this.handleedit}/> : el.title}
            </h3>
          </li>
          <li className="list-group-item"><button class="btn btn-light" onClick={()=>this.props.deletetask(el.key)}>delete</button></li>
          <li className="list-group-item"><button class="btn btn-light" onClick={() => this.props.complettask(el.key)}>{el.completed ? "Undo" : "Done"}</button></li>
          <li className="list-group-item"><button class="btn btn-light" onClick={() => this.props.edittask({id:el.key,titre:this.state.edit})}>edit</button></li>
          </div>
          
        ))}
      </ul></div>
    );
  }
}
  const mapStateToProps = state => {
    return { tab:state};
  };

  const d=(dispatch)=>{
    return{
      deletetask:(payload)=>{dispatch(deletetask(payload))},
      complettask:(payload)=>{dispatch(complettask(payload))},
      edittask:(payload)=>{dispatch(edittask(payload))}
  }}



  
export default connect(mapStateToProps,d)(List)

