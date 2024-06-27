import { useCallback, useLayoutEffect } from 'react'

import { useLocalStorage } from '@mantine/hooks'
import superjson from 'superjson'
import { v4 as uuidv4 } from 'uuid'

import type { User } from 'src/@types/users'
import { usersService } from 'src/services'
type UsersStorage = User[]

export const USERS_STORAGE = '@tinnova-users-selection-v1.0.0'

export const useUsersStorage = () => {
  const [storedUsers, setStoredUsers] = useLocalStorage<UsersStorage>({
    key: USERS_STORAGE,
    getInitialValueInEffect: false,
    serialize: superjson.stringify,
    deserialize: (str) => (str === undefined ? [] : superjson.parse(str)),
  })

  const createUser = useCallback(
    (user: User) => {
      setStoredUsers((prev) => (prev ? [...prev, user] : [user]))
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

  useLayoutEffect(() => {
    if (!storedUsers) {
      void (async () => {
        const data = await usersService.getUsers()

        setStoredUsers(data.map((user) => ({ ...user, id: uuidv4() })))
      })()
    }
  }, [setStoredUsers, storedUsers])

  return { users: storedUsers, createUser, editUser, deleteUser }
}
