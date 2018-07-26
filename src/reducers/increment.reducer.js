import initialState from './initialState'

export default function update(state = initialState, action) {
    console.log(state.value)
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + 1
            }
        default:
            return state
    }
}