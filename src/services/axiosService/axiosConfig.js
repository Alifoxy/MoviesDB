import axios from "axios";

import {baseURL} from "../../configs/urls";

import {authService} from "../authService/authService";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();
const apiService = axios.create({baseURL});

apiService.interceptors.request.use((config) => {
    if (authService.isAuthenticated()) {
        config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjFmMmI3NDEyZTI4YTA4ZmYwMGRhMTk3ODc1YjQzMiIsInN1YiI6IjYzZWY2MTdlY2RkYmJjMDA4YzIwYjgwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gOeNaSJT0F9oN2v1paJGgct0ByZYRNMura43C_XS_ho`
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