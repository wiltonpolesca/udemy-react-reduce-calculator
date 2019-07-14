import React from 'react';
import './Button.css';

export default props => {

    let clazz = 'button ';
    clazz += props.operation ? 'operation' : '';
    clazz += props.double ? 'double' : '';
    clazz += props.triple ? 'triple' : '';

    return (

        //click é uma função esperada dentro de props e vai retornar de callback o conteúdo do botão.
        <button
            onClick={e => props.click && props.click(props.label)}
            className={clazz}>
            {props.label}
        </button>
    );
}
