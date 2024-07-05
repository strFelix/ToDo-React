import React from 'react'

const TodoForm = () => {
  return (
    <div>
        <h2>
            Criar Tarefa
        </h2>
        <form>
            <input type="text" placeholder='Digite o titulo: ' />
            <select>
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