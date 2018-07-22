export default (state = {"content":""},action) => {
	if(action.type == 'SHOP'){
		return {
			"content" : state.v + action.n
		}
	}
	return state ; 
}