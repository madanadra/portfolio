export default function Footer() {
    return (
        <div className="grid text-center gap-y-4 py-10 md:py-16 border-t border-neutral-950 mt-2">
            <h1 className="text-sm md:text-lg">mlaksindra@gmail.com</h1>
            <h1 className="font-ucase uppercase md:text-xl">Muhammad Laksmana Indra</h1>
            <h1 className="text-sm md:text-lg">&copy; {new Date().getFullYear()} Portfolio</h1>
        </div>
    )
}