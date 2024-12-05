export default function CardCad() {
    

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800">Cadastro</h2>
                <div className="mt-4">
                    <input
                        id="nome"
                        type="text"
                        placeholder="Nome"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="mt-4">
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="mt-4">                
                    <input
                        id="senha"
                        type="password"
                        placeholder="Senha"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="mt-4">
                    <input
                        id="confirmarSenha"
                        type="password"
                        placeholder="Confirmar Senha"    
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="mt-4">
                    <button
                        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                        Cadastrar
                    </button>
                </div>
            </div>
        </div>
    );
}