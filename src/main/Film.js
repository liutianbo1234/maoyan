import React,{useState,useEffect} from 'react'
import 'antd-mobile/dist/antd-mobile.css';
import'../asert/film.css'
// import Swiper from './swiper'
import All_List from '../store/action/index.js'
import {
    bindActionCreators
} from 'redux';
import { connect } from 'react-redux'
import { Popover, NavBar, Icon,Button, WhiteSpace, WingBlank,Tabs,Carousel} from 'antd-mobile';
const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
function Film(props) {

	const [count, setCount] = useState(0)
	const [counter,setCounter] = useState({ hits: [] })
	
	 useEffect(() => {
		  document.title = `You clicked ${count} times`;
		 props.get_theaterList1()
		
		 if( props.liutianbo()){
			  setCounter(props.maoshuju)
		 }
	      },[]);
	const hangle = ()=>{
		 props.history.push('/City')
	};
	const tabs = [
	  { title: '正在上映', key: 't1' },
	  { title: '即将上映', key: 't2' },
	
	];
	const  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  };
	const [ visible, setVisible] = useState(false);
	const [selected, setSelected] = useState('');
	const  onSelect = (opt) => {
    console.log(opt.props.value);
      setVisible(false)
	  setSelected(opt.props.value)
	 props.history.push(opt.props.value)
  };
   const handleVisibleChange = (visible) => {
        setVisible(false)
	
  };
  const tabdianji=(index)=>{
	  console.log(index.key)
	  console.log(props.maoshuju)
  }
 
  return (
 
    <div className="film">
     
	    <NavBar style={{backgroundColor:'red',color: 'white'}}
	           mode="light"
	           rightContent={
	             <Popover 
				  
	               overlayClassName="fortest"
	               overlayStyle={{ color: 'currentColor' }}
	               visible={visible}
	               overlay={[
	                 (<Item key="4" value="/City"  data-seed="logId">电影</Item>),
	                 (<Item key="5" value="/City"  style={{ whiteSpace: 'nowrap' }}>首页</Item>),
	                 (<Item key="6" value="/City" >
	                   <span style={{ marginRight: 5 }}>影院</span>
	                 </Item>),
					 (<Item key="7" value="/City"  data-seed="logId">榜单</Item>),
					 (<Item key="8" value="/City"  style={{ whiteSpace: 'nowrap' }}>热点</Item>),
					 (<Item key="9" value="/City">
					   <span style={{ marginRight: 5 }}>商城</span>
					 </Item>)
	               ]}
	               align={{
	                 overflow: { adjustY: 0, adjustX: 0 },
	                 offset: [-10, 0],
	               }}
	               onVisibleChange={()=>{handleVisibleChange()}}
	               onSelect={onSelect}
	             >
	               <div style={{
	                 height: '100%',
	                 padding: '0 15px',
	                 marginRight: '-15px',
	                 display: 'flex',
	                 alignItems: 'center',
	               }}
	               >
	                 <Icon type="ellipsis" />
	               </div>
	             </Popover>
	           }
	         >
			    猫眼电影
			  </NavBar>
			  
			  <div className="selection">
					   <div className="liu"><img src="http://s0.meituan.net/bs/?f=myfe/canary:/asgard/images/avatar.png"/></div>
					   <div className="headercenter">
					       <p className="headertou">猫眼</p>
						   <p className="headerjiao">在线选座，热门影讯，爱上看电影</p>
					   </div>
					   <div className="waring"><Button type="warning" size="small">立即打开</Button><WhiteSpace /></div>
					  
			  </div>
			   <section className="topbar">
			     <div className="city" onClick={hangle}>
				 上海
				 </div>
				 <div className="tabler">
				    
				    <div style={{ height: 60 }}>
				      <Tabs tabBarUnderlineStyle tabs={tabs}
				        initialPage={'t1'}
						onChange={(index)=>{tabdianji(index)}}
				      >
				        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
				          Content of 正在上映
				        </div>
				        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
				          Content of 即将上映
				        </div>
				      
				      </Tabs>
				    </div>
				 </div>
				 <div className="search">搜索</div>
			   </section>
			  
			 <WhiteSpace />
			 <div className="conter">
			     <div className="lunbo">
				      <p>热门影人</p>
					  <div className="swiper1">
					    
					  </div>
				 </div>
				  <WhiteSpace />
				 <div className="liumao">
				   <div id="container"></div> 
				    
				 </div>
			 </div>  
    </div>
  );
}
const mapStateToProps = state=>{
	console.log("mapStateToProps-->state",state)
	console.log(state.theaterList)
	// console.log(state.maoshuju)

	return{
	   user:state.user,
	   couter:state.couter,
	   theaterList:state.theaterList,
	  
	}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(All_List,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Film);

