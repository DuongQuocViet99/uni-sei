import useSWR from 'swr';

const fetcher = ( ...args ) => fetch( ...args ).then( res => res.json() );

export default function useUser( projectid = '' ) {
  const { data, error } = useSWR(`http://localhost:3001/user/${ projectid }`, fetcher);

  return {
    user: data,
    isUserloading: !error && !data,
    isUsererror: error
  };
}