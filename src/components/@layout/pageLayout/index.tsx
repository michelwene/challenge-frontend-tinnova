import { Manrope } from 'next/font/google'
import { useRouter } from 'next/router'

import type { ReactNode } from 'react'

import { Button } from '~ui'

import * as S from './styles'

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
})

type Props = {
  children: ReactNode
}

export const PageLayout = ({ children }: Props) => {
  const router = useRouter()
  return (
    <main className={manrope.className}>
      <S.Container>
        <S.Card>
          <S.Title>Teste front-end tinnova</S.Title>

          <S.HeaderContainer>
            <Button
              buttonType='text'
              shape='default'
              size='middle'
              onClick={() => router.push('/')}
            >
              <S.UserIcon size={18} />
              Tabela de usuários
            </Button>
            <Button
              buttonType='text'
              shape='default'
              size='middle'
              onClick={() => router.push('/user/create')}
            >
              <S.UserAddIcon size={18} />
              Cadastrar usuário
            </Button>
          </S.HeaderContainer>
          <S.Content>{children}</S.Content>
        </S.Card>
      </S.Container>
    </main>
  )
}
