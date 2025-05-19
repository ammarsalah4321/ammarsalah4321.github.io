import HeaderImage from "../../public/assets/Header_image";


export default function Header() {
    return(
        <header className="text-zinc-800 flex-col  flex flex-wrap justify-center items-center ">
            <span className="font-bold text-4xl flex justify-center items-center">South Market</span> 

            <HeaderImage />

        </header>
    )
}