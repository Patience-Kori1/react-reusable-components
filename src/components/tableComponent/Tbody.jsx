import TrowBody from "./TrowBody"
export default function Tbody({data, columns, onAction, onEdit, divAction}) {
    return (
        <tbody>
            <TrowBody
                data={data}
                columns={columns}
                onAction={onAction}
                onEdit={onEdit}
                divAction={divAction}
            />
        </tbody>
    )
}