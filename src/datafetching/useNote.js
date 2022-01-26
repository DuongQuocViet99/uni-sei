import useSWR from 'swr';

const fetcher = ( ...args ) => fetch( ...args ).then( res => res.json() );

export default function useNote() {
  const { data, error } = useSWR('http://localhost:3001/note', fetcher);

  return {
    note: data,
    isNoteloading: !error && !data,
    isNoteerror: error
  };
}