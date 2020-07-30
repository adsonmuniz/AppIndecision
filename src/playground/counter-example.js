/* let count = 0;
const id1 = "btnAdd";
const id2 = "btnMinus";
const id3 = "btnReset";

const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const resetCount = () => {
    count = 0;
    renderCounterApp();
};

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button id={id1} onClick={addOne} className="button" style={{ margin: "10px"}}>+1</button>
            <button id={id2} onClick={minusOne} className="button" style={{ margin: "10px"}}>-1</button>
            <button id={id3} onClick={resetCount} className="button" style={{ margin: "15px"}}>Reset</button>
        </div>
    );
    
    //const appRoot = document.getElementById('app');
    
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp(); */

console.log('executando Counter App...');

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    handleAddOne() {
        this.setState ((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }
    handleMinusOne() {
        this.setState ((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }
    handleReset() {
        this.setState (() => {
            return {
                count: 0
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));