import { NextResponse } from 'next/server'

export async function GET() {
  const API_URL = 'http://116.109.42.111:1337/api/dmst-trang-chu' // Your HTTP API URL

  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch API: ${response.statusText}`)
    }

    const data = await response.json()

    return NextResponse.json(data, {
      status: 200
    })
  } catch (error) {
    console.error('Error proxying API:', (error as Error).message)
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    )
  }
}
