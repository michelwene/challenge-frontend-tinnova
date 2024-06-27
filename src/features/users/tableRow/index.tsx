import { useState } from 'react'

import { type User, useUsersStorage } from '~hooks'
import { DeleteIcon, EditIcon } from '~icons'
import { IconButton } from '~ui'

import * as S from './styles'

type Props = {
  user: User
  onEdit: () => void
}

export const TableRow = ({ user, onEdit }: Props) => {
  const [isLoading, setIsLoading] = useState(false)

  const { deleteUser } = useUsersStorage()

  const handleDelete = () => {
    setIsLoading(true)
    setTimeout(() => {
      deleteUser(user.id)
      setIsLoading(false)
    }, 200)
  }

  return (
    <tr>
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
          <IconButton onClick={onEdit}>
            <EditIcon size={14} />
          </IconButton>
          <IconButton danger={true} onClick={handleDelete} loading={isLoading}>
            <DeleteIcon size={14} />
          </IconButton>
        </div>
      </S.TableItem>
    </tr>
  )
}
