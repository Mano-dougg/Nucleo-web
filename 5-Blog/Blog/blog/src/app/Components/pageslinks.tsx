import Link from 'next/link';
import './pageslinks.css';

export default function Pages() {
    return (
        <div className="paginas">
            <ul>
                <li>
                    <Link href="/Home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/Post">
                        Post
                    </Link>
                </li>
                <li>
                    <Link href="/Autor">
                        Autor
                    </Link>
                </li>
            </ul>
        </div>
    );
}