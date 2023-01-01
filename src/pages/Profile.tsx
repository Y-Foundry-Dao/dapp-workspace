
import { PATH_PROFILE, PATH_PROFILE_PFP, PATH_PROFILE_PFP_SUFFIX, PATH_PROFILE_SUFFIX } from 'utilities/variables';
import useWallet from '@hooks/useWallet';
import useProfile from '@hooks/useProfile';

export default function PageHttpGet() {
  const address = useWallet();
  const profile = useProfile(address) as any;
  console.log ('loaded profile: ' + JSON.stringify(profile));

  const profileUrl = PATH_PROFILE + address + PATH_PROFILE_SUFFIX;
  const profilePfpUrl = PATH_PROFILE_PFP + address + PATH_PROFILE_PFP_SUFFIX;

  if (!profile) {
    return <p>Loading or File Missing...</p>;
  }
  
  return (
    <div>
      <br />
      <h1>Attached Wallet Profile</h1>
      <br />
      <h2>{ profile.name }</h2>
      <img src={profilePfpUrl} alt="pfp" width="100px" />
      <br /><br />
      Wallet Address: {address}
      <br /><br />
      Profile URL: {profileUrl}
      <br /><br />
      Profile PFP URL: {profilePfpUrl}
    </div>
  );

}
