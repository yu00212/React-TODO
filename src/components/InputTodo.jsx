import React from 'react';

export const InputTodo = (props) => {
    // propsで受け取った内容を使い易くするために分解変数に入れる
    const { todoText, onChange, onClick} = props;
    return (
        <div className="input-area">
            <input 
                placeholder="TODOを入力" 
                value={todoText} 
                onChange={onChange}
            />
            <button onClick={onClick}>追加</button>
        </div>
    );
};