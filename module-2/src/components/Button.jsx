export default function Button({ onSmash, children }) {
  return <button onClick={onSmash}>{children}</button>;
}
