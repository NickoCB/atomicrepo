import { CartItemNormalized } from "app-types";
import { ITEMS } from "./constants";

export const useItems = () => {
    return ITEMS as CartItemNormalized;
}


