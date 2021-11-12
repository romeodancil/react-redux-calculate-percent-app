import {CACULATE, REMOVE} from '../actions/types'

export default function(state = [], action) {
	switch(action.type) {
		case CACULATE:
			return action.payload
		case REMOVE:
			return action.payload
		default:
			return state
	}
}
