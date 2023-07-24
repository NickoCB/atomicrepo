import { CartEntryObject, CartItemNormalized, ItemSizeNormalized, ItemToppingsNormalized } from "app-types";

export type CartProps = {
  selectedItems: Array<CartEntryObject>,
  items: CartItemNormalized,
  toppings: ItemToppingsNormalized,
  sizes: ItemSizeNormalized,
  total:number
}