export default function TdataBody({ row, columns }) {
  return (
    <>
      {columns.map((column) => (
        <td key={column.key}>
          {row[column.key]}
        </td>
      ))}
    </>
  )
}
