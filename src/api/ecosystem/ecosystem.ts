import { API_PORT, API_ROOT } from '@/utils/constant'

export const getEcosystemData = async (system: string) => {
  const ecosystemPath = `${API_ROOT}:${API_PORT}${'/api/dmst-he-sinh-thais/slug/'}${system}`
  const response = await fetch(ecosystemPath, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  return data
}
