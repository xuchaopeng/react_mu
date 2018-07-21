export default (state = {"v":100},action) => {
	if(action.type == 'APP'){
		return {
			"v" : state.v + action.n
		}
	}else if(action.type == 'SHOP'){
		return {
			"v" : state.v + 1
		}
	}
	return state ; 
}