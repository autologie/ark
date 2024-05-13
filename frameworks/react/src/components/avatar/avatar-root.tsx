import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import type { Assign } from '../../types'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLArkProps, ark } from '../factory'
import { type UseAvatarProps, type UseAvatarReturn, useAvatar } from './use-avatar'
import { AvatarProvider } from './use-avatar-context'

export interface AvatarRootProps extends Assign<HTMLArkProps<'div'>, UseAvatarProps> {
  api?: UseAvatarReturn
}

export const AvatarRoot = forwardRef<HTMLDivElement, AvatarRootProps>((props, ref) => {
  const [useAvatarProps, localProps] = createSplitProps<UseAvatarProps>()(props, [
    'id',
    'ids',
    'onStatusChange',
  ])
  const avatar = props.api || useAvatar(useAvatarProps)
  const mergedProps = mergeProps(avatar.rootProps, localProps)

  return (
    <AvatarProvider value={avatar}>
      <ark.div {...mergedProps} ref={ref} />
    </AvatarProvider>
  )
})

AvatarRoot.displayName = 'AvatarRoot'
