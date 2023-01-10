import { Route, Routes } from 'react-router-dom';

import App from '@pages/App';
import Button from '@pages/Button';
import Connect from '@pages/Connect';
import NoMatch from '@pages/404';
import PageProfile from '@pages/Profile';
import Properties from '@pages/Properties';
import Form from '@pages/Form';
import PageArray from '@pages/Array';
import PageAxios from '@pages/Axios';
import PageFetch from '@pages/Fetch';
import PageState from '@pages/State';
import PageRecoil from '@pages/Recoil';
import PageSelectors from '@pages/Selectors';
import PageConnectWithState from '@pages/ConnectWithState';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/button" element={<Button />}></Route>
      <Route path="/connect" element={<Connect />}></Route>
      <Route path="/connect-with-state" element={<PageConnectWithState />}></Route>
      <Route path="/profile" element={<PageProfile />}></Route>
      <Route path='/props' element={<Properties />}></Route>
      <Route path='/form' element={<Form />}></Route>
      <Route path='/array' element={<PageArray />}></Route>
      <Route path='/axios' element={<PageAxios />}></Route>
      <Route path='/fetch' element={<PageFetch />}></Route>
      <Route path='/state' element={<PageState />}></Route>
      <Route path='/selectors' element={<PageSelectors />}></Route>
      <Route path='/recoil' element={<PageRecoil />}></Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
