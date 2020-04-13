import Film from "../../main/Film";
import Cinema from "../../main/Cinema";
import Me from "../../main/Me";
import Home from "../../main/Home";
import City  from "../../main/children/City"

export default [{
        path:'/',
        component:Home,
        title:'我的',
      
    }, {
        path:'/Film',
        component:Film,
        title:'电影',
        exact:true,
		
    },{
        path:'/Cinema',
        component:Cinema,
        title:'影院'
    },
	
	{
        path:'/Me',
        component:Me,
        title:'我的'
    },{
		path:'/City',
		component:City,
		title:'城市'
	}
   ]

