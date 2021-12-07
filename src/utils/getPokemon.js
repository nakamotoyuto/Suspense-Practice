const wrapPromise = (promise) => {
  let status = 'pending';
  let result;

  const suspender = promise.then(
    (r) => {
      status = 'fulfilled';
      result = r;
    },
    (e) => {
      status = 'rejected';
      result = e;
    });

  const read = () => {
    if (status === 'pending') {
      throw suspender;
    } else if (status === 'rejected') {
      throw result;
    } else {
      return result;
    }
  }

  return { read };
}

const getPokemonFetch = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon'
  const res = await fetch(url)
  return res.json()
}

export const getPokemon = () => {
  const result = getPokemonFetch()
  return wrapPromise(result);
}

