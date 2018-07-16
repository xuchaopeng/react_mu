import React,{Component} from 'react'; 
import Acction from './components/acction/Acction.js';
import Calendar from './components/calendar/calendar.js';

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
				<h3>这是日历组件</h3>
				<Calendar />
			</div>
		)
	}
} 

export default App;