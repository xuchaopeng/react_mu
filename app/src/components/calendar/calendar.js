import React,{Component} from 'react';
import classnames from 'classnames';
import './calendar.less';

class Calendar extends Component{
	constructor(){
		super()
	}
	render(){
		const cn = classnames({
			calendar : true,
			fz : true
		});

		return(
				<div className={cn}>这是一个日历组件</div>
			)
	}
}

export default Calendar ;
