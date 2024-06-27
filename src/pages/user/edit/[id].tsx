import { useRouter } from 'next/router'

import { FormCreateOrAlterUser } from '~features'
import { useUsersStorage } from '~hooks'
import { PageLayout } from '~layout'

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
          email: userById?.email || '',
          phone: userById?.phone || '',
        }}
      />
    </PageLayout>
  )
}
