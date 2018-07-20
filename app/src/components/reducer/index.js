export default (state = {"v":100},action) => {
	if(action.type == 'ADD'){
		return {
			"v" : state.v + action.n
		}
	}else if(action.type == 'MIN'){
		return {
			"v" : state.v + 1
		}
	}
	return state ; 
}