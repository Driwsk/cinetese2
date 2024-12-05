'use client';
import { useState } from 'react';
import axios from 'axios';


export default function HandleCadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário

    // Verifica se as senhas coincidem
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    // Envia os dados para o backend usando axios
    try {
      const response = await axios.post('http://localhost:3001/BackEnd/Cadastro', {
        nome,
        email,
        senha,
        confirmarSenha,
      });

      if (response.status === 201) {
        alert('Usuário cadastrado com sucesso!');
        window.location.href = '/';
      } else {
        alert('Erro ao cadastrar usuário!');
      }
    } catch (error) {
      console.error('Erro na comunicação com o servidor:', error);
      alert('Erro na comunicação com o servidor!');
    }
  };

  return (
    <form id="FormCad" className="flex flex-col items-center justify-center min-h-screen bg-gray-100" onSubmit={handleSubmit}>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800">Cadastro</h2>
        <div className="mt-4">
          <input
            id="nome"
            type="input"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mt-4">
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mt-4">
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mt-4">
          <input
            id="confirmarSenha"
            type="password"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            placeholder="Confirmar Senha"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mt-4">
          <button
            id="cadastro"
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Cadastrar
          </button>
        </div>
      </div>
    </form>
  );
}
