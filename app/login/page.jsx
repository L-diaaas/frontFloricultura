export default function Login() {
  return (
    <>
    <div className="flex justify-center items-center h-screen bg-[url(/fotoFundo.jpg)] bg-cover bg-center">

        <div className="flex w-120 h-150 rounded-lg shadow-md bg-green-50/50 justify-center gap-x-10 ">

          <div className="flex flex-col items-center mt-20"> 

            <div className="size-15 bg-[url(/LoginIco.png)] bg-cover bg-center mb-4"></div>

            <p className="text-2xl text-teal-900 font-bold text-center">Bem-vindo(a)!</p>

            <p className="text-sm text-black font-medium text-center">O acesso é restrito a pessoas autorizadas.</p>

            <div className="mb-4 content-start mt-6">
              
              <label htmlFor="email" className="block text-sm font-medium text-teal-900 mb-1">Entrar</label>

              <div className="relative">

                    <mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />

                    <input
                        type="email"
                        id="email"
                        placeholder="email@gmail.com"
                        className="w-full pl-10 pr-4 py-3 border border-verdepastel rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-verdepastel/50" 
                    />

                </div>

                <label htmlFor="password" className="block text-sm font-medium text-teal-900 mb-1 mt-2">
                    Senha
                </label>

                <div className="relative">

                    <lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />

                    <input
                        type="password"
                        id="password"
                        placeholder="••••••••"
                        className="w-full pl-10 pr-10 py-3 border border-verdepastel rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 bg-verdepastel/50"
                    />
                
                    <eyeOff className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer" />

                </div>

            </div>

            <div className="flex justify-end mb-6 ml-33">

                <a href="#" className="text-sm underline font-medium text-gray-700 hover:text-teal-900 transition duration-150">Esqueceu a senha?</a>

            </div>

            <button type="submit" className="absolute mt-90 w-40 bg-verdesaja hover:bg-teal-900 text-white font-semibold py-3 transition duration-200 rounded-xl shadow-md">Entrar</button>
            
          </div>

        </div>

    </div>
    </>
  );
}
