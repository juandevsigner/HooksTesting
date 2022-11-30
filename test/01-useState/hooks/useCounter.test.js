const { renderHook, act } = require("@testing-library/react")
const { useCounter } = require("../../../src/hooks/useCounter")

describe("Prueba en el hook",()=>{
    test("debe retornar los valores por defecto", ()=>{
        const {result} = renderHook(()=> useCounter())
        const {counter, decrement, increment, reset} = result.current
        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    })

    test("debe cambiar el counter con el valor de 100", ()=>{
        const {result} = renderHook(()=> useCounter(100))
        console.log(result, "result--------")
        const {counter} = result.current
        expect(counter).toBe(100)
    })

    test("debe incrementar, decrementar y resetear el contador", ()=>{
        const {result} = renderHook(()=> useCounter())
        const {decrement, increment, reset} = result.current

        act(()=>{
            decrement()
        })
        expect(result.current.counter).toBe(9)

        act(()=>{
            increment()
        })
        expect(result.current.counter).toBe(11)

         act(()=>{
            reset()
        })
        expect(result.current.counter).toBe(10)
    })



})