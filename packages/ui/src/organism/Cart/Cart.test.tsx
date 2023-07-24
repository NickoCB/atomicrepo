
import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Cart from "./Cart";


export const ITEMS = {
    byId: {
        "1": {
            id: "1",
            price: 12,
            name:'pizza 1',
            url: "https://as1.ftcdn.net/v2/jpg/05/60/99/66/1000_F_560996661_QW68Tqj480hkYulYivdMxKqXkiWh661v.jpg"
        },
        "2": {
            id: "2",
            price: 33,
            name:'pizza 2',
            url: "https://as1.ftcdn.net/v2/jpg/05/60/99/66/1000_F_560996661_QW68Tqj480hkYulYivdMxKqXkiWh661v.jpg"
        }
    },
    allIds: [
        "1", "2",
    ]
}

export const TOPPINGS = {
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
};

export const SIZES = {
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
};

const SELECTED_ITEMS = [
    {"item":{"selectedSizes":"1","selectedToppings":["1"],"itemId":"1"},"count":2},
    {"item":{"selectedSizes":"2","selectedToppings":["1"],"itemId":"1"},"count":1},
    {"item":{"selectedSizes":"1","selectedToppings":["1","2"],"itemId":"2"},"count":1}
];



const TestComponent= <Cart total={0} items={ITEMS} sizes={SIZES} toppings={TOPPINGS} selectedItems={SELECTED_ITEMS} />

describe('Cart', () => {
    it('should render empty cart', () => {
        render(<Cart total={0} items={ITEMS} sizes={SIZES} toppings={TOPPINGS} selectedItems={[]} />);
        expect(screen.getByText('Cart is empty')).toBeInTheDocument();
    });

    it('should render cart items', async() => {
        await render(TestComponent);
        expect(screen.getAllByText('pizza 1').length).toBe(2);
        expect(screen.getByText('pizza 2')).toBeInTheDocument();
        expect(screen.getAllByText('toppings 1').length).toBe(3);
        expect(screen.getByText('toppings 2')).toBeInTheDocument();
        expect(screen.getAllByText('size 1').length).toBe(2);
        expect(screen.getByText('size 2')).toBeInTheDocument();
        expect(screen.getByText('2X')).toBeInTheDocument();
    });

    it('should render total', async () => {
        await render(TestComponent);
        expect(screen.getByText('Total:')).toBeInTheDocument();
        expect(screen.getByText('0PHP')).toBeInTheDocument();
    });
});