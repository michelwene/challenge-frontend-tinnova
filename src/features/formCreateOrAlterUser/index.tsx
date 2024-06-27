import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { isCPF, isPhone } from 'brazilian-values'
import type { SubmitHandler } from 'react-hook-form'
import { Controller, useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { z } from 'zod'

import { ButtonSubmit, FormInput, FormItem } from '~form'
import { useNotification, useUsersStorage } from '~hooks'
import { maskDocument, maskPhoneNumber } from '~utils'

import * as S from './styles'
const formSchema = z.object({
  name: z
    .string({
      required_error: 'Nome é obrigatório',
    })
    .min(3, 'Campo deve conter 3 caracteres ou mais'),
  document: z
    .string({
      required_error: 'CPF é obrigatório',
    })
    .refine((value) => {
      return isCPF(value)
    }, 'CPF inválido'),
  phone: z
    .string({
      required_error: 'Telefone é obrigatório',
    })
    .refine((value) => {
      return isPhone(value)
    }, 'Telefone inválido'),
  email: z
    .string({
      required_error: 'E-mail é obrigatório',
    })
    .email('E-mail inválido'),
})

type FormInputs = z.infer<typeof formSchema>

type Props = {
  defaultValues?: FormInputs
}

export const FormCreateOrAlterUser = ({ defaultValues }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const isEditing = !!defaultValues
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  })

  const { createUser } = useUsersStorage()

  const { showNotification } = useNotification()

  const handleFormSubmit: SubmitHandler<FormInputs> = (formData) => {
    setIsLoading(true)
    setTimeout(() => {
      createUser({
        ...formData,
        id: uuidv4(),
      })
      showNotification({
        message: 'Usuário criado com sucesso!',
        type: 'success',
      })
      reset({
        name: '',
        document: '',
        phone: '',
        email: '',
      })
      setIsLoading(false)
    }, 200)
  }

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
      <FormItem error={errors.document?.message}>
        <Controller
          name='document'
          control={control}
          render={({ field: { name, onChange, ref, value } }) => (
            <FormInput
              autoComplete='off'
              disabled={isLoading}
              error={!!errors.document?.message}
              label='CPF'
              name={name}
              onChange={(event) => onChange(maskDocument(event.target.value))}
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
        {isEditing ? 'Editar usuário' : 'Cadastrar'}
      </ButtonSubmit>
    </S.Form>
  )
}
