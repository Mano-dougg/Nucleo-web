"use client";
import { useState } from "react";
import axios from "axios";
import Mosaic from "../../../public/mosaic-tinted.png";
import Image from "next/image";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import Home from "../home/page"; // Importe o componente Home

const Login = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [userData, setUserData] = useState<any>(null);
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // Estado para controlar se o usuário está logado

  const handleLogin = async () => {
    try {
      const response = await axios.put("http://localhost:3000/login", {
        user_name: userName,
        password: password,
      });

      if (response.status === 200) {
        console.log("Login successful");
        console.log("User data:", response.data);
        setUserData(response.data);
        setErrorMessage(null);
        setIsLoggedIn(true); // Alterar estado para indicar que o usuário está logado
      } else {
        console.log("Login failed");
        setErrorMessage("Login failed");
        setUserData(null);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Error during login");
      setUserData(null);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:3000/users", {
        user_name: userName,
        password: password,
      });

      if (response.status === 201) {
        console.log("Registration successful");
        console.log("User data:", response.data);
        setUserData(response.data);
        setErrorMessage(null);
        setIsLoggedIn(true); // Alterar estado para indicar que o usuário está logado
      } else {
        console.log("Registration failed");
        setErrorMessage("Registration failed");
        setUserData(null);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setErrorMessage("Error during registration");
      setUserData(null);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleForm = () => {
    setIsRegistering((prevState) => !prevState);
    setErrorMessage(null); // Limpar mensagem de erro ao trocar entre login e cadastro
    setUserName(""); // Limpar campos ao trocar entre login e cadastro
    setPassword("");
  };

  // Renderizar a tela Home se o usuário estiver logado
  if (isLoggedIn) {
    return <Home />;
  }

  return (
    <div className="relative flex items-center justify-center min-h-screen w-screen bg-gray-900">
      <div className="relative z-10 flex-col items-center w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
        <h1 className="text-3xl text-white font-semibold mb-5 text-center">
          {isRegistering ? "Cadastre-se" : "Entrar"}
        </h1>
        <p className="text-sm text-gray-300 font-medium mb-10 text-center">
          {isRegistering
            ? "Insira um novo nome de usuário e senha para criar sua conta."
            : "Insira o endereço de e-mail e senha vinculados à sua conta Nome da Empresa."}
        </p>
        <div className="mb-9">
          <input
            type="text"
            placeholder="Endereço de e-mail"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full p-[18px] h-[52px] mb-4  bg-[#303334] bg-opacity-60 backdrop-blur-lg text-white rounded-xl focus:outline-none focus:ring-0"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-[18px] h-[52px] bg-[#303334] bg-opacity-60 backdrop-blur-lg text-white rounded-xl pr-10 focus:outline-none focus:ring-0"
            />
            <div
              className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
              onClick={toggleShowPassword}
            >
              {showPassword ? (
                <MdOutlineVisibilityOff className="text-white" />
              ) : (
                <MdOutlineVisibility className="text-white" />
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          {isRegistering ? (
            <button
              onClick={handleRegister}
              className="w-[170px] py-3 text-white rounded-[42px] transition bg-gradient-to-b from-[#106853] to-[#179779]"
            >
              CADASTRAR
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="w-[170px] py-3 text-white font-semibold rounded-[42px] transition bg-gradient-to-b from-[#106853] to-[#179779]"
            >
              ENTRAR
            </button>
          )}
        </div>
        {errorMessage && (
          <p className="mt-4 text-red-500 text-center">{errorMessage}</p>
        )}
        {userData && (
          <div className="mt-4 p-4 bg-white text-black rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Dados do Usuário</h2>
            <pre className="bg-gray-100 p-2 rounded">
              {JSON.stringify(userData, null, 2)}
            </pre>
          </div>
        )}
        <div className="mt-4 text-center">
          <button
            onClick={toggleForm}
            className="text-gray-300 hover:text-gray-100 focus:outline-none"
          >
            {isRegistering ? "Já tem uma conta? Entrar" : "Cadastre-se"}
          </button>
        </div>
      </div>
      <Image
        src={Mosaic}
        alt="Mosaic Background"
        unoptimized={true}
        layout="fill"
        objectFit="cover"
        className="absolute w-full h-full z-0"
      />
    </div>
  );
};

export default Login;
