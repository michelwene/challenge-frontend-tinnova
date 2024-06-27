import { useCallback } from 'react'

import { useRouter } from 'next/router'

import { useUsersStorage } from '~hooks'
import { colors } from '~styles/theme/colors'
import { Empty, Spin } from '~ui'

import * as S from './styles'
import { TableRow } from './tableRow'

const tableHeaders = ['Nome', 'CPF', 'Telefone', 'E-mail', 'Ações']

export const Users = () => {
  const { isLoading, users } = useUsersStorage()
  const router = useRouter()

  const handleEdit = useCallback(
    (id: string) => {
      void router.push(`/user/edit/${id}`)
    },
    [router],
  )

  return (
    <S.Table $isEmpty={!users?.length}>
      <thead>
        <tr>
          {tableHeaders.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      {!isLoading ? (
        <S.TableBody $isEmpty={!users?.length}>
          {!!users?.length ? (
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
      ) : (
        <tr>
          <td colSpan={5}>
            <Spin color={colors.primary} />
          </td>
        </tr>
      )}
    </S.Table>
  )
}
