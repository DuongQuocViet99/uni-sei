import useSWR from 'swr';

const fetcher = ( ...args ) => fetch( ...args ).then( res => res.json() );

export default function useAction() {
  const { data, error } = useSWR('http://localhost:3001/action', fetcher);

  return {
    action: data,
    isActionloading: !error && !data,
    isActionerror: error
  };
}