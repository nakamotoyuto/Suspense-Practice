const cache = {}

export default function getPikachu(key) {
  if (!cache[key]) {
    let data
    let promise
    cache[key] = () => {
      if (data !== undefined) return data
      if (!promise) promise = getPikachuResult().then((r) => (data = r))
      throw promise
    }
  }
  return cache[key]()
}

const getPikachuFetch = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon/pikachu/'
  const res = await fetch(url)
  return res.json()
}

const getPikachuResult = () => {
  const result = getPikachuFetch()
  return  result
}
