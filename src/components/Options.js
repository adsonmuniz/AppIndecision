import React from 'react';
import Option from './Option';
 
const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Suas Opções</h3>
            <button
                className="button button--link"
                onClick={props.handleDeleteOptions}>Remover Tudo</button
            >
            
        </div>
        <div>
            {props.options.length === 0 &&
            <p className="widget-option">Por favor insira opções para iniciar!</p>}
        </div>
        <div>
            <ol>
                {
                    props.options.map((opt) => (
                        <li key={opt}>
                            <Option 
                                option={opt} 
                                handleDeleteOption={props.handleDeleteOption}
                                />
                        </li>
                    ))
                }
            </ol>
        </div>
    </div>
);
export default Options;