import { CartItemNormalized } from "app-types";

export type CartMenuProps = {
    item:CartItemNormalized;
    onClick?:(id?:string)=>void;
};