const morenzhi = {
	carts:[
		{"id":1,"title":"手机","price":5000,"number":2},
		{"id":2,"title":"空调","price":2700,"number":1},
		{"id":3,"title":"冰箱","price":3010,"number":1}
	]
}

export default (state = morenzhi , action) => {
	if(action.type == "DELTODO"){
		return {
			carts : state.carts.filter(item => item.id != action.id)
		}
	}else if(action.type == 'ADDTODO'){
		return {
			carts : state.carts.map(item => {
				if(item.id === action.id){
					item.number = item.number + 1;
				}
				return item;
			})
		}
	}else if(action.type == 'MINUSTODO'){
		return {
			carts : state.carts.map(item =>{
				if(item.id === action.id && item.number !== 0){
					item.number = item.number - 1;
				}
				return item;
			})
		}
	}
	return state ;
}
