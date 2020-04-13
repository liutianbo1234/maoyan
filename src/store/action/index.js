import axios from 'axios'
import {
	get_theaterList1,	
	maoshuju,
	add2 
} from "./list.js";
export function get_theater(payload) {
	// console.log(payload)
	return {
		type:get_theaterList1,
		payload
	}
	
}
export function maoyan(payload){
	return {
		type:maoshuju,
		payload
	}
}
export function yin(payload){
	return {
		type:add2,
		payload
	}
}
export default {
	  get_theaterList1() {
		return async (dispatch) => {
				const {
					data
				} = await axios.get("https://api.juooo.com/theatre/index/getTheatreList?page=1&version=6.1.1&referer=1");
			    dispatch(get_theater(data.data.theatre_list));			
			   }
		},
		
	  liutianbo(){
		return  (dispatch) => {
			
				axios.get("/uplate/filterCinemas", 
				    {
				        params: {
				            'ci': 10,
				            "optimus_uuid": "772CA1B04FB511EA948A7BF244A987344E87A88751D54EB6A3AC9326FFDAC45A",
							"optimus_risk_level":71,
							"optimus_code":10
							
				        },
				    }
				).then((res)=>{
					console.log(typeof res.data.brand)
					// var shuju = JSON.parse(JSON.stringify(res.data.brand.subItems))
					
					// dispatch(maoyan(shuju))
					
				})

			   }
	},
	// xianshi(){
	// 	return dispatch(yin(true));
	// }

}

