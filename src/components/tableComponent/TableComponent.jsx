import Table from "./Table"
import SearchBar from "./SearchBar"
import Pagination from "./Pagination"

export default function TableComponent() {
    
    return (
        <>
            <h3>Mon composant Table</h3>
            <SearchBar/>
            <Table/>
            <Pagination/>
        </>
    )
}