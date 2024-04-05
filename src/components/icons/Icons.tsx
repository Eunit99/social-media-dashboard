import Image from 'next/image'
import React from 'react'

type IImageProps = {
  width?: number,
  height?: number
};

export const GoogleIcon = ({
  width,
  height
}: IImageProps) => {
  return (
    <Image
      src={'/icons/google-icon.svg'}
      alt={'Google icon'}
      width={width ?? 24}
      height={height ?? 24}
    />
  )
}


export const DiscountIcon = ({
  width,
  height
}: IImageProps) => {
  return (
    <Image
      src={'/icons/Discount.svg'}
      alt={'discount icon'}
      width={width ?? 24}
      height={height ?? 24}
    />
  )
}

