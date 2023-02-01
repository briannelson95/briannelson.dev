import Link from "next/link";
import ColoredText from "./ColoredText";

export default function Header() {
    return (
        <div className="mb-10">
            <Link href='/'><h1 className="text-6xl font-extrabold text-center mt-20">Brian Nelson</h1></Link>
            <h3 className="text-4xl font-extrabold text-center capitalize mt-6 dark:text-white">
                Videographer Turned <ColoredText> Web Developer</ColoredText>
            </h3>
        </div>
    )
}