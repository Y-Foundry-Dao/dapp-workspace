import { allGovernanceParametersQuery } from '@recoil/selectors'
import { useRecoilValueLoadable } from 'recoil'

export default function GovernanceParameterList() {
  const allGovernanceParametersLoadable = useRecoilValueLoadable(allGovernanceParametersQuery)
  switch (allGovernanceParametersLoadable.state) {
    case 'hasValue':
      return ( <ol>
      {allGovernanceParametersLoadable.contents.map((governanceParameter: string) => {
        return (<li>{governanceParameter}</li>)
      })}
    </ol>);
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw allGovernanceParametersLoadable.contents;
  }
}
