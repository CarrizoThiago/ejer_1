function Section4(){
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

    }
    return(
        <div className="w-full  flex flex-col items-center justify-center mb-[5%]">
            <form className="bg-emerald-900 md:w-[30%] w-[80%] p-[2%] text-white border border-emerald-400 border-[2%]" onSubmit={handleSubmit}>
                <ul>
                    <div className="w-full flex flex-col">
                        <label htmlFor="Mail">Mail: </label><input className=" w-[50%] bg-gray-200 text-black border border-gray-300 rounded mt-[2%] mb-[2%]" type="email" id="Mail" />
                    </div>
                    <div className="w-full flex flex-col">
                        <label htmlFor="Mensaje">Mensaje: </label><textarea className="text-black bg-gray-200 border border-gray-300 rounded mt-[2%] mb-[2%]" id="Mensaje"></textarea>
                    </div>
                </ul>
                <button className="bg-blue-500 active:bg-blue-800 text-white px-4 py-2 rounded mt-[2%]">Enviar</button>
            </form>
        </div>
    )
}
export default Section4;
