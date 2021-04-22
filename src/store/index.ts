import { createStore } from 'vuex';

const defaultState = {
    count: 0
};

export default createStore({
    state() {
        return defaultState;
    },
    mutations: {
        increment(state: typeof defaultState) {
            const st = state;
            st.count += 1;
        }
    },
    actions: {
        increment(context) {
            context.commit('increment');
        }
    },
    getters: {
        double(state: typeof defaultState) {
            return state.count * 2;
        }
    }
});
