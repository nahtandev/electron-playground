import localFont from 'next/font/local'

export const geistMono = localFont({
  src: [
    {
      path: './GeistMono-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './GeistMono-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './GeistMono-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './GeistMono-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './GeistMono-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './GeistMono-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './GeistMono-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './GeistMono-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './GeistMono-Black.ttf',
      weight: '900',
      style: 'normal',
    }
  ],
  variable: '--font-geist-mono',
  display: 'swap'
})
