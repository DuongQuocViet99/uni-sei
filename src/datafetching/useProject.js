import useSWR from 'swr';

const fetcher = ( ...args ) => fetch( ...args ).then( res => res.json() );

export default function useProject( projectid = '' ) {
  const { data, error } = useSWR(`http://localhost:3001/project/${ projectid }`, fetcher);

  return {
    project: data,
    isProjectloading: !error && !data,
    isProjecterror: error
  };
}