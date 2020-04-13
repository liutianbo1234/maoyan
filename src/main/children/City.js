import React from 'react';

import {
    bindActionCreators
} from 'redux';
import { connect } from 'react-redux'
function City(props) {
	props.dispatch({
		type:"add1"
	})
	
	const dianji =()=>{
		 props.history.go(-1)
	}
	
  return (
    <div>
       <h1 onClick={dianji}>城市23341</h1>
    </div>
  );
}
const mapStateToProps = state=>{
    return{
	   sousuo:state.sousuo,
	}
}

export default connect( mapStateToProps)(City);