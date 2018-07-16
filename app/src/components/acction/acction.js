import React,{ Component } from 'react';
import classnames from 'classnames';
import './acction.css';

class Acction extends Component{
	constructor(){
		super();
		this.state = {
			s : true
		}
	}
	changestate(){
		this.setState({s:!this.state.s})
	}
	render(){
		return (
			<div className="action_cnt">
				<h1 className={classnames({hide:this.state.s})}>我总想干点什么</h1>
				<button onClick={this.changestate.bind(this)}></button>
			</div>
		)
	}
}
export default Acction ;