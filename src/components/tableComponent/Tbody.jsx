import TrowBody from "./TrowBody"
export default function Tbody({data, columns, onAction, onEdit, divAction, textButtonEditActionOne, textButtonEditActionTwo}) {
    return (
        <tbody>
            <TrowBody
                data={data}
                columns={columns}
                onAction={onAction}
                onEdit={onEdit}
                divAction={divAction}
                textButtonEditActionOne={textButtonEditActionOne}
                textButtonEditActionTwo= {textButtonEditActionTwo}
            />
        </tbody>
    )
}