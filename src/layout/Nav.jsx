

export default function Nav() {
    return (
        <nav className="border rounded flex flex-wrap z-50 bg-white p-2.5 font-bold  text-2xl sticky top-0 flex-col">
            <div className="flex items-center justify-end flex-row flex-wrap cursor-pointer max-w-full">

                <div>
                    <span className="flex flex-wrap flex-col text-black items-center justify-start font-extrabold"> South Market </span>
                </div>
                <div className="flex items-center justify-end">
                    <button className="rounded bg-cyan-700 text-blue-950 m-1 p-1.5 cursor-pointer border-none hover:text-shadow-lg text-shadow-black">Login</button>
                    <span className="text-red-600 font-normal text-2xl rounded bg-red-800 p-1.5 m-1 cursor-pointer hover:text-shadow-lg text-shadow-black">logout</span>

                </div>

            </div>

            <div className="flex justify-center items-center flex-wrap max-w-full text-blue-700 cursor-pointer">
                links
            </div>
        </nav>
    )
}