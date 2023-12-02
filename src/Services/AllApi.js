import { commonAPI } from "./CommonApi";
import { serverURL } from "./ServerUrl";


export const getAllProductsApi = async () => {
    return await commonAPI("GET", `${serverURL}/products`, "");
  };