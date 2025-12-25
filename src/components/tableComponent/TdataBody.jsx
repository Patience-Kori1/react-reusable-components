export default function TdataBody() {
    const data = ["un", "deux", "trois"]

    return (
        <>
            {data.map((col, index) => (
                <td key={index}>{col}</td>
            ))}
        </>
    )
}
