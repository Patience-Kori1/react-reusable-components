import Thead from "./Thead"
import Tbody from "./Tbody"
export default function Table({data}) {

    return(
        <table>   
            <Thead/>
            <Tbody
                data= {data}
            />
        </table>
    )
}