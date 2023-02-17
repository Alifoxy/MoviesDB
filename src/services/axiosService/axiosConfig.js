import axios from "axios";

import {baseURL} from "../../configs/urls";

export const axiosRequest = axios.create({baseURL})