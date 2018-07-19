import React,{Component}from 'react';
import classnames from 'classnames';
import './index.less';

class Redux extends Component{
	constructor(){
		super();
		this.state = {
			a : 0
		}
	}
	render(){
		return (
				<div className="redux-cnt">
					<p className="btn"><button>按我</button></p>
					<p>状态机：{this.state.a}</p>
				</div>
			)
	}
}

export default Redux ;