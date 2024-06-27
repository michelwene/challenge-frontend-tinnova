import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import type { SubmitHandler } from 'react-hook-form'
import { Controller, useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import type { z } from 'zod'

import { ButtonSubmit, FormInput, FormItem } from '~form'
import { useNotification, useUsersStorage } from '~hooks'
import { maskCpf, maskPhoneNumber, unMaskValue } from '~utils'

import { formSchema } from './schema'
import * as S from './styles'

type FormInputs = z.infer<typeof formSchema>

type Props = {
  defaultValues?: FormInputs & { id: string }
}

export const FormCreateOrAlterUser = ({ defaultValues }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  })

  const { createUser, editUser } = useUsersStorage()

  const { showNotification } = useNotification()

  const isEditing = !!defaultValues

  const handleFormSubmit: SubmitHandler<FormInputs> = (formData) => {
    setIsLoading(true)
    const data = {
      ...formData,
      id: isEditing ? defaultValues.id : uuidv4(),
      cpf: unMaskValue(formData.cpf),
      phone: unMaskValue(formData.phone),
    }

    if (isEditing) {
      setTimeout(() => {
        editUser(data)
        showNotification({
          message: 'Usuário editado com sucesso!',
          type: 'success',
        })
        setIsLoading(false)
      }, 200)
      return
    }

    setTimeout(() => {
      createUser(data)
      showNotification({
        message: 'Usuário criado com sucesso!',
        type: 'success',
      })
      reset({
        name: '',
        cpf: '',
        phone: '',
        email: '',
      })
      setIsLoading(false)
    }, 200)
  }

  const buttonSubmitText = isEditing ? 'Editar' : 'Cadastrar'
  const hasErrors = Object.keys(errors).length > 0

  return (
    <S.Form onSubmit={handleSubmit(handleFormSubmit)}>
      <FormItem error={errors.name?.message}>
        <Controller
          name='name'
          control={control}
          render={({ field: { name, onChange, ref, value } }) => (
            <FormInput
              autoComplete='off'
              disabled={isLoading}
              error={!!errors.name?.message}
              label='Nome completo (sem abreviações)'
              name={name}
              onChange={onChange}
              ref={ref}
              value={value}
            />
          )}
        />
      </FormItem>
      <FormItem error={errors.email?.message}>
        <Controller
          name='email'
          control={control}
          render={({ field: { name, onChange, ref, value } }) => (
            <FormInput
              autoComplete='off'
              disabled={isLoading}
              error={!!errors.email?.message}
              label='E-mail'
              name={name}
              onChange={onChange}
              ref={ref}
              value={value}
            />
          )}
        />
      </FormItem>
      <FormItem error={errors.cpf?.message}>
        <Controller
          name='cpf'
          control={control}
          render={({ field: { name, onChange, ref, value } }) => (
            <FormInput
              autoComplete='off'
              disabled={isLoading}
              error={!!errors.cpf?.message}
              label='CPF'
              name={name}
              onChange={(event) => onChange(maskCpf(event.target.value))}
              ref={ref}
              value={value}
            />
          )}
        />
      </FormItem>
      <FormItem error={errors.phone?.message}>
        <Controller
          name='phone'
          control={control}
          render={({ field: { name, onChange, ref, value } }) => (
            <FormInput
              autoComplete='off'
              disabled={isLoading}
              error={!!errors.phone?.message}
              label='Telefone'
              name={name}
              onChange={(event) =>
                onChange(maskPhoneNumber(event.target.value))
              }
              ref={ref}
              value={value}
            />
          )}
        />
      </FormItem>
      <ButtonSubmit disabled={hasErrors} loading={isLoading}>
        {buttonSubmitText}
      </ButtonSubmit>
    </S.Form>
  )
}
