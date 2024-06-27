import { useCallback, useLayoutEffect } from 'react'

import { useLocalStorage } from '@mantine/hooks'
import { v4 as uuidv4 } from 'uuid'

import type { User } from 'src/@types/users'
import { usersService } from 'src/services'

import { useNotification } from './useNotification'
type UsersStorage = User[] | undefined

export const USERS_STORAGE = '@tinnova-users-selection-v1.0.0'

export const useUsersStorage = () => {
  const [storedUsers, setStoredUsers] = useLocalStorage<UsersStorage>({
    key: USERS_STORAGE,
    getInitialValueInEffect: false,
    serialize: JSON.stringify,
    deserialize: (str) => (str === undefined ? [] : JSON.parse(str)),
  })

  const { showNotification } = useNotification()

  const createUser = useCallback(
    (user: User) => {
      setStoredUsers((prev) => (prev ? [...prev, user] : [user]))
    },
    [setStoredUsers],
  )

  const deleteUser = useCallback(
    (id: string) => {
      setStoredUsers((prev) => prev?.filter((user) => user.id !== id))
    },
    [setStoredUsers],
  )

  const editUser = useCallback(
    (user: User) => {
      setStoredUsers((prev) => {
        if (prev) {
          const index = prev.findIndex((prevUser) => prevUser.id === user.id)
          if (index === -1) return prev

          const newUsers = [...prev]
          newUsers[index] = user

          return newUsers
        }
        return prev
      })
    },
    [setStoredUsers],
  )

  const fetchUsers = useCallback(async () => {
    try {
      const data = await usersService.getUsers()
      const formattedData = data.map((user) => ({ ...user, id: uuidv4() }))
      setStoredUsers(formattedData)
    } catch {
      showNotification({
        message: 'Erro ao buscar usuários',
        type: 'error',
      })
    }
  }, [setStoredUsers, showNotification])

  useLayoutEffect(() => {
    if (!storedUsers) {
      void (async () => {
        await fetchUsers()
      })()
    }
  }, [fetchUsers, storedUsers])

  return { users: storedUsers, createUser, editUser, deleteUser }
}
