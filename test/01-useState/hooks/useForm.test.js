import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { useForm } from "../../../src/hooks/useForm"

describe("useform", ()=>{
    const initialForm ={
        name: "Juan",
        email: "juanda@juanda.com"
    }

    test("debe regresar los valores por defecto", ()=>{
        const {result} = renderHook(()=> useForm(initialForm))
        expect(result.current).toEqual( {
        name: initialForm.name,
        email: initialForm.email,
        formState: initialForm,
        onInputChange: expect.any(Function),
        onHandleReset:  expect.any(Function),
        })
    })

    test("cambiar nombre del formulario", ()=>{
        const newValue ="JuanDa"
        const {result} = renderHook(()=> useForm(initialForm))
        const {onInputChange, formState} = result.current

        act(()=>{
            onInputChange({target: {name: "name", value: newValue}})
        })
        expect(result.current.name).toBe(newValue)
        expect(result.current.formState.name).toBe(newValue)

    })

    test("Resetear el formulario", ()=>{
        const newValue ="JuanDa"
        const {result} = renderHook(()=> useForm(initialForm))
        const {onInputChange, onHandleReset} = result.current

        act(()=>{
            onInputChange({target: {name: "name", value: newValue}})
            onHandleReset()
        })
        expect(result.current.name).toBe(initialForm.name)
        expect(result.current.email).toBe(initialForm.email)

    })
})