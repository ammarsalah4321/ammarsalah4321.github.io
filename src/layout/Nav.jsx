export default function Nav() {
    return (
        <nav className="border-4 border-double border-blue-500 flex flex-wrap z-50 bg-white p-2.5 text-2xl sticky top-0 flex-col">
            <div className="cursor-pointer max-w-full">

                <div className="cursor-default">
                    <span className="p-1 m-0.5 flex flex-wrap flex-col text-black items-center justify-center font-extrabold"> South Market </span>
                </div>
                <div className=" flex items-center justify-end">
                    <button className="rounded bg-cyan-700 font-normal text-blue-950 m-1 p-1.5 cursor-pointer border-none hover:text-shadow-lg text-shadow-black">Login</button>
                    {/**<button className="text-blue-600 font-normal text-2xl rounded bg-cyan-800 p-1.5 m-1 cursor-pointer hover:text-shadow-lg text-shadow-black">login</button>*/}

                    <button className="rounded bg-red-700 font-normal text-red-950 m-1 p-1.5 cursor-pointer border-none hover:text-shadow-lg text-shadow-black">Logout</button>
                    {/**<button className="text-red-600 font-normal text-2xl rounded bg-red-800 p-1.5 m-1 cursor-pointer hover:text-shadow-lg text-shadow-black">logout</button>*/}

                </div>

            </div>

            <div className="border-2 border-blue-800 flex justify-center items-center font-bold flex-wrap text-blue-700 cursor-pointer">
                
                    <a href="">link2</a>
                    <a href="">link1</a>
                    <a href="">link3</a>
                    <a href="">link4</a>

            </div>
        </nav>
    )
}