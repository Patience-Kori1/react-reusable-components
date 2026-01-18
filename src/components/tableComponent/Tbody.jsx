import TrowBody from "./TrowBody"
export default function Tbody({data, columns, onAction, onEdit}) {
    return (
        <tbody>
            <TrowBody
                data={data}
                columns={columns}
                onAction={onAction}
                onEdit={onEdit}
            />
        </tbody>
    )
}