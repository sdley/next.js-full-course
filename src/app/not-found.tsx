import Link from "next/link";


export default function NotFound() {
    return (
        <div>
            <h2>
                Page not found
            </h2>
            <p>Could not find requested ressource!</p>
            <h2>
                <Link href="/">Go Home</Link>
            </h2>
        </div>
    );
}