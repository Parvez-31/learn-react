export default function Cup({ guest }) {
  // Bad: changing a preexisting variable!
  return <h2>Tea cup for guest #{guest}</h2>;
}
