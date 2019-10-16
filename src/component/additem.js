// import React from 'react'
// import {connect} from 'react-redux'
// import {handleChange, handleAdd } from '../Action/index'


// const Add=(props)=>{
//     return( <div>
   

//         <div className="header">
//           <h1>To do app</h1>
//           <input
//             type="text"
//             name="task"
//             value={props.inputValue}
//             onChange={props.inputChanged}
//             placeholder="new Task"
//             />
//             {/* { console.log(props.inputValue)} */}
//           <button onClick={props.inputAdd}>Add</button>
//           {/* { console.log(props.inputadd)} */}
//         </div>
//         {/* <p>{props.inputValue}</p> */}
//       </div>)
// }


// const mapStateToProps =(state)=>{
//   return{
//     inputValue:state.inputValue,
//     item:state.item
//   }

// }

// const mapDispatchToProps=(dispatch)=>{
// return{
//  inputChanged:(x)=>{dispatch(handleChange(x))
//   console.log('submit')},
 
//     inputAdd: (x)=>{dispatch(handleAdd(x))
//       console.log('submit')
//     }
// }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Add)
// import {addtask} from '../Action'
// import { connect } from 'tls';
// export default class Add extends Component{

//   state={
//     input:""
//   }
//   handleinput=e=>{
//     this.setstate({
//       input:e.target.value
//     })
//   }
//   handleclick=e=>{
//     e.preventDefault()
//     this.props.addtask({
// key:Math.random(),
// // title:this.state.input
//     })
//   }


//   render(){
//     return(<p>todoapp</p>
//       <input  value={this.state.input}   onchange={this.handleinput}     />
//       <botton onclick={this.handleclick}>add</botton>)
//   }
// }

// const d=(dispatch)=>{
//   return{
//     addtask:(payload)=>dispatch(addtask(payload))
//   }
// }

// connect(null,d)(Add)