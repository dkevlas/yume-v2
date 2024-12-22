import React, { useReducer } from "react"
import ButtonEventComp from "../../components/others/ButtonEventComp"

interface FieldFormProps{
    children?: React.ReactNode
    name?: string,
    label?: string,
    type?: string
}

export function FormComp({
    children
}: FieldFormProps){
    return (
        <form>
            {children}
        </form>
    )
}

export function InputComp({
    name, label, type
}: FieldFormProps){
    return (
        <div>
            <label htmlFor={name}>
                {label}
            </label>
            <input id={name} type={type} />
        </div>
    )
}

export function TextareaComp({
    name, label
}: FieldFormProps){
    return (
        <div>
            <label htmlFor={name}>
                {label}
            </label>
            <textarea 
                id={name}
            />
        </div>
    )
}

type State = { count: number }
type Action = { type: "add" } | { type: "remove" }
const valueInitial: State = { count: 1}
const reducer = (state: State, action: Action): State => {
    console.log(state)
    console.log(action)
    return {count: 5}
}
export function FieldSetComp({
    name, label, children
}: FieldFormProps){
    const [ state, dispatch ] = useReducer<React.Reducer<State, Action>>(reducer, valueInitial)
    console.log(state)
    return (
        <div className="bg-gray-500">
            <fieldset id={name}>
                <legend>
                    {label}
                </legend>
                {children}
            </fieldset>
            <ButtonEventComp
                styles="relative top-0"
                    action="➕"
                    event={()=>{
                        console.log('Lisa')
                        dispatch({
                            type: "add"
                        })
                    }}
                    type="button"
            />
        </div>
    )
}