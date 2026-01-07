export default function TdataBody({ row, columns }) {
  // console.log(row.id)
  // console.log(columns)
  return (
    <>
      {columns.map((column) => (
        <td key={column.key}>
          {row[column.key]}
          {/* {console.log(row[1])} */}
        </td>
      ))}
    </>
  )
}
