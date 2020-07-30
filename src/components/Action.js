import React from 'react';

const Action = (props) => (
    <div>
        <button
            className="big-button"
            onClick={props.handleMakeDecision}
            disabled={!props.hasOptions}
        >
            O que quer fazer?
        </button>
    </div>
);

export default Action;