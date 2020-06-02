import vuex from './store'

export default new vuex.Store({
    state: {
        couter: 0
    },
    mutation: {
        addCounter(val) {
            state.counter = val
        }
    }
})