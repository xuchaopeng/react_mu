import React,{Component}from 'react';
import classnames from 'classnames';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todo from '../../actions/shop.js';

import "./shop.less";
class Shop extends Component{
	constructor(){
		super()
	}
	render(){
		return (
			<div className="shop-cnt">
				<table>
					<tbody>
						{
							this.props.carts.map(item => {
								return <tr key={item.id}>
									<td>{item.id}</td>
									<td>{item.title}</td>
									<td>{item.price}</td>
									<td>
										<button onClick={()=>{this.props.todo.minustodo(item.id)}}>-</button>
										{item.number}
										<button onClick={()=>{this.props.todo.addtodo(item.id)}}>+</button>
									</td>
									<td>{item.number * item.price}</td>
									<td><button className="del" onClick={(e)=>{this.props.todo.deltodo(item.id)}}>删除</button></td>
								</tr>
							})
						}
					</tbody>
				</table>
				<h4>总价格：{this.props.carts.reduce((a,b)=>a+b.price*b.number,0)}</h4>
			</div>
		)
	}
}
export default connect(
	(state) => ({
		carts : state.Shop.carts
	}),
	(dispath) => ({
		todo : bindActionCreators(todo,dispath)
	})
)(Shop) ;