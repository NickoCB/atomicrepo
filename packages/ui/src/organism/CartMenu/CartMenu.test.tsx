
import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import CartMenu from "./CartMenu";


const handleClick = jest.fn()
const FirstComponent =  <CartMenu data-testid="CartMenu" item = {{
    byId: {
        "1": {
            id:"1",
            price:12,
            name:'pizza 1',
            url:"https://as1.ftcdn.net/v2/jpg/05/60/99/66/1000_F_560996661_QW68Tqj480hkYulYivdMxKqXkiWh661v.jpg"
        },
        "2": {
            id:"2",
            price:33,
            name:'pizza 2',
            url:"https://as1.ftcdn.net/v2/jpg/05/60/99/66/1000_F_560996661_QW68Tqj480hkYulYivdMxKqXkiWh661v.jpg"
        }
    }, 
    allIds: [
        "1","2",
    ]
}} onClick={handleClick}/>;




describe('CartMenu', () => {
    test('should render', () => {
        render(FirstComponent)
    })
 
    test('should render with correct price', () => {
        render(FirstComponent)
        expect(screen.getByText(`12PHP`)).toBeInTheDocument()
        expect(screen.getByText(`33PHP`)).toBeInTheDocument()
    })
    test('should render with correct name', () => {
        render(FirstComponent)
        expect(screen.getByText(`pizza 1`)).toBeInTheDocument()
        expect(screen.getByText(`pizza 2`)).toBeInTheDocument()
    })
    test('should render with correct image', () => {
        render(FirstComponent)
        expect(screen.getAllByRole('img')).toHaveLength(2)
    })
    test('should render with correct image url', () => {
        render(FirstComponent)
        expect(screen.getAllByRole('img')[0]).toHaveAttribute('src', "https://as1.ftcdn.net/v2/jpg/05/60/99/66/1000_F_560996661_QW68Tqj480hkYulYivdMxKqXkiWh661v.jpg")
        expect(screen.getAllByRole('img')[1]).toHaveAttribute('src', "https://as1.ftcdn.net/v2/jpg/05/60/99/66/1000_F_560996661_QW68Tqj480hkYulYivdMxKqXkiWh661v.jpg")
    })
    test('should render with correct image alt', async() => {
        await render(FirstComponent)
        expect(screen.getAllByRole('img')[0]).toHaveAttribute('alt', 'Hero Single')
        expect(screen.getAllByRole('img')[1]).toHaveAttribute('alt', 'Hero Single')
    })
    test('should render with correct button text', async() => {
        await render(FirstComponent)
        expect(screen.getAllByText('Choose')).toHaveLength(2)
    })
    test('should render with correct button text', async () => {
        await render(FirstComponent)
        await userEvent.click(screen.getAllByText('Choose')[0])
        expect(handleClick).toHaveBeenCalled()
    })
    test('should render with correct button text', async () => {
        await render(FirstComponent)
        await userEvent.click(screen.getAllByText('Choose')[1])
        expect(handleClick).toHaveBeenCalled()
    })  
    
});