'use client';

import { useDisclosure } from "@chakra-ui/react";
import { CartModalStyled } from "./CartModal.style";
import { CartModalProps, CartModalRef } from "./CartModal.types";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Radio,
  RadioGroup,
  Stack,
  Text,
  CheckboxGroup,
  Checkbox
} from './../../atom/Chakra';
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Button } from "../../atom/Button";
import { CheckoutItemObject } from "app-types";



const CartModal = forwardRef<CartModalRef,CartModalProps>(({ onSubmit, toppings, sizes, ...props }, ref) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedSizes, setSelectedSize] = useState<string>('1')
  const itemRef = useRef<string>("");
  const [selectedToppings, setSelectedToppings] = useState<Array<string | number>>([])
  useImperativeHandle(ref, () => ({ open: handleOpen, close: onClose }));
  const handleToppingsChange = (value: Array<string | number>) => {
    setSelectedToppings(value);
  }
  const handleOpen = (id?: string) => {
    itemRef.current = id || "";
    onOpen();
  }
  const handleSubmit = () => {
    onSubmit && onSubmit({ selectedSizes, selectedToppings, itemId: itemRef.current } as CheckoutItemObject);
    setSelectedToppings([]);
    setSelectedSize('1');
    onClose();
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add to Basket</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Pizza Toppings</Text>
          <CheckboxGroup onChange={handleToppingsChange} colorScheme='green' defaultValue={[]}>
            <Stack spacing={[1, 5]} direction={['column', 'row']}>
              {toppings && toppings.allIds.map((id) => (
                <Checkbox key={id} value={id}>{toppings.byId[id].name}</Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
          <Text pt="24px">Pizza Size</Text>
          <RadioGroup onChange={setSelectedSize} value={selectedSizes}>
            <Stack direction='row'>
              {sizes && sizes.allIds.map((id) => (
                <Radio key={id} value={id}>{sizes.byId[id].name}</Radio>
              ))}
            </Stack>
          </RadioGroup>
        </ModalBody>

        <ModalFooter>
          <Button onClick={handleSubmit} text="Add" />
          <Button onClick={onClose} text="Close" />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
})

export default CartModal