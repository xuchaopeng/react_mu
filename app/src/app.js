import React,{Component} from 'react'; 
import Acction from './components/acction/Acction.js';
import Calendar from './components/calendar/calendar.js';
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
			<div>
				<h3>这是Acction</h3>
				<Acction />
				<h3>这是日你么么历组件</h3>
				<Calendar />
				<img src={imgstr} />
			</div>
		)
	}
} 

export default App;