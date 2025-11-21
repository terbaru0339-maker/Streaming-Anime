import Image from "next/image";

const API_URL = 'https://www.sankavollerei.com/anime/'

const getAnime = async () => {
  const response = await fetch (API_URL)
  const data = await response.json()
  return data.ongoing
}

export default async function home () {
  const anime = getAnime()

  return (
    
  
