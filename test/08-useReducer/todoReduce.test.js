import { todoReducer } from "../../src/08-useReducer/todoReduce"

describe("REDUCER TEST", ()=>{

    const initialState=[{
        id: 1,
        description: "demo todo",
        done: false
    }]

    test("Retornar Initial State", ()=>{
        const newState = todoReducer(initialState, {})
        expect(newState).toBe(initialState)
    })

    test("agregar un todo", ()=>{

        const action ={
            type: "Add Todo",
            payload: {id: 1, description: "demo todo", done: false}
        }
        const newState = todoReducer(initialState, action)
        expect(newState.length).toBe(2)
        expect(newState).toContain(action.payload)
    })

    test("eliminar un todo", ()=>{

         const actionsDelete ={
            type:"Delete Todo",
            payload: 1
         }

         const newState2 = todoReducer(initialState, actionsDelete)
         expect(newState2.length).toBe(0)
    })

    test("realizar el toogle", ()=>{
        const action ={
            type: "Toggle Todo",
            payload: 1
        }
        const newState = todoReducer(initialState, action)
        expect(newState[0].done).toBeTruthy()

        const newState2 = todoReducer(newState, action)
        expect(newState2[0].done).toBeFalsy()

    })
})