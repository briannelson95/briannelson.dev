import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <h1 className="text-2xl font-bold">Page Not Found...</h1>
            <p>
                Would you like to <Link href={'/'} className='underline'>return to home</Link>?
            </p>
        </>
    )
}