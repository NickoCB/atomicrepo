
import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import CartModal from "./CartModal";
import React from 'react';
import { CartModalRef } from './CartModal.types';

const ref = React.createRef<CartModalRef>();
const TestComponent = <CartModal
    toppings={{
        byId: {
            "1": {
                id: "1",
                name: "toppings 1",
            },
            "2": {
                id: "2",
                name: "toppings 2",
            }
        },
        allIds: [
            "1", "2",
        ]
    }}
    sizes={{
        byId: {
            "1": {
                id: "1",
                name: "size 1",
            },
            "2": {
                id: "2",
                name: "size 2",
            }
        },
        allIds: [
            "1", "2",
        ]
    }}
    ref={ref}
/>
describe('CartModal', () => {
    it('should open the modal when the open method is called', async () => {
        await render(TestComponent);
        await act(() => {
            ref.current?.open();
        })
        expect(screen.getByText('Add to Basket')).toBeInTheDocument();
    });
    it('should close the modal when the close method is called', async () => {
        await render(TestComponent);
        await act(() => {
            ref.current?.close();
        })
        expect(screen.queryByText('Add to Basket')).not.toBeInTheDocument();
    });
    it('should render toppings and sizes', async () => {
        await render(TestComponent);
        await act(() => {
            ref.current?.open();
        })
        expect(screen.getByText('Pizza Toppings')).toBeInTheDocument();
        expect(screen.getByText('Pizza Size')).toBeInTheDocument();
    });
    it('should render toppings and sizes', async () => {
        await render(TestComponent);
        await act(() => {
            ref.current?.open();
        })
        expect(screen.getByText('Pizza Toppings')).toBeInTheDocument();
        expect(screen.getByText('Pizza Size')).toBeInTheDocument();
    });
    it('should render toppings and sizes', async () => {
        await render(TestComponent);
        await act(() => {
            ref.current?.open();
        })
        expect(screen.getByText('Pizza Toppings')).toBeInTheDocument();
        expect(screen.getByText('Pizza Size')).toBeInTheDocument();
    });
    it('should render toppings and sizes', async () => {
        await render(TestComponent);
        await act(() => {
            ref.current?.open();
        })
        expect(screen.getByText('Pizza Toppings')).toBeInTheDocument();
        expect(screen.getByText('Pizza Size')).toBeInTheDocument();
    });
    it('should render toppings and sizes', async () => {
        await render(TestComponent);
        await act(() => {
            ref.current?.open();
        })
        expect(screen.getByText('Pizza Toppings')).toBeInTheDocument();
        expect(screen.getByText('Pizza Size')).toBeInTheDocument();
    });
    it('should render toppings and sizes', async () => {
        await render(TestComponent);
        await act(() => {
            ref.current?.open();
        })
        expect(screen.getByText('Pizza Toppings')).toBeInTheDocument();
        expect(screen.getByText('Pizza Size')).toBeInTheDocument();
    });
    it('should render toppings and sizes', async () => {
        await render(TestComponent);
        await act(() => {
            ref.current?.open();
        })
        expect(screen.getByText('Pizza Toppings')).toBeInTheDocument();
        expect(screen.getByText('Pizza Size')).toBeInTheDocument();
    })
})
