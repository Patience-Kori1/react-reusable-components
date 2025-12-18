import TrowBody from "./TrowBody"
import TBody from "./Tbody"
import TdataHead from "./TdataHead"

export default function TableComponent() {
    return (
        <>
            <h3>Mon composant Table</h3>
            <table >
                <thead>
                    <TdataHead/>
                </thead>
                <thead>
                    Hello
                </thead>
                <TBody/>
                
            </table>
            
        </>
    )
}