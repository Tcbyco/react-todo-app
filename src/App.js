import React, { useState, useEffect, useRef } from 'react'
import './App.css'

import { Canvas, useFrame } from 'react-three-fiber'

import { JsonComponent } from './components/JsonComponent'
/* 
    Tasks:
    1. clear the input box after adding a todo
    2. Show todos in a nice fashion (Make itself a component)
    3. Add functionality to toggle todos done state
*/

function App() {
    const [todos, setTodos] = useState([
        {
            id: 'a',
            content: 'initi value',
            done: false,
        },
    ])
    const [inputValue, setInputValue] = useState('')

    const [state, setState] = useState({ foo: 'bar' })

    useEffect(() => {
        // Check local storage for todos and call setTodos
    }, [])

    function createTodo() {
        if (inputValue === '') {
            return
        }
        const id = `${Math.random() * 16}-id`
        const done = false
        const newTodo = {
            content: inputValue,
            id,
            done,
        }

        setState({
            ...state,
            foo: 'bingo',
        })

        setTodos([newTodo, ...todos])
    }

    // Some imperative using data from above shaping icely to use in output

    // let renderedTodos = []
    // for (let i = 0; i < todos.length; i++) {
    //     let renderedTodo = <JsonComponent json={todos[i]} />
    //     renderedTodos.push(renderedTodo)
    // }

    return (
        <div style={{ padding: '2rem' }}>
            <div>
                <h1>My Todos!</h1>
                <input
                    type="text"
                    onChange={(e) => {
                        const value = e.target.value
                        setInputValue(value)
                    }}
                    value={inputValue}
                ></input>
                <button onClick={createTodo}>Submit</button>
            </div>

            <div style={{ display: 'grid', gap: '1rem' }}>
                {todos.map((todo) => (
                    <JsonComponent key={todo.id} json={todo} />
                ))}
            </div>

            <div
                style={{
                    width: '400px',
                    height: '400px',
                    position: 'relative',
                }}
            >
                <Canvas>
                    <Cube />
                </Canvas>
            </div>
        </div>
    )
}

const Cube = () => {
    const ref = useRef()

    useFrame(() => {
        ref.current.rotation.x += 0.01
        ref.current.rotation.y += 0.01
    })

    return (
        <mesh ref={ref} rotation={[1, 1, 1]}>
            <boxBufferGeometry attach="geometry"></boxBufferGeometry>
            <meshNormalMaterial attach="material" />
        </mesh>
    )
}

export default App
