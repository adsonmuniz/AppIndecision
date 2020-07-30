console.log('App executando...');

class ToggleVisibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleShowVisibility = this.handleShowVisibility.bind(this);
        this.state = {
            showDetails: false
        }
    }

    handleShowVisibility() {
        this.setState ((prevState) => {
            return {
                showDetails: !prevState.showDetails
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleShowVisibility}>{this.state.showDetails ? 'Hide Details' : 'Show Details'}</button>
                {this.state.showDetails ? <p>Opa. Aqui estão descritos os detalhes!</p> : ''}
            </div>
        );
    }

}

ReactDOM.render(<ToggleVisibility />, document.getElementById('app'));
/* const appRoot = document.getElementById('app');
let showDetails = false;
const details = 'Opa. Aqui estão descritos os detalhes!';

const onShowHideDetails = () => {
    showDetails = !showDetails;
    renderTemplate();
};

const renderTemplate = () => {
    const template = <div>
        <h1>Visibility Toggle</h1>
        <button onClick={onShowHideDetails}>
            { !showDetails ? 'Show Details' : 'Hide Details' }
        </button>
        {showDetails ?
            <p>{details}</p>
            : null
        }
    </div>;
    ReactDOM.render(template, appRoot);
};

renderTemplate(); */