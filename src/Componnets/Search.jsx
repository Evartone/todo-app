import React from "react";

const Search =({search, setSeach})=>{

    return (

        <div className="search">

        <h2>Pesquisar...</h2>
        <input type="text" value={search} onChange={(e) =>setSeach(e.target.value)}
        placeholder="Digite para pesquisar..." />


        </div>

    )
}

export default Search; 