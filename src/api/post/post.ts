import { API_ROOT, API_PORT, DMST_ROOT_PAHT } from '@/utils/constant'

export const getPostData = async (post: string) => {
  const postPath = `${API_ROOT}:${API_PORT}${'/api/dmst-bai-viets/slug/'}${post}`
  const response = await fetch(postPath, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  return data
}