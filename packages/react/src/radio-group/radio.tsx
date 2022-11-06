import { forwardRef } from '@polymorphic-factory/react'
import { mergeProps } from '@zag-js/react'
import { ark, HTMLArkProps } from '../factory'
import { RadioContext, RadioProvider } from './radio-context'
import { useRadioGroupContext } from './radio-group-context'

export type RadioProps = Omit<HTMLArkProps<'label'>, keyof RadioContext> & RadioContext

export const Radio = forwardRef<'label', RadioProps>((props, ref) => {
  const { value, disabled, invalid, readonly, ...divProps } = props
  const { getItemProps } = useRadioGroupContext()
  const mergedProps = mergeProps(getItemProps({ value, disabled }), divProps)

  return (
    <RadioProvider value={{ value, disabled, invalid, readonly }}>
      <ark.label {...mergedProps} ref={ref} />
    </RadioProvider>
  )
})
