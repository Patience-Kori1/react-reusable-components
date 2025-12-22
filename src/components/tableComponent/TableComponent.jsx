import TrowBody from "./TrowBody"
import TBody from "./Tbody"
import TrowHead from "./TrowHead"
import Thead from "./Thead"

export default function TableComponent() {
    return (
        <>
            <h3>Mon composant Table</h3>
            <table >
                <Thead/>
                <TBody/>
            </table>
            
        </>
    )
}