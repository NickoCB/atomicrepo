'use client';

import { CartEntryObject } from 'app-types';
import { Card, Divider, Flex, Text } from '../../atom/Chakra'
import { CartStyled } from "./Cart.style";
import { CartProps } from './Cart.types';





const Cart = ({ selectedItems, items, toppings, total, sizes, ...props }:CartProps) => {
  return (
    <CartStyled {...props}>
      <Flex direction="column" >
        {selectedItems.length === 0 && <Text>Cart is empty</Text>}
        {selectedItems.map((value: CartEntryObject,index) => (
          <Card key={`card-${index}`}  width={300} mb={4} p={8} >
            <Flex direction="column">
              <Flex m={0} direction="row">
                <Text margin="4">{value.count}X</Text>
                <Text margin="4" fontWeight="bold">{items?.byId[value.item.itemId]?.name}</Text>
                <Text margin="4" fontWeight="semibold">{items?.byId[value.item.itemId]?.price}PHP</Text>
              </Flex>
              <Flex m={0} p={0}  direction="column">
                <Text fontWeight="light">Toppings:</Text>
                {value.item.selectedToppings.map((toppingId) => (
                  <Text key={`toping-${toppingId}`} ml="64px" fontWeight="hairline">{toppings?.byId[toppingId]?.name}</Text>
                ))}
              </Flex>
              <Flex m={0} p={0} direction="column">
                <Text fontWeight="light">Size:</Text>
                <Text ml="64px" fontWeight="hairline">{sizes?.byId[value.item.selectedSizes]?.name}</Text>
              </Flex>

            </Flex>
          </Card>
        ))}

        <Divider />
        <Flex m={0} direction="row">
                <Text margin="4"  fontWeight="bold">Total:</Text>
                <Text margin="4" fontWeight="semibold">{`${total}PHP`}</Text>
        </Flex>
      </Flex>
    </CartStyled>
  );
}

export default Cart
