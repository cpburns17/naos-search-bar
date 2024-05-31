import React, {useState, useEffect} from "react"
import {useOutletContext} from 'react-router-dom'



function SearchBar() {

    const {songs, setSongs, images, setImages, results, setResults} = useOutletContext()

    useEffect(() => {
        fetch(`https://api.deezer.com/search?q=${search}`)
        .then(res => res.json())
        .then(data => {
            setSongs(data)
        })
        .catch((error) => {
            console.error('Query not found', error);
        });
    })

    function handleSearch(e) {
        setSongs(e.target.value)
        setImages(e.target.value)
    }

    const filteredSongs = songs.filter(song => song.title)
    const listOfSongs = filteredSongs.map((song) => {
        return(
            <div classname='song-results' onClick={() => handleClick(song)}> </div>
        )
    })
    


return(
    <div classname='search-container'>
        
        <input 
        onChange={handleSearch}
        className='search-input'
        placeholder='Search by song'
        value={songs}
        />

        <div classname='search-results'>
            {listOfSongs}
        </div>

    </div>
)

}

export default SearchBar;
