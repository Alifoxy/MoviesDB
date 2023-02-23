import axios from "axios";

import {baseURL} from "../../configs/urls";

import {authService} from "../authService/authService";

import {createBrowserHistory} from "history";

const history = createBrowserHistory();
const apiService = axios.create({baseURL});

apiService.interceptors.request.use((config) => {
    if (authService.isAuthenticated()) {
        config.headers.Authorization = `Bearer`
    }
    return config
})

let isRefreshing = false
apiService.interceptors.response.use((config) => {
        return config
    },
    async (error) => {
        const refresh = authService.getRefreshToken();

        if (error.response?.status === 401 && refresh && !isRefreshing){
            isRefreshing = true

            try {
                await authService.refresh(refresh);
            }catch (e) {
                authService.deleteTokens()
                history.replace('/login?expSession=true')
            }
            isRefreshing = false;
            return apiService(error.config)
        }
        return Promise.reject(error)
    }
)

export {
    apiService,
    history
}