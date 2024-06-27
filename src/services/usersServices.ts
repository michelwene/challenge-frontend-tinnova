import axios from 'axios'
import { toast } from 'react-toastify'

import type { User } from 'src/@types/users'

class UsersService {
  async getUsers(): Promise<User[]> {
    try {
      const { data } = await axios.get(
        'https://private-9d65b3-tinnova.apiary-mock.com/users',
      )
      return data
    } catch {
      toast('Error getting users', {
        type: 'error',
      })
      throw new Error('Error getting users')
    }
  }
}

export const usersService = new UsersService()
