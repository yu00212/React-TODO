import React from 'react';

export const Completetodos = (props) => {
    const { todos, onClickBack } = props;
    return (
        <div className="complate-area">
            <p className="title">完了のTODO</p>
            <ul>
            {todos.map(() => {
                return (
                <div key={todo} className="list-row">
                    <li>{todo}</li>
                    <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
                );
            })}
            </ul>
        </div>
    );
};