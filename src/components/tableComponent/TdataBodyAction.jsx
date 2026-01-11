export default function TdataBodyAction({row, columns}) {
    
    return (
        <>
            <td>
                <button key={row.id} type="button" onClick={() => {console.log("hello")}}>Dire Bonjour</button>
            </td>
        </>
    )
}