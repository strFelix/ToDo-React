import React from 'react'
import { useState } from 'react'

const TodoForm = () => {
    const [value, setValue] = useState('')
    const [category, setCategory] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault() // prevent the default behavior of the form
        if(!value || !category) return // if the value or category is empty, return
        setValue('') // reset the value
        setCategory('') // reset the category
        console.log(value, category);
    }

  return (
    <div>
        <h2>
            Criar Tarefa
        </h2>
        <form onSubmit={handleSubmit}> 
            <input type="text" value={value} placeholder='Digite o titulo: ' onChange={(e) => setValue(e.target.value)}/>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            <button type="submit">Adicionar</button>
        </form>
    </div>
  )
}

export default TodoForm