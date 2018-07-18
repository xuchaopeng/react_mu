import React ,{Component} from 'react';
import classnames from 'classnames';
import Info from './info.js';
import './cityinfo.less';

class CityInfo extends Component{
	constructor(){
		super()
		this.state = {
			sheng:'江西省',
			shi:'南昌市',
			xian : '南昌县'
		}
	}
	render(){
		return(
				<div className="cityinfo">
					<p>
					 	<select value={this.state.sheng} onChange={(e)=>{
					 		//设置省
					 		this.setState({sheng:e.target.value});
					 		//设置省会城市
					 		this.setState({shi:Info.filter(item => item.name === e.target.value)[0].city[0].name})
					 	}}>
					 		{
					 		 	Info.map(item => {
					 		 		return (<option key={item.name} value={item.name}>{item.name}</option>)
					 		 	})
					 		}
					 	</select>
					 	<select value={this.state.shi} onChange={(e)=>{
					 		//设置市
					 		this.setState({shi:e.target.value})
					 	}}>
					 		{
					 			Info.filter(item => item.name === this.state.sheng)[0].city.map(item => {
					 				return <option key={item.name} value={item.name}>{item.name}</option>
					 			})
					 		}
					 	</select>
					 	<select value={this.state.xian} onChange={(e)=>{
					 		this.setState({xian:e.target.value})
					 	}}>
					 		{
					 			Info.filter(item => item.name === this.state.sheng)[0].city.filter(item => item.name === this.state.shi)[0].area.map(item => {
					 				return <option key={item} value={item}>{item}</option>
					 			})
					 		}
					 	</select>
				 	</p>
				</div>
			)
	}
}

export default CityInfo ;