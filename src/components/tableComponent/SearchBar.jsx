export default function SearchBar({placeholder}) {
    return(
        <>
            <label htmlFor="search">Recherchez : </label>
            <input 
                type="text" 
                placeholder={placeholder}
            />
        </>
    )
}