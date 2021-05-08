export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'Default'}</strong>
      <p>{props.repository?.description ?? 'React default'}</p>
      <a target='_blank' href={props.repository?.link ?? 'https://github.com/itallosavieira'}>access repository</a>
    </li>
  )
}