export default function Pagination({textButtonPaginationOne}) {
    return(
        <div>
            <button>{textButtonPaginationOne || "Liste précédent"} </button>
            <button>suivant</button>
        </div>
    )
}   