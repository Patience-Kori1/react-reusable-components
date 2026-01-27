export default function TdataBodyAction({row, columns, onAction, onEdit, divAction, textButtonEditActionOne, textButtonEditActionTwo}) {
    // console.log(divAction)
     const divActionDefault = (
         <>
            <td>
                <button
                    type="button"
                    onClick={() => onEdit(row)}
                >
                {textButtonEditActionOne}
                </button>
                <button key={row.id} type="button" onClick={() => onAction(row)}>{textButtonEditActionTwo}</button>
            </td>
        </>
     )
    return divAction ? divAction(row) : divActionDefault

    // const divActionDefault = ( <td>
    //   <button
    //     type="button"
    //     onClick={() => onEdit && onEdit(keyAction)}
    //   >
    //     {/* {textButtonEditAction || " Modifier"} */}
    //     Modifier
    //   </button>

    //   <button
    //     type="button"
    //     onClick={() => onDelete && onDelete(keyAction)}
    //   >
    //     Supprimer
    //   </button>
    // </td>)

    // S'il y a un props divAction dans App, on l'affiche sinon on affiche divActiondefault
    const displayAction =  divAction(row) !== undefined ? divAction(row) : divActionDefault
    // console.log(onDelete)
  return (
    displayAction
  )

}