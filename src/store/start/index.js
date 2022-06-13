export default {
    state: {
        test: 'start',
        dialogIsOpened: true,
        localbase : {}
    },
    getters: {
        test(state){
            return state.test;
        },
        dialogIsOpened(state) {
            return state.dialogIsOpened;
        },
        localbase(state) {
            return state.localbase;
        }
    },
    mutations: {
        openDialog(state, person){
            
            const serverPassword = process.env.VUE_APP_PASSWORD
            const serverEmail = process.env.VUE_APP_EMAIL

            if(serverPassword === person.password && serverEmail === person.email){
                state.dialogIsOpened = false;
            } else {
                state.dialogIsOpened = true;
            }
        },
        setLocalbase(state, localbase){
            state.localbase = localbase
        }
    },
    actions: {
        openDialog(context, person){
            context.commit('openDialog', person)
        },
        setLocalbase(context, localbase){
            context.commit('setLocalbase', localbase)
        }
    },
}