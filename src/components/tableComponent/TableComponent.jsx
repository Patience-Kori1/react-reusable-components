import Table from "./Table"
import SearchBar from "./SearchBar"
import Pagination from "./Pagination"

export default function TableComponent() {
    const data = ["un", "deux", "trois"]
    return (
        <>
            <h3>Mon composant Table</h3>
            <SearchBar/>
            <Table
                data= {data}
            />
            <Pagination/>
        </>
    )
}