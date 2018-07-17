import React,{Component} from 'react';
import classnames from 'classnames';
import './release.less';

class Release extends Component{
	constructor(props){
		super(props);
		this.state = {
			content:''
		}
	}
	render(){
		const content = this.state.content;
		const length = content.length;
		return (
			<div className="release-cnt">
				<textarea cols="30" rows="10" value={content} onChange={(e)=>{
					this.setState({content:e.target.value})
				}}></textarea>
				<p>
					<span className={classnames({"danger":length > 200})}>{length}/200字</span>
					<button disabled={length > 200 || length === 0}>发布</button>
					<button disabled={length === 0} onClick={(e)=>{
						this.setState({content:""})
					}}>清空</button>
				</p>
			</div>
		)
	}
}

export default Release ; 