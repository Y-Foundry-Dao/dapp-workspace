import { balancefYFDQuery } from "@recoil/selectors";
import { useRecoilValueLoadable } from "recoil";

export default function BalancefYFD() {
  const balancefYFDLoadable = useRecoilValueLoadable(balancefYFDQuery)
  switch (balancefYFDLoadable.state) {
    case 'hasValue':
      return ( <div>
      fYFD Balance: {balancefYFDLoadable.contents}
    </div>);
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw balancefYFDLoadable.contents;
  }
}
