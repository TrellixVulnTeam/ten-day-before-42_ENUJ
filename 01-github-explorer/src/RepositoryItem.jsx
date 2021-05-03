export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'Default'}</strong>
      <p>{props.repository?.description ?? 'React default'}</p>
      <a href={props.repository?.link ?? 'www.google.com/'}>access repository</a>
    </li>
  )
}