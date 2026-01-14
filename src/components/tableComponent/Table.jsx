import Thead from "./Thead"
import Tbody from "./Tbody"
export default function Table({data, columns, onAction}) {

    return(
        <table>   
            <Thead
                columns={columns}
            />
            <Tbody
                data= {data}
                columns={columns}
                onAction={onAction}
            />
        </table>
    )
}