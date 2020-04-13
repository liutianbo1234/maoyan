
import {BrowserRouter as Router ,  Switch,Route,Redirect,NavLink} from 'react-router-dom'
import Film from "./main/Film";
import React,{useState,useEffect} from 'react'
import Me from "./main/Me.js";
import Cinema from "./main/Cinema.js";
import City from "./main/City.js"
import rout from "./router/routerApp/index.js"
import './asert/luyou.css'


import {
    bindActionCreators
} from 'redux';
import { connect } from 'react-redux'
function App(props) {
	
	props.dispatch({
		type:"add2"
	})

	const [count, setCount] = useState('true')
   
	const handle = ()=>{
	   console.log(45688)
	// var submitObj = document.getElementById('hangde'); {count?style={display:"none"}?style={display:"block"}}
	
	}
  return (
  <div>
       <Router>
  			     <div style={{width:'100%',height:'100%'}}>
  			         <div id="hangde" className={ props.sousuo ? 'you' : 'wu' } onClick={()=>{handle()}}>,
					 {count}
  			               <div><NavLink to="/Film"  activeStyle={{color:"red"}}>电影</NavLink></div>
  						   <div> <NavLink to="/Cinema" activeStyle={{color:"red"}}>剧场</NavLink></div>
  						   <div><NavLink to="/Me"  activeStyle={{color:"red"}} >我的</NavLink></div>
                   </div>    
                    
                     <Switch>
                     <Route path="/Film" exact component={Film}></Route>
                     <Route path="/Cinema" component={Cinema}></Route>
                     <Route path="/Me" component={Me}></Route>
					
					 {rout.map(route=>{
					   return <Route key={route.path} {...route} />
					   
					 })}
  					 // <Redirect from="/*" to="/Film" />
  			         </Switch>
  			     </div>
       </Router>
  			 
  			 
  		
  </div>
  )
}
const mapStateToProps = state=>{
	console.log("mapStateToProps-->state",state)
	
	// console.log(state.maoshuju)
    return{
	   sousuo:state.sousuo,
	   
	   // maoshuju:state.maoshuju
	}
	
}
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(dispatch)
// }
export default connect( mapStateToProps)(App);
