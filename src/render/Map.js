export default function Map({ data, render }) {
  return <>{ data?.map(( i, k ) => render( i, k )) }</>
}