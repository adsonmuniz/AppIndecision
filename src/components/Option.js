import React from 'react';

 const Option = (props) =>(
    <div className="option">
        {props.option}
        <button
            className="button button--link"
            onClick={(e) => {
                props.handleDeleteOption(props.option)
            }}
        >
            Remover
        </button>
    </div>
);

export default Option;