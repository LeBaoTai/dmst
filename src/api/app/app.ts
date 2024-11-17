import { API_ROOT, API_PORT, DMST_ROOT_PAHT } from '@/utils/constant'

export const getAppData = async () => {
  const appDataPath = `${API_ROOT}:${API_PORT}${DMST_ROOT_PAHT}`
  const response = await fetch(appDataPath, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  return data
}
