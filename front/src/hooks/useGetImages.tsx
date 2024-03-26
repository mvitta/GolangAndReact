import { useState, useEffect } from 'react'

export interface ResponseAPIImages {
  results: Result[]
}

export interface Result {
  image: string
  by: string
  download?: string
  source: string
  diffrentSizes: string[]
  id: string
}

export default async function useGetImages() {
  const API_URL = new URL('http://localhost:8080/images')
  try {
    const response = await fetch(API_URL)
    const data: ResponseAPIImages = await response.json()
    return data
  } catch (error) {
    console.error('Error: ', error)
  }
}
