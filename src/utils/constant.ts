import localFont from 'next/font/local'

export const SQUARE = localFont({
  src: '../fonts/squarespace-ui-font.woff',
  // variable: "--font-squarespace",
  weight: '100 900'
})

export const API_ROOT = 'http://116.109.42.111'
// export const API_ROOT = 'http://172.30.10.85'
export const API_PORT = '1337'

export const DMST_ROOT_PAHT = '/api/dmst-trang-chu'


// export const NEXT_PUBLIC_BASE_URL = 'http:localhost:3000'
export const NEXT_PUBLIC_BASE_URL = `${API_ROOT}:${API_PORT}`
