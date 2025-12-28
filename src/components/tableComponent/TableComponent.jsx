import Table from "./Table"
import SearchBar from "./SearchBar"
import Pagination from "./Pagination"

export default function TableComponent() {
    const data = [
    { id: 1, first_name: "Jeremie", last_name: "Chabanais", intern_member_id: 125242, status: "Aucune demande" },
    { id: 2, first_name: "Saria", last_name: "Chabanais", intern_member_id: 125242, status: "Stagiaire a initié la demande" },
    { id: 3, first_name: "Aziza", last_name: "Chabanais", intern_member_id: 125242, status: "Transmis à l'administration" },
    { id: 4, first_name: "Margot", last_name: "Chabanais", intern_member_id: 125242, status: "Aucune demande" },
    ]

    const columns = [
    { key: "id", label: "IDENTIFIANT" },
    { key: "first_name", label: "PRÉNOM" },
    { key: "last_name", label: "NOM" },
    { key: "intern_member_id", label: "ID STAGIAIRE" },
    { key: "status", label: "AVANCÉE DU DOSSIER" },
    ]

    return (
        <>
            <h3>Mon composant Table</h3>
            <SearchBar/>
            <Table
                data= {data}
                columns={columns}
            />
            <Pagination/>
        </>
    )
}