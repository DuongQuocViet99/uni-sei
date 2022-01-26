export default function FilterToMap({ data, condition, render }) {
  return <> { data?.filter( condition ).map(( i, k ) => render( i, k )) } </>
}