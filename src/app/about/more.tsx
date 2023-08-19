import Link from "next/link";
import { more } from "../../other/data";

export default function More() {
    return (
        <div className="flex justify-end gap-x-5 p-5 sm:py-10 sm:px-20 mt-14 text-[1.15em]">
            {more.map((item, i) =>
                <Link key={i} href={item.url} target="_blank"
                className="underline">{item.name}</Link>
            )}
        </div>
    )
}