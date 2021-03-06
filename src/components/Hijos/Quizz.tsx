import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
export function Quizz() {
    const params = useParams()

    const generateState = (lista: any) => {
        return lista.map((q: any, ndx: any) => {
            return {
                question: q,
                answer: null,
                correct: q.split('\n')[q.split('\n').length - 1],
                id: ndx
            }
        }
        )
    }

    const [state, setState] = React.useState<any>()
    useEffect(() => {
        fetch('/' + params.name + '.txt').then(response => response.text()).then(text => {
            console.log(text.split("\r\n\r\n"))
            setState(generateState(text.split("\r\n\r\n").filter(i => i !== '')))
        })
    }, [params.name])

    const updateState = (id: any, answer: any) => {
        setState([...state.map((q: any) => q.id == id ? { ...q, answer } : q)])
    }
    const correctas = () => state.filter((q: any) => q.answer == q.correct).length
    if (!state) {
        return <div>Loading...</div>
    }
    const modoHidden = false;
    return (
        <>
         
            <div>
                <h1 className='text-2xl mb-2'>{params.name} quizz, {state.length} preguntas</h1>
                {
                    state.map((q: any, indice: number) =>
                        <div key={indice} className='my-4'>
                            <div className='text-xl mb-1'>Question {indice + 1}</div>
                            {q.answer && !modoHidden ? q.answer == q.correct ? <div className='text-green-500'>Correct</div> : <div className='text-red-500'>Incorrect</div> : null}
                            {q.question.split('\n').filter((i: any) => !i.substring(0).startsWith("ANSWER")).map((line: any, index: number) => {
                                return <div className="" key={index}>
                                    {line.substring(1, 2) == '.' ? <input name={"" + indice} className='mr-3' type="radio" onClick={() => updateState(indice, `ANSWER: ${line.substring(0, 1)}`)}></input> : null}
                                    {line}
                                </div>
                            })}
                        </div>
                    )
                }
                <button className='text-md border rounded-lg p-2  bg-indigo-200 hover:bg-indigo-400'>ENVIAR</button>
                {!modoHidden && <div>Respuesas correctas : {correctas()}</div>}
            </div>
        </>
    )
}