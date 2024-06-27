import { useState } from 'react'

import { useNotification, useUsersStorage } from '~hooks'
import { maskCpf, maskPhoneNumber } from '~utils'

import type { User } from 'src/@types/users'

import { ActionButtons } from './actionButtons'
import * as S from './styles'

type Props = {
  user: User
  onEdit: () => void
}

export const TableRow = ({ user, onEdit }: Props) => {
  const [isLoading, setIsLoading] = useState(false)

  const { deleteUser } = useUsersStorage()
  const { showNotification } = useNotification()

  const handleDelete = () => {
    setIsLoading(true)
    setTimeout(() => {
      deleteUser(user.id)
      setIsLoading(false)
      showNotification({
        message: 'Usuário excluído com sucesso',
        type: 'success',
      })
    }, 200)
  }

  return (
    <S.TableRow>
      <S.TableItem title={user.name}>
        <S.ResponsiveTitle>Nome: </S.ResponsiveTitle>
        <S.Text>{user.name}</S.Text>
      </S.TableItem>
      <S.TableItem>
        <S.ResponsiveTitle>CPF: </S.ResponsiveTitle>
        {maskCpf(user.cpf)}
      </S.TableItem>
      <S.TableItem>
        <S.ResponsiveTitle>Telefone: </S.ResponsiveTitle>
        {maskPhoneNumber(user.phone)}
      </S.TableItem>
      <S.TableItem title={user.email}>
        <S.ResponsiveTitle>E-mail: </S.ResponsiveTitle>
        {user.email}
      </S.TableItem>
      <S.TableItem>
        <ActionButtons
          loading={isLoading}
          onDelete={handleDelete}
          onEdit={onEdit}
        />
      </S.TableItem>
    </S.TableRow>
  )
}
