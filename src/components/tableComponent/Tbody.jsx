import TrowBody from "./TrowBody"
export default function Tbody({data, columns, onAction}) {
    return (
        <tbody>
            <TrowBody
                data={data}
                columns={columns}
                onAction={onAction}
            />
        </tbody>
    )
}