import { API_ROOT, API_PORT, DMST_ROOT_PAHT } from '@/utils/constant'

export const getNewsData = async (news: string) => {
  const newsPath = `${API_ROOT}:${API_PORT}${'/api/dmst-loai-bai-viets/slug/'}${news}`
  const response = await fetch(newsPath, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  return data
}
