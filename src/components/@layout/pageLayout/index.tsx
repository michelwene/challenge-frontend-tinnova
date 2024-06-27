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

const actionButton = [
  {
    key: 'table',
    label: 'Tabela de usuários',
    icon: <S.UserIcon size={18} />,
    path: '/',
  },
  {
    key: 'create',
    label: 'Cadastrar usuário',
    icon: <S.UserAddIcon size={18} />,
    path: '/user/create',
  },
]

export const PageLayout = ({ children }: Props) => {
  const router = useRouter()
  return (
    <main className={manrope.className}>
      <S.Container>
        <S.Card>
          <S.Title>Teste front-end tinnova</S.Title>

          <S.HeaderContainer>
            {actionButton.map((item) => (
              <Button
                key={item.key}
                buttonType='text'
                shape='default'
                size='middle'
                onClick={() => router.push(item.path)}
              >
                {item.icon}
                {item.label}
              </Button>
            ))}
          </S.HeaderContainer>
          <S.Content>{children}</S.Content>
        </S.Card>
      </S.Container>
    </main>
  )
}
