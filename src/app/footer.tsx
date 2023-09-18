import { abrilFatface } from "./font";

export default function Footer() {
    return (
        <div className="flex flex-wrap justify-between items-center gap-3 py-4">
            <h1 className="text-sm sm:text-base lg:text-lg font-medium">mlaksindra@gmail.com</h1>
            <h1 className={`${abrilFatface.className} font-bold sm:text-lg lg:text-xl uppercase`}>muhammad laksmana indra</h1>
        </div>
    )
}