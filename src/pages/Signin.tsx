import { FormEvent, useState } from 'react'
import axios from 'axios'
import { Envelope, Lock } from 'phosphor-react'
import { Button } from '../components/Button'
import { Heading } from '../components/Heading'
import { Logo } from '../components/Logo'
import { Text } from '../components/Text'
import { TextInput } from '../components/TextInput'
import { Checkbox } from '../components/Checkbox'

export function Signin() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  async function handleSignIn(event: FormEvent) {
    event.preventDefault()

    await axios.post('/sessions', {
      email: 'dioggo.soares@live.com',
      password: '12345678',
    })

    setIsUserSignedIn(true)
  }

  return (
    <div className="w-screnn h-screen flex flex-col gap-10 items-center justify-center mx-auto text-gray-100 bg-blur bg-cover bg-no-repeat">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>

      <form
        onSubmit={handleSignIn}
        className="flex flex-col w-full max-w-sm items-stretch gap-4"
      >
        {isUserSignedIn && (
          <div className="flex items-center justify-center w-full bg-gray-200 rounded">
            <Text size="sm" className="text-gray-800">
              Login realizado!
            </Text>
          </div>
        )}

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="password"
              placeholder="**********"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-4">
          <Checkbox />
          <Text size="sm" aria-labelledby="remember" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4">
        <Text size="sm" asChild>
          <a
            href=""
            className="text-gray-400 underline hover:text-gray-200 transition-all duration-300 ease-in-out"
          >
            Esqueceu sua senha?
          </a>
        </Text>
        <Text size="sm" asChild>
          <a
            href=""
            className="text-gray-400 underline hover:text-gray-200 transition-all duration-300 ease-in-out"
          >
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  )
}
