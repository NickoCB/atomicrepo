'use client';
import { Button, Card, Cart, CartMenu, CartModal, CartModalRef, Divider, Flex, Text } from "ui";
import React, { useRef, useState } from "react";
import { useItems } from "../../api/useItems";
import { useSizes } from "../../api/useSizes";
import { useToppings } from "../../api/useToppings";
import { CartEntryObject, CheckoutItemObject } from "app-types";
import isEqual from "lodash.isequal";

const Home = () => {
    const items = useItems()
    const sizes = useSizes()
    const toppings = useToppings()
    const modalRef = useRef<CartModalRef>({ open: () => { }, close: () => { } });

    const [selectedItems, setSelectedItems] = useState<Array<CartEntryObject>>([]);
    const [total, setTotal] = useState(0);
    const handleSubmit = (value: CheckoutItemObject) => {
        const index = selectedItems.findIndex((currentItem, index) => {
            return isEqual(currentItem.item, value)
        })
       
        let newSelectedItem;
        if (index === -1) {
            newSelectedItem=[...selectedItems, {
                item: value,
                count: 1
            }];
        } else {
            selectedItems[index].count++;
            newSelectedItem=[...selectedItems];
        }
        const newTotal = newSelectedItem.reduce((sum, value) => {
            if(items?.byId[value.item.itemId]?.price)
                return sum + ((items?.byId[value.item.itemId].price || 0) * value.count)
            return sum
        },0)
        setTotal(newTotal);
        setSelectedItems(newSelectedItem);


    }

    const openModal = (id?: string) => {
        modalRef.current?.open(id)
    }
    return (
        <>
            {JSON.stringify(selectedItems)}
            <CartModal
                toppings={toppings}
                sizes={sizes}
                onSubmit={handleSubmit}
                ref={modalRef}
            />
            <Flex minW="100vh" maxH="100vw">
                <CartMenu onClick={openModal} item={items} />
                <Cart total={total} selectedItems={selectedItems} items={items} sizes={sizes} toppings={toppings} />
                    
            </Flex>
        </>
    );
}

export default Home
