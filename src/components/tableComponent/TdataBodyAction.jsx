export default function TdataBodyAction({row, columns}) {

    const handleClick = () => {
        console.log("hello", row.id)
    }
    
    return (
        <>
            <td>
                <button key={row.id} type="button" onClick={handleClick}>Dire Bonjour</button>
            </td>
        </>
    )
}