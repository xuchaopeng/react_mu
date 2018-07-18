import React,{Component}from 'react';
import classnames from 'classnames';
import "./shop.less";
class Shop extends Component{
	constructor(){
		super()
		this.state = {
			carts:[
				{"id":1,"title":"手机","price":5000,"number":2},
				{"id":2,"title":"空调","price":2700,"number":1},
				{"id":3,"title":"冰箱","price":3010,"number":1}
			]
		}
	}
	delItem(id){
		this.setState({
			carts:this.state.carts.filter(item => item.id != id)
		})
	}
	addItem(id){
		this.setState({
			carts: this.state.carts.map(item =>{
				if(item.id === id){
					item.number = item.number + 1;
				}
				return item;
			})
		})
	}
	minusItem(id){
		this.setState({
			carts: this.state.carts.map(item =>{
				if(item.id === id && item.number !== 0){
					item.number = item.number - 1;
				}
				return item;
			})
		})
	}
	render(){
		return (
			<div className="shop-cnt">
				<table>
					<tbody>
						{
							this.state.carts.map(item => {
								return <tr key={item.id}>
									<td>{item.id}</td>
									<td>{item.title}</td>
									<td>{item.price}</td>
									<td>
										<button onClick={()=>{this.minusItem(item.id)}}>-</button>
										{item.number}
										<button onClick={()=>{this.addItem(item.id)}}>+</button>
									</td>
									<td>{item.number * item.price}</td>
									<td><button className="del" onClick={(e)=>{this.delItem(item.id)}}>删除</button></td>
								</tr>
							})
						}
					</tbody>
				</table>
				<h4>总价格：{this.state.carts.reduce((a,b)=>a+b.price*b.number,0)}</h4>
			</div>
		)
	}
}
export default Shop ;