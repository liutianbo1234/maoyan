import React from 'react';
import { Popover, NavBar, Icon,SearchBar,Button, WhiteSpace, WingBlank,Menu, ActivityIndicator } from 'antd-mobile';
// import 'antd-mobile/lib/date-picker/style/css'; 
import 'antd-mobile/dist/antd-mobile.css';
import '../asert/Cinema.less';
const Item = Popover.Item;
  const data = [
	    {
	      value: '1',
	      label: 'Food',
	      children: [
	        {
	          label: 'American Foods',
	          value: '1',
	          disabled: false,
	        },
	        {
	          label: 'Chinese Food',
	          value: '2',
	        }, {
	          label: 'Hot Pot',
	          value: '3',
	        }, {
	          label: 'Buffet',
	          value: '4',
	        }, {
	          label: 'Fast Food',
	          value: '5',
	        }, {
	          label: 'Snack',
	          value: '6',
	        }, {
	          label: 'Bread',
	          value: '7',
	        }, {
	          label: 'Fruit',
	          value: '8',
	        }, {
	          label: 'Noodle',
	          value: '9',
	        }, {
	          label: 'Leisure Food',
	          value: '10',
	        }],
	    }, {
	      value: '2',
	      label: 'Supermarket',
	      children: [
	        {
	          label: 'All Supermarkets',
	          value: '1',
	        }, {
	          label: 'Supermarket',
	          value: '2',
	          disabled: true,
	        }, {
	          label: 'C-Store',
	          value: '3',
	        }, {
	          label: 'Personal Care',
	          value: '4',
	        }],
	    },
	    {
	      value: '3',
	      label: 'Extra',
	      isLeaf: true,
	      children: [
	        {
	          label: 'you can not see',
	          value: '1',
	        },
	      ],
	    },
	  ];
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
class Cinema extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = {wen: "11111", 
		      initData: '',
            show: false,};
	   
	    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
	    // this.handleClick = this.handleClick.bind(this);
	  };
	
  state = {
    visible: false,
    selected: '',
  };
  onSelect = (opt) => {
    // console.log(opt.props.value);
    this.setState({
      visible:true,
      selected: opt.props.value,
    });
  };
onChange = (value) => {
    console.log(value);
  }
  onOk = (value) => {
    console.log(value);
    this.onCancel();
  }
  onCancel = () => {
    this.setState({ show: false });
  }
  handleClick = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show,
    });
    // mock for async data loading
    if (!this.state.initData) {
      setTimeout(() => {
        this.setState({
          initData: data,
        });
      }, 500);
    }
  };
  onMaskClick = () => {
      this.setState({
        show: false,
      });
    };

  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };
  dianji(){
	  console.log("dianji")
	this.setState({
	 wen: "22222"
	});
	console.log(this.state.wen)
  };
 componentDidMount() {
    console.log(this.state.wen)
	
   };
   static getDerivedStateFromProps(nextProps, prevState) {
	   console.log(prevState)
       const {type} = nextProps;
       // 当传入的type发生变化的时候，更新state
       if (type !== prevState.type) {
           return {
               type,
           };
       }
       // 否则，对于state不进行任何操作
       return null;
   };
 
  render() {
	  const { initData, show } = this.state;
	   const menuEl = (
	        <Menu
	          className="multi-foo-menu"
	          data={initData}
	          value={['1', ['3', '4']]}
	          onChange={this.onChange}
	          onOk={this.onOk}
	          onCancel={this.onCancel}
	          height={document.documentElement.clientHeight * 0.6}
	          multiSelect
	        />
	      );
	      const loadingEl = (
	        <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
	          <ActivityIndicator size="large" />
	        </div>
	      );
    return (<div>
      <NavBar
        mode="light"
        rightContent={
          <Popover 
            overlayClassName="fortest"
            overlayStyle={{ color: 'red' }}
            visible={this.state.visible}
            overlay={[
              (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>),
              (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
              (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                <span style={{ marginRight: 5 }}>Help</span>
              </Item>),
            ]}
            align={{
              overflow: { adjustY: 0, adjustX: 0 },
              offset: [-10, 0],
            }}
            onVisibleChange={this.handleVisibleChange}
            onSelect={this.onSelect}
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
        NavBar
      </NavBar>
	  
	  
	  <WingBlank> 
	     
	  <div onClick={()=>{this.dianji()}} className="sub-title">点击</div></WingBlank>
	         <SearchBar placeholder="Search" maxLength={8} />
			 
	<div>		 
	   <div>
	          <NavBar
	            leftContent="Menu"
				
	            mode="light"
	            onLeftClick={this.handleClick}
	            className="multi-top-nav-bar"
	          >
	           
	          </NavBar>
			  
	        </div>
	        {show ? initData ? menuEl : loadingEl : null}
	        {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}	
	
	</div>		
	 	<div>天波</div>
    </div>);
  }
}


export default Cinema;