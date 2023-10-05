import { useState, FormEvent } from 'react'
import { Link } from "react-router-dom";
import { Input } from "../../components/input";


export function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  function handleSubmite(e: FormEvent) {
    e.preventDefault()


  }


  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <Link to="/">
        <h1 className="mt-11 text-white mb-7 font-bold text-5xl"> Dev<span className="bg-gradient-to-r from-red-500 to bg-orange-400 bg-clip-text text-transparent">LINK</span></h1>
      </Link>
      <form
        className="w-full max-w-xl flex flex-col px-2"
        onSubmit={handleSubmite}>
        <Input
          placeholder='Digite seu email ...'
          type='email'
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
        />
        <Input
          placeholder='Digite seu senha ...'
          type='password'
          value={senha}
          onChange={(e) => { setSenha(e.target.value) }}
        />
        <button className="h-9 bg-blue-600 rounded border-0 text-lg font-medium text-white"
          type="submit">
          Acessar
        </button>
      </form>
    </div>
  )
}