import Table from "./Table"
import SearchBar from "./SearchBar"
import Pagination from "./Pagination"
import { useState } from "react"

export default function TableComponent({
  initialData = [
    { id: 1, first_name: "Jeremie", last_name: "Chabanais", intern_member_id: 125242, status: "Aucune demande" },
    { id: 2, first_name: "Saria", last_name: "Chabanais", intern_member_id: 125242, status: "Stagiaire a initié la demande" },
    { id: 3, first_name: "Aziza", last_name: "Chabanais", intern_member_id: 125242, status: "Transmis à l'administration" },
    { id: 4, first_name: "Margot", last_name: "Chabanais", intern_member_id: 125242, status: "Aucune demande" },
  ],

  columns = [
    { key: "id", label: "IDENTIFIANT" },
    { key: "first_name", label: "PRÉNOM" },
    { key: "last_name", label: "NOM" },
    { key: "intern_member_id", label: "ID STAGIAIRE" },
    { key: "status", label: "AVANCÉE DU DOSSIER" },
    { key: "action", label: "ACTION" },
  ],
  textButtonEditActionOne= "Modifier...",
  textButtonEditActionTwo= "Supprimer...",
  placeholderTextSearchBar = "Entrer le mot",
  textTableTitle = "Mon composant Table",
}) 
  {
    const [data, setData] = useState(initialData)

    const handleAction = (row) => {
      setData((prevData) =>
        prevData.filter((item) => item.id !== row.id)
      )
    }
    // const handleAction = (row) => {
    //       console.log("hello", row.id)
    // }
    const handleEdit = (row) => {
        console.log("Modifier la ligne :", row)
    }
    // const divAction= (
    //     <>
    //         <td>Hey</td>
    //     </>
    // )
     // Fonction render pour la colonne Action
    const divAction = (row) => {
      return(
      <td>
        <button onClick={() => handleEdit(row)}>Modifier</button>
        <button onClick={() => handleDelete(row)}>Supprimer</button>
        
      </td>
      )
    }

    return (
      <>
        <h3>{textTableTitle || "Liste des stagiaires"}</h3>
        <SearchBar
          placeholder={placeholderTextSearchBar || "Rechercher un stagiaire..."}
        />
        <Table
            data= {data}
            columns={columns}
            onAction={handleAction}
            onEdit={handleEdit}
            // divAction={divAction}
            textButtonEditActionOne = {textButtonEditActionOne}
            textButtonEditActionTwo = {textButtonEditActionTwo}
        />
        <Pagination/>
      </>
    )
  }