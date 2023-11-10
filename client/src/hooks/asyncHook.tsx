import { useCallback, useEffect, useState } from 'react';

import { IFilm } from '../types/film.model';

// asynchronous data get function
export const fetchFilm = (id: string) => {
  return fetch(`http://localhost:4000/movies/${id}`).then(response =>
    response.json()
  );
};

export const useAsync = (asyncFunction: (id: string) => any, id: string) => {
  const [value, setValue] = useState<IFilm | string>(
    (undefined as unknown) as IFilm
  );

  const execute = useCallback(
      (id: string) => {
      return asyncFunction(id)
        .then((response: IFilm) => {
          setValue(response);
        })
        .catch((error: Error) => {
          console.error(error);
          setValue('not-found');
        });
    },
    [asyncFunction]
  );

  useEffect(() => {
    if (id) {
      execute(id);
    }
  }, [execute, id]);

  return value;
};
