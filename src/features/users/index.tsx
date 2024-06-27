import { useUsersStorage } from '~hooks'
import { DeleteIcon, EditIcon } from '~icons'
import { IconButton } from '~ui'

import * as S from './styles'
export const Users = () => {
  const { users } = useUsersStorage()

  return (
    <table
      style={{
        borderCollapse: 'collapse',
        tableLayout: 'fixed',
        width: '100%',
      }}
    >
      <thead>
        <tr>
          <th>Nome</th>
          <th>CPF</th>
          <th>Telefone</th>
          <th>E-mail</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <S.TableItem align='center' title={user.name}>
              {user.name}
            </S.TableItem>
            <S.TableItem align='center'>{user.document}</S.TableItem>
            <S.TableItem align='center'>{user.phone}</S.TableItem>
            <S.TableItem align='center' title={user.email}>
              {user.email}
            </S.TableItem>
            <S.TableItem align='center'>
              <div
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <IconButton>
                  <EditIcon size={14} />
                </IconButton>
                <IconButton danger={true}>
                  <DeleteIcon size={14} />
                </IconButton>
              </div>
            </S.TableItem>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
