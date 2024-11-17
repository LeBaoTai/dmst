import { API_PORT, API_ROOT } from '@/utils/constant'

export const getNewsData = async (news: string) => {
  const newsPath = `${API_ROOT}:${API_PORT}${'/api/dmst-loai-bai-viets/slug/'}${news}`
  const response = await fetch(newsPath, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'no-cors'
  })
  const data = await response.json()
  return data
}
