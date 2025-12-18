import TrowBody from "./TrowBody"
import TBody from "./Tbody"
import TrowHead from "./TrowHead"

export default function TableComponent() {
    return (
        <>
            <h3>Mon composant Table</h3>
            <table >
                <thead>
                    <TrowHead/>
                </thead>
                <TBody/>
            </table>
            
        </>
    )
}