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

          <S.HeaderContainer
            style={{
              alignItems: 'center',
              display: 'flex',
              gap: '0.5rem',
              width: '100%',
            }}
          >
            <Button
              buttonType='text'
              shape='default'
              size='middle'
              onClick={() => router.push('/')}
            >
              Tabela de usuários
            </Button>
            <Button
              buttonType='text'
              shape='default'
              size='middle'
              onClick={() => router.push('/user/create')}
            >
              Cadastro de usuários
            </Button>
          </S.HeaderContainer>
          <S.Content>{children}</S.Content>
        </S.Card>
      </S.Container>
    </main>
  )
}
