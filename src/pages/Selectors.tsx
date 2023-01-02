import BalancefYFD from "@components/BalancefYFD";
import BalanceYFD from "@components/BalanceYFD";
import GovernanceParameterList from "@components/GovernanceParameterList";

export default function PageSelectors() {

  return (
    <div>
      <BalanceYFD />
      <BalancefYFD />
      <GovernanceParameterList />
    </div>
  )
}
