import React from 'react'
import { useParams } from 'react-router-dom'
export function Quizz() {
    const params = useParams()
    const mutipleForma = ` // question: 1 name: Grants tomb
  ::Grants tomb::Who is buried in Grant's tomb in New York City? {
  =Grant
  ~No one
  #Was true for 12 years, but Grant's remains were buried in the tomb in 1897
  ~Napoleon
  #He was buried in France
  ~Churchill
  #He was buried in England
  ~Mother Teresa
  #She was buried in India
  }`
    const multipleRight = `What two people are entombed in Grant's tomb? {
    ~%-100%No one
    ~%50%Grant
    ~%50%Grant's wife
    ~%-100%Grant's father
 }`
    const trueFalse = "::TrueStatement about Grant::Grant was buried in a tomb in New York City.{T}"
    const shortAnswer = "Two plus two equals {=four =4}"
    const matching = `Match the following countries with their corresponding capitals. {
    =Canada -> Ottawa
    =Italy  -> Rome
    =Japan  -> Tokyo
    =India  -> New Delhi
    }`
    const missingWord = `Mahatma Gandhi's birthday is an Indian holiday on  {
    ~15th
    ~3rd
    =2nd
    } of October.
    
    Since {
      ~495 AD
      =1066 AD
      ~1215 AD
      ~ 43 AD
    }
    the town of Hastings England has been "famous with visitors".`

    const numericalQuestion = `What is the value of pi (to 3 decimal places)? {#3.14159:0.0005}.`
    const numericalQuestions2 = `When was Ulysses S. Grant born? {#
    =1822:0
    =%50%1822:2
 }`
    const aiken = `What is the correct answer to this question?
A. Is it this one?
B. Maybe this answer?
C. Possibly this one?
D. Must be this one!
ANSWER: D`

    const lista = [aiken, aiken, aiken]
    const generateState = () => {
        return lista.map((q, ndx) => {
            return {
                question: q,
                answer: null,
                correct: q.split('\n')[q.split('\n').length - 1],
                id: ndx
            }
        }
        )
    }

    const [state, setState] = React.useState<any>(generateState())

    const updateState = (id: any, answer: any) => {
        setState([...state.map((q: any) => q.id == id ? { ...q, answer } : q)])
    }
    const correctas = () => state.filter((q: any) => q.answer == q.correct).length
    if (state.length == 0) {
        return <div>Loading...</div>
    }
    const modoHidden = false;
    return (
        <>
            {/* {JSON.stringify(state)} */}
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
                {!modoHidden && <div>Respuesas correctas : {correctas()}</div> }
            </div>
        </>
    )
}