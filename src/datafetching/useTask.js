import useSWR from 'swr';

const fetcher = ( ...args ) => fetch( ...args ).then( res => res.json() );

export default function useTask() {
  const { data, error } = useSWR('http://localhost:3001/task/', fetcher);

  return {
    task: data,
    isTaskloading: !error && !data,
    isTaskerror: error
  };
}