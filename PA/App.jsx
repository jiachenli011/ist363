function App() {
    const handlechange = (event) => {
        console.log(event.target.value);
    }

    return (
        <div>
            <label htmlFor="search">Search:</label>
            <input type="text" id="search" name="search" onchange={handlechange} />
        </div>
    )
}

export default App