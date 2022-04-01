import axios from "axios";
import { ApiRoutes } from "../navigation/constant";

export function getUsers() {
    return axios.get(ApiRoutes.user.getAll);
}

