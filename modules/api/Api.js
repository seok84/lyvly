class Api {
    constructor(context) {
        this.$axios = context.$axios;
        this.store = context.store
        this.isLogin = context.store.$auth.loggedIn;
    }

    getAuthHeader() {
        return {
            'Authorization': this.store.$auth.strategy.token.get(),
            'SALESONID': this.store.getters.get["salesonId"]
        };
    }

    getRequestOptions(params) {
        let requestOptions = {};

        if (params !== 'undefined') {
            requestOptions.params = params;
        }

        if (this.isLogin) {
            requestOptions.headers = this.getAuthHeader();
        }

        return requestOptions;
    }

    get(url, params) {
        return this.$axios.get(url, this.getRequestOptions(params));
    }

    post(url, params) {
        return this.$axios.post(url, params, this.getRequestOptions());
    }

    downloadFile(url,params,type) {

        const option = this.getRequestOptions(url, this.getRequestOptions(params));

        if (typeof type !== undefined) {
            option['responseType'] = type;
        }

        return this.$axios.get(url, option);
    }
}

export default Api;