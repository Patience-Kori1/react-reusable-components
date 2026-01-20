import Thead from "./Thead"
import Tbody from "./Tbody"
export default function Table({data, columns, onAction,  onEdit, divAction}) {

    return(
        <table>   
            <Thead
                columns={columns}
            />
            <Tbody
                data= {data}
                columns={columns}
                onAction={onAction}
                onEdit={onEdit}
                divAction={divAction}
            />
        </table>
    )
}