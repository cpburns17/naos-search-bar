import React, {useState, useEffect} from "react"
import {Outlet} from "react-router-dom"

function App() {
    const [songs, setSongs] = useState()
    const [images, setImages] = useState()
    const [search, setSearch] = useState()
    const [results, setResults] = useState()



return (
    <div classname='main'>
        <Outlet context={{songs, setSongs, images, setImages, results, setResults}}/>
    </div>
)

}

export default App;
