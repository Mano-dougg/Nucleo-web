import Link from "next/link"

const Card = (produtoId: number) => {
    return(
        <Link href={`/produto/${produtoId}`}>

        </Link>
    )
}