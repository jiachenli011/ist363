const  Hello2 = () => {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
}
const Hello3 = () => { <div><h1>Hello 3</h1></div>}


function App() {
    return (
        <div>
            <h1>Hello World</h1>
            <Hello2 />
            <Hello3 />
        </div>
    )
}

export default App