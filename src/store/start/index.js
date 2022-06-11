export default {
    state: {
        test: 'start',
        dialogIsOpened: true,
    },
    getters: {
        test(state){
            return state.test;
        },
        dialogIsOpened(state) {
            return state.dialogIsOpened;
        }
    },
    mutations: {
        openDialog(state, person){
            serverPassword = process.env.VUE_APP_PASSWORD
            serverEmail = process.env.VUE_APP_EMAIL
            if(serverPassword === person.password && serverEmail === person.email){
                state.dialogIsOpened = false;
            } else {
                state.dialogIsOpened = true;
            }
        }
    },
    actions: {
        openDialog(context, person){
            context.commit('openDialog', person)
        }
    },
}