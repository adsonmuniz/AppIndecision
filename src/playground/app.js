class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleMakeDecision = this.handleMakeDecision.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: [],
            optionChoose: '',
        };
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
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    handleDeleteOptions() {
        this.setState (() => {
            return {
                options: [],
                optionChoose: ''
            }
        });
    }
    handleMakeDecision () {
        this.setState ((prevState) => {
            return {
                optionChoose: prevState.options[Math.floor(Math.random() * prevState.options.length)]
            }
        });
    }
    handleAddOption(option) {
        if (!option) {
            return 'Insira um valor válido';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Este opção já existe';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }
    render() {
        return (
            <div>
                <Header />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handleMakeDecision={this.handleMakeDecision}
                    optionChoose={this.state.optionChoose}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecisão',
    subTitle: 'Coloque sua vida nas mãos do computador.'
}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handleMakeDecision} disabled={!props.hasOptions}>
                O que quer fazer?
            </button>
            <h2>{props.optionChoose}</h2>
        </div>
    );
}


const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remover Tudo</button>
            {props.options.length === 0 && <h3>Por favor insira opções para iniciar!</h3>}
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
    );
}

const Option = (props) =>{
    return (
        <div>
            {props.option}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.option)
                }}
            >
                Remover
            </button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        e.target.elements.option.value = '';
        this.setState(() => ({ error }));
    }
    render() {
        return (
            <div>
                {this.state.error && <p key='error' style={{ color: 'red'}}>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input name="option" type="text" />
                    <button>Adicionar</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));