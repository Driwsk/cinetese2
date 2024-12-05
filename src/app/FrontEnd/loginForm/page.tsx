'use client'
import Logar from '@/app/BackEnd/Login';

export function handleLogin() {
  Logar();
}

export default function LoginForm() {
  return (
    <>
      
      <form id='form'  className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800">Login</h2>
          <div className="mt-4">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <input
              type="password"
              id="senha"
              placeholder="Senha"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mt-4">
            <button
              onClick={handleLogin}
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </>
  );
}