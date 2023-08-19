import Link from "next/link";

export default function More() {
    const more: {
        url: string,
        name: string,
    }[] = [
        {
            url: 'https://drive.google.com/file/d/1HJqH5kHuKs381-lSNEM6cE5oKv-IT22-/view?usp=drive_link',
            name: 'Resume'
        },
        {
            url: 'https://github.com/madanadra',
            name: 'GitHub'
        },
        {
            url: 'https://www.linkedin.com/in/muhammad-laksmana-indra-3913b422b',
            name: 'LinkedIn'
        }
    ]

    return (
        <div className="flex justify-end gap-x-5 p-5 sm:py-10 sm:px-20 mt-14 text-[1.15em]">
            {more.map((item, i) =>
                <Link key={i} href={item.url} target="_blank"
                className="underline">{item.name}</Link>
            )}
        </div>
    )
}