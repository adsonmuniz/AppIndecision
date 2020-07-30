import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        optionChoose: undefined
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };
    handleDeleteOptions = () => {
        this.setState (() => {
            return {
                options: [],
                optionChoose: ''
            }
        });
    };
    handleMakeDecision = () => {
        this.setState ((prevState) => {
            return {
                optionChoose: prevState.options[Math.floor(Math.random() * prevState.options.length)]
            }
        });
    };
    handleAddOption = (option) => {
        if (!option) {
            return 'Insira um valor válido';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Este opção já existe';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    };
    handleClearSelectedOption = () => {
        this.setState (() => ({ optionChoose: undefined }));
    }
    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) { }
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    render() {
        return (
            <div>
                {
                    <Header />
                }
                <div className="container">
                    {
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handleMakeDecision={this.handleMakeDecision}
                    />
                    }
                    <div className="widget">
                        {
                            <Options
                                options={this.state.options}
                                handleDeleteOptions={this.handleDeleteOptions}
                                handleDeleteOption={this.handleDeleteOption}
                            />
                        }
                        {
                            <AddOption
                                handleAddOption={this.handleAddOption}
                            />
                        }
                    </div>
                </div>
                {
                    <OptionModal
                        selectedOption={this.state.optionChoose}
                        handleClearSelectedOption={this.handleClearSelectedOption}
                    />
                }
            </div>
        );
    }
}