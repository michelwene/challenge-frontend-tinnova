import { useRouter } from 'next/router'

import { useUsersStorage } from '~hooks'
import { Empty } from '~ui'

import { TableRow } from './tableRow'
export const Users = () => {
  const { users } = useUsersStorage()
  const router = useRouter()

  const handleEdit = (id: string) => {
    void router.push(`/user/edit/${id}`)
  }

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
        {!!users.length ? (
          users.map((user) => (
            <TableRow
              key={user.id}
              onEdit={() => handleEdit(user.id)}
              user={user}
            />
          ))
        ) : (
          <tr>
            <td colSpan={5}>
              <Empty message='Nenhum usuário cadastrado' />
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
