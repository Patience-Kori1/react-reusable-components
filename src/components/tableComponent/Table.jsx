import Thead from "./Thead"
import Tbody from "./Tbody"
export default function Table({data, columns}) {

    return(
        <table>   
            <Thead/>
            <Tbody
                data= {data}
                columns={columns}
            />
        </table>
    )
}