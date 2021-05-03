import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'unform',
  description: 'React form',
  link: 'www.itallosa.dev',
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Repository List</h1>
      <ul>
        <RepositoryItem 
          repository={repository}
        />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  )
};