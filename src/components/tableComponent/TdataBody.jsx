export default function TdataBody({data}) {
   
    return (
        <>
            {
                data.map((col, index) => (
                <td key={index}>{col}</td>
                )
            )}
        </>
    )
}
