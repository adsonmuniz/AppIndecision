console.log('App executando...');

const appObject = {
    title: 'App Indecisão.',
    subtitle: 'Este é um aplicativo para tomar decisão!',
    options: []
}
let numberOption;
function getTitle(title)
{
    if(title) {
        return <h1>{title}</h1>;
    }
    else {
        return <h1>Some Title</h1>;
    }
}
// JSX - JavaScript XML

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        appObject.options.push(option);
        e.target.elements.option.value = '';
    }
    renderTemplate();
};

const onRemoveAll = () => {
    appObject.option = [];
    renderTemplate();
};

const onMakeDecision = () => {
    const randNumber = Math.floor(Math.random() * appObject.options.length);
    numberOption = randNumber;
    console.log(numberOption);
    renderTemplate();
};

const appRoot = document.getElementById('app');

const renderTemplate = () => {
    const template = 
    <div>
            {getTitle(appObject.title)}
            {appObject.subtitle ? <p>{appObject.subtitle}</p> :  null}
            <button disabled={appObject.options.length === 0} onClick={onMakeDecision}>O que eu posso fazer?</button>
            <form>
                <button onClick={onRemoveAll}>Remove All</button>
            </form>
            {(appObject.options && appObject.options.length > 0 && numberOption) &&
            <h2>{appObject.options[numberOption]}</h2>}
            {(appObject.options && appObject.options.length > 0) && 
                <ol>
                    {
                        appObject.options.map((op) => <li key={op}>{op}</li>)
                    }
                </ol>}
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" /> 
                <button>Add Option</button>
            </form>
        </div>;
    ReactDOM.render(template, appRoot);
};

renderTemplate();