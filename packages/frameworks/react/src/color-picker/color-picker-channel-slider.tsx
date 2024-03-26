import type { ChannelProps } from '@zag-js/color-picker'
import { mergeProps } from '@zag-js/react'
import { forwardRef } from 'react'
import { createSplitProps } from '../create-split-props'
import { ark, type HTMLArkProps } from '../factory'
import type { Assign } from '../types'
import { ColorPickerChannelSliderProvider } from './use-color-picker-channel-slider-context'
import { useColorPickerContext } from './use-color-picker-context'

export interface ColorPickerChannelSliderProps extends Assign<HTMLArkProps<'div'>, ChannelProps> {}

export const ColorPickerChannelSlider = forwardRef<HTMLDivElement, ColorPickerChannelSliderProps>(
  (props, ref) => {
    const [channelProps, localProps] = createSplitProps<ChannelProps>()(props, [
      'channel',
      'orientation',
    ])
    const context = useColorPickerContext()
    const mergedProps = mergeProps(context.getChannelSliderProps(channelProps), localProps)

    return (
      <ColorPickerChannelSliderProvider value={channelProps}>
        <ark.div {...mergedProps} ref={ref} />
      </ColorPickerChannelSliderProvider>
    )
  },
)

ColorPickerChannelSlider.displayName = 'ColorPickerChannelSlider'
