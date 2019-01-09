
export const LOGIN_SUC = 'LOGIN_SUC';
export const SHOW_LOGIN = 'SHOW_LOGIN';
export const CLOSE_LOGIN = 'CLOSE_LOGIN';
export const EXIT_LOGIN = 'EXIT_LOGIN';

export default {
    state:{
        msg:'',
        mobile: '',
        password: '',
        isShowLogin: false,
        isHaveMobile: false,
    },
    getters: {
        // getMsg(state){
        //     return state.msg;
        // }
    },
    mutations:{
        [LOGIN_SUC](state,loginInfo){
            state.mobile = loginInfo.mobile;
            state.password = loginInfo.password;
        },
        [SHOW_LOGIN](state,flag){
            state.isShowLogin = flag;
        },
        [CLOSE_LOGIN](state,flag){
            state.isShowLogin = flag;
        },
        [EXIT_LOGIN](state,loginInfo){
            state.mobile = loginInfo.mobile;
            state.password = loginInfo.password;
        }
    },
    actions: {
        addMyInfo({ commit } , loginInfo){
            commit(LOGIN_SUC , loginInfo)
        },
        showLogin({ commit } , flag){
            commit(SHOW_LOGIN , flag)
        },
        closeLogin({ commit } , flag){
            commit(CLOSE_LOGIN , flag)
        },
        exitLogin({ commit } , loginInfo){
            commit(EXIT_LOGIN , loginInfo)
        },
    },
}