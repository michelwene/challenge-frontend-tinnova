import { useCallback } from 'react'

import { useSessionStorage } from '@mantine/hooks'
import superjson from 'superjson'

export type User = {
  id: string
  name: string
  document: string
  email: string
  phone: string
}

type UsersStorage = User[]

export const USERS_STORAGE = '@tinnova-users-selection-v1.0.0'

export const useUsersStorage = () => {
  const [storedUsers, setStoredUsers] = useSessionStorage<UsersStorage>({
    defaultValue: [],
    key: USERS_STORAGE,
    getInitialValueInEffect: false,
    serialize: superjson.stringify,
    deserialize: (str) => (str === undefined ? [] : superjson.parse(str)),
  })

  const createUser = useCallback(
    (user: User) => {
      setStoredUsers((prev) => [...prev, user])
    },
    [setStoredUsers],
  )

  const deleteUser = useCallback(
    (id: string) => {
      setStoredUsers((prev) => prev.filter((user) => user.id !== id))
    },
    [setStoredUsers],
  )

  const editUser = useCallback(
    (user: User) => {
      setStoredUsers((prev) => {
        const index = prev.findIndex((prevUser) => prevUser.id === user.id)
        if (index === -1) return prev

        const newUsers = [...prev]
        newUsers[index] = user

        return newUsers
      })
    },
    [setStoredUsers],
  )

  return { users: storedUsers, createUser, editUser, deleteUser }
}
