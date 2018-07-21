import React,{Component} from 'react'; 
import {connect} from 'react-redux';
import Calendar from './components/calendar/calendar.js';
import Release from './components/release/release.js';
import Shop from './components/shop/shop.js';
import CityInfo from './components/cityInfo/cityInfo.js';
import Todo from './components/todo/index.js';
class App extends Component{
	constructor(){
		super()
		this.state = {
			a:1
		}
	}
	render(){
		return (
			<div style={{width:"1240px",height:"auto",margin:'10px auto'}}>
			 	<h3>这是最大的组件App，在这里你能管理很多状态！haha<button style={{width:'50px',height:'30px'}}>按我</button></h3>
			 	<p>{this.props.v}</p>
				<Calendar />
				<Release />
				<Shop />
				<CityInfo />
				<Todo />
			</div>
		)
	}
} 
export default connect(
	(state) => ({
		v : state.counterReducer.v
	}),
	(dispatch) => ({
		add(){
			dispatch({"type" : "APP"})
		}
	})
)(App);
