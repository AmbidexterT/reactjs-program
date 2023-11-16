import { useNavigate, useLocation } from 'react-router-dom';

export default function useQuery () {
  const navigate = useNavigate();
  const location = useLocation();
  const currentQuery = new URLSearchParams(location.search);

  const addQuery = (key: string, value: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(key, value);
    navigate({ search: '?' + searchParams.toString() });
  };

  const removeQuery = (key: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete(key);
    navigate({ search: '?' + searchParams.toString() });
  };

  return { currentQuery, addQuery, removeQuery };
}
