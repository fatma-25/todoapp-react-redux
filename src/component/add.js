import React from 'react'
import {connect} from 'react-redux'
import {addtask} from '../Action'

class Add extends React.Component{

    state={
      input:""
    }
    handleinput=e=>{
      this.setState({
        input:e.target.value
      })
    }
    handleclick=e=>{
      e.preventDefault()

      this.props.addtask({
  key:Math.random(),
  title:this.state.input,
  completed:false,
  edit:false})
      this.setState({input:""})
  console.log(this.props.addtask)
    }
  
  
    render(){
      return(<div className="header">
        <h1>To-doapp</h1>
        <input  value={this.state.input} onChange={this.handleinput}  type='text'/>
        {console.log(this.handleclick)}
        <button onClick={this.handleclick}>add</button></div>)
    }
  }
  
  const d=(dispatch)=>{
    return{
      addtask:(payload)=>{dispatch(addtask(payload))
        {console.log('foo bar')}},

    }
  }
  
  export default connect(null,d)(Add)