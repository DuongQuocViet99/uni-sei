import useSWR from 'swr';

const fetcher = ( ...args ) => fetch( ...args ).then( res => res.json() );

export default function useTeam( projectid = '' ) {
  const { data, error } = useSWR(`http://localhost:3001/team/${ projectid }`, fetcher);

  return {
    team: data,
    isTeamloading: !error && !data,
    isTeamerror: error
  };
}