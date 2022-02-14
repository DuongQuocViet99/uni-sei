import useSWR from 'swr';

const fetcher = ( ...args ) => fetch( ...args ).then( res => res.json() );

export default function useProcess() {
  const { data, error } = useSWR('http://localhost:3001/process', fetcher);

  return {
    process: data,
    isProcessloading: !error && !data,
    isProcesserror: error
  };
}