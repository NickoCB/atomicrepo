import {NormalizedObject} from './util.types'

export type CartItemObject={
    id:string
    name:string,
    url?:string,
    price?:number
}



export type TopingsObject={
    id:string;
    name:string;
};

export type SizeObject={
    id:string;
    name:string;
};


export type CheckoutItemObject = {
    selectedSizes:string
    selectedToppings:Array<string|number>
    itemId:string
}

export type CartEntryObject = {
    item:CheckoutItemObject,
    count:number
}




export type CartItemNormalized = NormalizedObject<CartItemObject>
export type ItemToppingsNormalized = NormalizedObject<TopingsObject>
export type ItemSizeNormalized = NormalizedObject<SizeObject>
