export default function TdataBody({data, row}) {
   console.log(row)
    return (
        <>
           
            <td>{row.first_name}</td>
            <td>{row.last_name}</td>
            <td>{row.intern_member_id}</td>
            <td>{row.status}</td>
        </>
    )
}
