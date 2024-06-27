import { useRouter } from 'next/router'

import { useUsersStorage } from '~hooks'
import { PageLayout } from '~layout'

import { FormCreateOrAlterUser } from 'src/features'

export default function EditUser() {
  const router = useRouter()
  const { users } = useUsersStorage()

  const userById = users.find((user) => user.id === router.query.id)

  return (
    <PageLayout>
      <FormCreateOrAlterUser
        defaultValues={{
          name: userById?.name || '',
          document: userById?.document || '',
          id: userById?.id || '',
          email: userById?.email || '',
          phone: userById?.phone || '',
        }}
      />
    </PageLayout>
  )
}
