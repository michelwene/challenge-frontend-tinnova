import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { ButtonSubmit, FormInput } from '~form'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  name: z.string().min(3),
  document: z.string().length(11),
  phone: z.string().length(11),
  email: z.string().email(),
})

type FormInputs = z.infer<typeof formSchema>

type Props = {
  defaultValues?: FormInputs
}

export const FormCreateOrAlterUser = ({ defaultValues }: Props) => {
  const isEditing = !!defaultValues
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  })

  const handleFormSubmit: SubmitHandler<FormInputs> = async (formData) => {
    console.log(formData)
  }

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Controller
        name='name'
        control={control}
        render={({ field }) => <FormInput {...field} />}
      />
      <Controller
        name='document'
        control={control}
        render={({ field }) => <FormInput {...field} />}
      />
      <Controller
        name='phone'
        control={control}
        render={({ field }) => <FormInput {...field} />}
      />
      <Controller
        name='email'
        control={control}
        render={({ field }) => <FormInput {...field} />}
      />
      <ButtonSubmit>
        {isEditing ? 'Editar usuário' : 'Criar usuário'}
      </ButtonSubmit>
    </form>
  )
}
