'use client';
import React from "react";
import { Card, Divider, CardBody, Image, CardFooter, Text } from "./../../atom/Chakra"
import { Button } from "../../atom/Button";
import { CartItemProps } from "./CartItem.types";
import { CartItemStyled } from "./CartItem.style";

const CartItem = ({item, onClick, ...props }: CartItemProps) => {
    const {id,name, url, price}=item;
    const handleClick = () => {
        onClick && onClick();
    }
    return (
        <CartItemStyled {...props}>
            <Card width="sm">
                <CardBody>
                    <Image
                        src={url}
                        alt='Hero Single'
                        borderRadius='lg'
                        sizes="sm"
                    />
                    <Text>{name}</Text>
                    <Text color='blue.600' fontSize='sm'>
                        {price}PHP
                    </Text>

                </CardBody>
                <Divider />
                <CardFooter>

                    <Button onClick={handleClick} text="Choose" />
                </CardFooter>
            </Card>
        </CartItemStyled>
    );
}

export default CartItem
