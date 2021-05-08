interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    svn_url: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      <a target='_blank' href={props.repository.svn_url}>access repository</a>
    </li>
  )
}