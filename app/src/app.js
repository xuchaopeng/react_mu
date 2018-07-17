import React,{Component} from 'react'; 
import Acction from './components/acction/Acction.js';
import Calendar from './components/calendar/calendar.js';
import Release from './components/release/release.js';
import Shop from './components/shop/shop.js';
import imgstr from './images/hali_07.png';


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
				<Acction />
				<Calendar />
				<Release />
				<Shop />
			</div>
		)
	}
} 

export default App;