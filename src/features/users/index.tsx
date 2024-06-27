import { useRouter } from 'next/router'

import { useUsersStorage } from '~hooks'
import { Empty } from '~ui'

import * as S from './styles'
import { TableRow } from './tableRow'

export const Users = () => {
  const { users } = useUsersStorage()
  const router = useRouter()

  const handleEdit = (id: string) => {
    void router.push(`/user/edit/${id}`)
  }

  return (
    <S.Table $isEmpty={!users.length}>
      <thead>
        <tr>
          <th>Nome</th>
          <th>CPF</th>
          <th>Telefone</th>
          <th>E-mail</th>
          <th>Ações</th>
        </tr>
      </thead>
      <S.TableBody $isEmpty={!users.length}>
        {!!users.length ? (
          users.map((user, index) => {
            const isLastIndex = index === users.length - 1
            return (
              <>
                <TableRow
                  key={user.id}
                  onEdit={() => handleEdit(user.id)}
                  user={user}
                />
                {!isLastIndex && <S.Divider />}
              </>
            )
          })
        ) : (
          <tr>
            <td colSpan={5}>
              <Empty message='Nenhum usuário cadastrado' />
            </td>
          </tr>
        )}
      </S.TableBody>
    </S.Table>
  )
}
