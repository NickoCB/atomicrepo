import {ItemToppingsNormalized, ItemSizeNormalized, CheckoutItemObject} from 'app-types'
import { ReactNode } from 'react';
export type CartModalRef = {
    open: (id?:string) => void;
    close: () => void;
  };


export type CartModalProps = {
    toppings: ItemToppingsNormalized;
    sizes: ItemSizeNormalized;
    onSubmit?:(value:CheckoutItemObject) => void;
    children?: ReactNode
}

