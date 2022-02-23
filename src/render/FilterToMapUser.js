export default function FilterToMapUser({ data, condition, render, Chil, propsChil }) {
  return <Chil { ...propsChil }> { data?.filter( condition ).map(( i, k ) => render( i, k )) } </Chil>
}