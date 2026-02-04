export default function SearchBar({placeholder, textButtonSearchBar}) {
    return(
        <>
            <label htmlFor="search">Recherchez : </label>
            <input 
                type="text" 
                placeholder={placeholder}
            />

            <button>{textButtonSearchBar}</button>
        </>
    )
}