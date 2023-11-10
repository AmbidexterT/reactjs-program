import { useCallback, useEffect, useState } from 'react';

import { IFilm } from '../types/film.model';

// asynchronous data get function
export const fetchFilm = () => {
  const id = 354912;
  return fetch(`http://localhost:4000/movies/${id}`).then(response =>
    response.json()
  );
};

export const useAsync = (asyncFunction: () => any) => {
  const [value, setValue] = useState<IFilm>((undefined as unknown) as IFilm);

  const execute = useCallback(() => {
    return asyncFunction()
      .then((response: IFilm) => {
        setValue(response);
      })
      .catch((error: Error) => {
        console.error(error);
      });
  }, [asyncFunction]);

  useEffect(() => {
    execute();
  }, [execute]);

  return value;
};
