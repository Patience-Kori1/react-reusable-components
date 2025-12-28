import TrowBody from "./TrowBody"
export default function Tbody({data, columns}) {
    return (
        <tbody>
            <TrowBody
                data={data}
                columns={columns}
            />
        </tbody>
    )
}