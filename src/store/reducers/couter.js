 
 import {get_theater,maoyan} from '../action/index.js'
 // const get_theaterList = "get_theaterList"
 export function couter(state = 0,action){
	switch(action.type){
		case "add":
		return state +1;
		default:
		return state;
	}
}

export function theaterList(state = [],action){
	state = JSON.parse(JSON.stringify(state));
	switch(action.type){
		case "get_theaterList1":
		return action.payload;
		default:
		return state;
	}
}

export function mao(state = [],action){
	state = JSON.parse(JSON.stringify(state));
	switch(action.type){
		case "maoshuju":
	
		return action.payload;
		default:
	
		return state;
	}
}

 export function sousuo(state = true,action){
	switch(action.type){
		case "add1":
		return false;
		case "add2":
		return state;
		
		default:
			
		return state;
		
		
	}
}

