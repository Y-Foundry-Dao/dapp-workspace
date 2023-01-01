import React, { useState, useEffect } from 'react';
import { PATH_PROFILE, PATH_PROFILE_PFP, PATH_PROFILE_PFP_SUFFIX, PATH_PROFILE_SUFFIX } from 'utilities/variables';
import useWallet from '@hooks/useWallet';
import { walletAddress } from '@recoil/atoms';

type MyProfile = {
  name: string;
  address: string;
  platform_preference: string;
  platformAddress: string;
  platforms: Array<{
    email: string;
    keybase: string;
    instagram: string;
    twitter: string;
    discord: string;
    telegram: string;
    github: string;
  }>;
};

const myProfileState: MyProfile = {
    name: '',
    address: '',
    platform_preference: '',
    platformAddress: '',
    platforms: [
      {
        email: '',
        keybase: '',
        instagram: '',
        twitter: '',
        discord: '',
        telegram: '',
        github: ''
      }]
};

export default function PageHttpGet() {
  const address = useWallet();
  console.log('fetch test wallet: ' + address);
  const [renderCount, setRenderCount] = useState(0);
  const [myProfile, setMyProfile] = useState(myProfileState);
  const profileUrl = PATH_PROFILE + address + PATH_PROFILE_SUFFIX;
  const profilePfpUrl = PATH_PROFILE_PFP + address + PATH_PROFILE_PFP_SUFFIX;
  const [myPlatformPreference, setMyPlatformPreference] = useState('');
  const [myPlatformAddress, setMyPlatformAddress] = useState('');

  if(address) {
    console.log('address is set', address);
  } else {
    console.log('address is not set');
  }

  useEffect(() => {
    setRenderCount(prevRenderCount => prevRenderCount + 1);
    console.log('fetch profileUrl: ' + profileUrl);
    console.log('fetch profilePfpUrl: ' + profilePfpUrl);

    async function getData() {
      try {
        const response = await fetch(profileUrl);
        const data = await response.json();
        console.log('fetch data: ' + JSON.stringify(data));
        setMyProfile(data.profile);
        const platformAddress = data.profile.platforms[myPlatformPreference];
        setMyProfile(prevMyProfile => ({
          ...prevMyProfile, platformAddress: platformAddress
        }));
        console.dir('profile after updates: ' + JSON.stringify(myProfile));
      } catch (error) {
        console.error(error);
      }
    }
    
    getData();
    console.log('fetch myProfile: ' + JSON.stringify(myProfile));
    setMyPlatformPreference(myProfile.platform_preference);
    console.log('myPlatformPreference: ' + myPlatformPreference);


  }, [address]);

  if (!myProfile) {
    return <p>Loading or File Missing...</p>;
  }

  return (
    <div>Fetch Test
      <h3>Render Count: {renderCount}</h3>

      {myProfile && (
        <p>
          <h1>{ myProfile.name } </h1>
          <img src={profilePfpUrl} alt="pfp" width="100px" />
          <p> 
            { myPlatformPreference } is your preferred platform 
            <br />
            with address: { myProfile.platformAddress }
            <br />
          </p>
          <br />
        </p>
      )}
    </div>
  );

}
