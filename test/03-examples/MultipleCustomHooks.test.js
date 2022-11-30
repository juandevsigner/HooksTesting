import { renderHook, render, screen, fireEvent } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useCounter } from "../../src/hooks/useCounter"
import { useFecth } from "../../src/hooks/useFecth"

jest.mock('../../src/hooks/useFecth')
jest.mock('../../src/hooks/useCounter')

describe("Pruebas multiples hooks", ()=>{
    const mockIncrement = jest.fn()

    useCounter.mockReturnValue({
           counter: 1,
           increment: mockIncrement,
    })

    beforeEach(()=>{
        jest.clearAllMocks()
    })

    test("debe de mostrar el componente por default", ()=>{

        useFecth.mockReturnValue({
            data: null,
        isLoading: true,
        hasError: null,
        })
       render(<MultipleCustomHooks />)
       expect(screen.getByText("Breaking Quotes"))
       expect(screen.getByText("Loading..."))
       const nextButton = screen.getByRole("button", {name: "next quote"})
       expect(nextButton.disabled).toBeTruthy()

    })
    test("debe de mostrar un Quote", ()=>{
        useFecth.mockReturnValue({
        data: [{author:"JuanDa", quote:"Holi"}],
        isLoading:false,
        hasError: null,
        })
        render(<MultipleCustomHooks />)
        expect(screen.getByText("Holi")).toBeTruthy()
        const nextButton = screen.getByRole("button", {name: "next quote"})
        expect(nextButton.disabled).toBeFalsy()

    })
    test("debe llamar la fn de incrementar", ()=>{
        useFecth.mockReturnValue({
        data: [{author:"JuanDa", quote:"Holi"}],
        isLoading:false,
        hasError: null,
        })

        render(<MultipleCustomHooks />)
        const nextButton = screen.getByRole("button", {name: "next quote"})
        fireEvent.click(nextButton)
        expect(mockIncrement).toHaveBeenCalled()
    })
})