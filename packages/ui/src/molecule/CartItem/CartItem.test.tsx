import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { CartItem } from '.'  
const handleClick = jest.fn()

const item = {
            id: "1",
            price: 12,
            name:'pizza 1',
            url: "https://as1.ftcdn.net/v2/jpg/05/60/99/66/1000_F_560996661_QW68Tqj480hkYulYivdMxKqXkiWh661v.jpg"
        }

const TestComponent = <CartItem onClick={handleClick} item={item}/>


describe('CartItem', () => {
    test('should render', () => {
        render(TestComponent)
    })
    test('should render with correct price', () => {
        render(TestComponent)
        expect(screen.getByText(`${item.price}PHP`)).toBeInTheDocument()
    })
    test('should render with correct name', () => {
        render(TestComponent)
        expect(screen.getByText(`${item.name}`)).toBeInTheDocument()
    })
    test('should render with correct image', () => {
        render(TestComponent)
        expect(screen.getByRole('img')).toBeInTheDocument()
    })
    test('should render with correct image url', () => {
        render(TestComponent)
        expect(screen.getByRole('img')).toHaveAttribute('src', item.url)
    })
    test('should render with correct image alt', () => {
        render(TestComponent)
        expect(screen.getByRole('img')).toHaveAttribute('alt', 'Hero Single')
    })
    test('should render with correct button text', async() => {
        await render(TestComponent)
        expect(screen.getByText('Choose')).toBeInTheDocument()
    })
    test('should render with correct button text', async () => {
      
        await render(TestComponent)
        await userEvent.click(screen.getByText('Choose'))
        expect(handleClick).toHaveBeenCalled()
    })
})