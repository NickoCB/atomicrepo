'use client';

import { Box, Flex } from "@chakra-ui/react";
import { CartItem } from "../../molecule/CartItem";
import { CartMenuStyled } from "./CartMenu.style";
import { CartMenuProps } from "./CartMenu.types";

const CartMenu = ({ onClick,item, ...props }: CartMenuProps) => {
    return (
        <CartMenuStyled {...props}>
            {item && item.allIds.map((id) => (
                <CartItem onClick={()=>(onClick && onClick(id))} key={id} item={item.byId[id]}  />
            ))}
        </CartMenuStyled>
    );
}

export default CartMenu
