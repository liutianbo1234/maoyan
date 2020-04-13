import React from 'react';
import {HashRouter as Router ,  Switch,Route,Redirect,NavLink} from 'react-router-dom'
import Film from "./Film";
import router from '../router/routerMe/index.js'
import Me from "./Me.js";
import Cinema from "./Cinema.js";
import City from "./City.js"
import '../asert/luyou.css'
function Home(props) {
	console.log(props)
  return (
  <div>
       <Router>
  			     <div style={{width:'100%',height:'100%'}}>
  			         <div className="heng">
  			               <div><NavLink to="/Film"  activeStyle={{color:"red"}}>电影</NavLink></div>
  						   <div> <NavLink to="/Cinema" activeStyle={{color:"red"}}>剧场</NavLink></div>
  						   <div><NavLink to="/Me"  activeStyle={{color:"red"}} >我的</NavLink></div>
                   </div>    
                    
                     <Switch>
                     <Route path="/Film" exact component={Film}></Route>
                     <Route path="/Cinema" component={Cinema}></Route>
                     <Route path="/Me" component={Me}></Route>
					 <Route path="/City" component={City}></Route>
					
  			         </Switch>
  			     </div>
       </Router>
  			 
  			 
  		
  </div>
  );
}

export default Home;