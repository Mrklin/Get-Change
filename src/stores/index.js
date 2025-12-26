
import Vuex from 'vuex';
import router from '@/router';


const TOKEN_KEY = 'auth_token';

export default new Vuex.Store({

    state: {
        token: localStorage.getItem(TOKEN_KEY) || null,
        user: null,
    },

    getters: {
        isAuthenticated: state => !!state.token,
        getUser: state => state.token,
    },

    mutations: {
        SET_AUTH_DATA(state, { token, user = null }) {
            state.token = token;
            state.user = user;
            localStorage.setItem(TOKEN_KEY, token);
        },
        

        LOGOUT(state){
            state.token = null;
            state.user = null;

            localStorage.removeItem(TOKEN_KEY);
        }
        
    },

    actions:{

        loginSuccess({commit}, token){

            commit('SET_AUTH_DATA', {token})
        },

        logout({commit}){
            commit('LOGOUT');

            if (router.currentRoute.path !== '/signIn') {
                router.replace({name: 'signIn'})
            }
        }
    }
});