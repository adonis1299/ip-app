import { SvgIcon, SvgIconProps } from '@mui/material'
import { forwardRef } from 'react'

export const StarIcon = forwardRef<SVGSVGElement, SvgIconProps>(
  (props, ref) => {
    const {
      width = 22,
      height = 22,
      fill = '#5E64F4',
      stroke = '#5E64F4',
    } = props

    return (
      <SvgIcon {...props} ref={ref} viewBox="0 0 22 22" fill={fill}>
        <path
          d="M10.9346 2.927C11.2315 2.006 12.521 2.006 12.8169 2.927L14.3202 7.601C14.3848 7.80149 14.5106 7.97618 14.6795 8.10011C14.8483 8.22403 15.0516 8.29085 15.2603 8.291H20.1244C21.0833 8.291 21.4812 9.531 20.7063 10.101L16.7715 12.989C16.6025 13.1132 16.4767 13.2882 16.4121 13.489C16.3476 13.6899 16.3476 13.9062 16.4122 14.107L17.9145 18.781C18.2114 19.703 17.1673 20.469 16.3925 19.899L12.4577 17.011C12.2885 16.8868 12.0848 16.8199 11.8758 16.8199C11.6667 16.8199 11.463 16.8868 11.2938 17.011L7.35905 19.899C6.58416 20.469 5.54009 19.702 5.83698 18.781L7.33925 14.107C7.40385 13.9062 7.40389 13.6899 7.33936 13.489C7.27483 13.2882 7.14904 13.1132 6.98001 12.989L3.04522 10.101C2.26934 9.531 2.66916 8.291 3.62712 8.291H8.4902C8.69906 8.29106 8.90259 8.22434 9.07164 8.1004C9.24069 7.97646 9.3666 7.80165 9.43135 7.601L10.9346 2.927V2.927Z"
          stroke={stroke}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SvgIcon>
    )
  }
)
