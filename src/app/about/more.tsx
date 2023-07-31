import Link from "next/link";

export default function More() {
    return (
        <div className="grid justify-items-end gap-y-3 p-5 sm:py-10 sm:px-20 mt-14 text-[1.15em]">
            <h1 className="font-bold">More info</h1>
            <h1>mlaksindra@gmail.com</h1>
            <Link href='https://madanadra.github.io/file/cv-ats.pdf' target="_blank"
            className="underline">Resume</Link>
            <Link href='https://github.com/madanadra' target="_blank"
            className="underline">GitHub</Link>
            <Link href='https://www.linkedin.com/in/muhammad-laksmana-indra-3913b422b' target="_blank"
            className="underline">LinkedIn</Link>
        </div>
    )
}