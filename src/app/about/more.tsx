import Link from "next/link";

export default function More() {
    return (
        <div className="flex justify-end gap-x-5 p-5 sm:py-10 sm:px-20 mt-14 text-[1.15em]">
            <Link href='https://drive.google.com/file/d/1HJqH5kHuKs381-lSNEM6cE5oKv-IT22-/view?usp=drive_link' target="_blank"
            className="underline">Resume</Link>
            <Link href='https://github.com/madanadra' target="_blank"
            className="underline">GitHub</Link>
            <Link href='https://www.linkedin.com/in/muhammad-laksmana-indra-3913b422b' target="_blank"
            className="underline">LinkedIn</Link>
        </div>
    )
}