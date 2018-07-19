import React,{Component} from 'react'; 
import Acction from './components/acction/Acction.js';
import Calendar from './components/calendar/calendar.js';
import Release from './components/release/release.js';
import Shop from './components/shop/shop.js';
import CityInfo from './components/cityInfo/cityInfo.js';
import Todo from './components/todo/index.js';
import Redux from './components/redux/index.js';


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
				<Calendar />
				<Release />
				<Shop />
				<CityInfo />
				<Todo />
				<Redux />
			</div>
		)
	}
} 

export default App;