import { PropsWithChildren } from 'react'
import { FormProvider as Form, SubmitHandler, UseFormReturn } from 'react-hook-form'

export interface Props extends PropsWithChildren {
  methods: UseFormReturn<any>
  onSubmit: SubmitHandler<any>
  fullWidth?: boolean
  className?: string
}

export const RHFFormProvider = (props: Props) => {
  const { methods, onSubmit, children, fullWidth, className, ...restOfProps } = props
  const { handleSubmit } = methods

  return (
    <Form {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${fullWidth ? 'w-full' : ''} ${className}`}
        {...restOfProps}
      >
        {children}
      </form>
    </Form>
  )
}
