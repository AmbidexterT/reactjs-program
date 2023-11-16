import { useRouter } from 'next/router';

export default function useQuery() {
  const router = useRouter();
  const currentQuery = new URLSearchParams(Object.entries(router.query).map(([key, val]) => [key, String(val)]));

  const addQuery = (key: string, value: string) => {
    const searchParams = new URLSearchParams(Object.entries(router.query).map(([key, val]) => [key, String(val)]));
    searchParams.set(key, value);
    router.push({
      pathname: router.pathname,
      query: Object.fromEntries(searchParams),
    });
  };

  const removeQuery = (key: string) => {
    const searchParams = new URLSearchParams(Object.entries(router.query).map(([key, val]) => [key, String(val)]));
    searchParams.delete(key);
    router.push({
      pathname: router.pathname,
      query: Object.fromEntries(searchParams),
    });
  };

  return { currentQuery, addQuery, removeQuery };
}
