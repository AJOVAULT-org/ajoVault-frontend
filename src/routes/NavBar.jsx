import React from 'react'
import { Link } from 'react-router-dom';
import GetStartedBtn from '../components/buttons/GetStartedBtn';

function NavBar() {
  return (
   <header className='nav-items'>
   <svg width="44" height="36" viewBox="0 0 44 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.0171 24.8919C0.989573 23.1683 4.30654 21.4447 6.21846 20.7984C6.48523 20.4034 7.01877 19.8504 7.01877 20.7984C7.01877 21.9834 6.75199 22.522 10.7537 25.2151C13.955 27.3695 22.4031 27.8363 26.2269 27.8004C26.9641 27.8004 34.2374 27.0514 37.1649 26.5775C37.568 26.5122 37.8887 26.4522 38.0986 26.4C39.4859 26.0553 42.2337 23.9583 43.4342 22.9529V16.0586C43.4342 14.4212 41.3889 12.8628 40.3662 12.2882L39.9661 6.04025C38.232 0.977236 24.4928 0.438618 23.2923 0.438618C22.0918 0.438618 15.6891 0.223171 10.8871 1.7313C7.04545 2.93781 4.66222 5.10664 3.9508 6.04025C3.81741 8.087 3.63067 12.3959 3.9508 13.2577C4.27094 14.1195 5.95165 15.484 6.75199 16.0586L7.01877 18.4285C7.15216 18.4285 6.83202 18.6655 4.48436 19.6134C2.1367 20.5614 0.838372 22.2347 0.482666 22.9529V30.8167C2.6169 32.7988 6.6186 34.2279 8.35267 34.6948C17.5566 36.5261 27.4274 35.4488 31.5625 34.1561C34.8706 33.122 36.6758 31.4989 37.1649 30.8167V26.5775C34.2374 27.0514 26.9641 27.8004 26.2269 27.8004C23.0256 28.0159 16.0359 28.4252 13.6883 28.3391C10.7537 28.2313 5.55151 27.0464 3.0171 24.8919ZM30.4954 18.4285C26.6538 19.5488 16.0004 18.5362 11.1539 17.8899C11.554 18.0694 12.968 18.6655 15.4223 19.6134C17.8767 20.5614 23.3813 20.7984 25.8267 20.7984C27.383 20.7984 31.5892 20.5614 35.9644 19.6134C41.4334 18.4285 40.8998 16.8126 41.5667 15.8431C42.1003 15.0675 40.7219 14.1554 39.9661 13.7964C40.0995 13.94 40.1795 14.3565 39.4325 14.8736C38.4988 15.5199 35.2974 17.0281 30.4954 18.4285ZM22.492 11.5342C13.3148 12.2236 7.81913 9.02061 6.21846 7.33293C7.2856 4.63984 9.81996 3.77805 11.9542 3.02399C14.0884 2.26992 23.2923 1.7313 27.294 2.1622C31.2957 2.59309 40.3662 4.74757 38.0986 7.33293C35.831 9.9183 33.9635 10.6724 22.492 11.5342Z" fill="#B6AAFC"/>
    <path d="M26.2269 27.8004C23.0256 28.0159 16.0359 28.4252 13.6883 28.3391C10.7537 28.2313 5.55151 27.0464 3.0171 24.8919C0.989573 23.1683 4.30654 21.4447 6.21846 20.7984C6.48523 20.4034 7.01877 19.8504 7.01877 20.7984C7.01877 21.9834 6.75199 22.522 10.7537 25.2151C13.955 27.3695 22.4031 27.8363 26.2269 27.8004ZM26.2269 27.8004C26.9641 27.8004 34.2374 27.0514 37.1649 26.5775M43.4342 16.0586C43.4342 14.4212 41.3889 12.8628 40.3662 12.2882L39.9661 6.04025C38.232 0.977236 24.4928 0.438618 23.2923 0.438618C22.0918 0.438618 15.6891 0.223171 10.8871 1.7313C7.04545 2.93781 4.66222 5.10664 3.9508 6.04025C3.81741 8.087 3.63067 12.3959 3.9508 13.2577C4.27094 14.1195 5.95165 15.484 6.75199 16.0586L7.01877 18.4285C7.15216 18.4285 6.83202 18.6655 4.48436 19.6134C2.1367 20.5614 0.838372 22.2347 0.482666 22.9529V30.8167C2.6169 32.7988 6.6186 34.2279 8.35267 34.6948C17.5566 36.5261 27.4274 35.4488 31.5625 34.1561C34.8706 33.122 36.6758 31.4989 37.1649 30.8167V26.5775M43.4342 16.0586C43.4342 17.696 43.4342 21.337 43.4342 22.9529M43.4342 16.0586V22.9529M43.4342 22.9529C42.2337 23.9583 39.4859 26.0553 38.0986 26.4C37.8887 26.4522 37.568 26.5122 37.1649 26.5775M11.1539 17.8899C16.0004 18.5362 26.6538 19.5488 30.4954 18.4285C35.2974 17.0281 38.4988 15.5199 39.4325 14.8736C40.1795 14.3565 40.0995 13.94 39.9661 13.7964C40.7219 14.1554 42.1003 15.0675 41.5667 15.8431C40.8998 16.8126 41.4334 18.4285 35.9644 19.6134C31.5892 20.5614 27.383 20.7984 25.8267 20.7984C23.3813 20.7984 17.8767 20.5614 15.4223 19.6134C12.968 18.6655 11.554 18.0694 11.1539 17.8899ZM6.21846 7.33293C7.81913 9.02061 13.3148 12.2236 22.492 11.5342C33.9635 10.6724 35.831 9.9183 38.0986 7.33293C40.3662 4.74757 31.2957 2.59309 27.294 2.1622C23.2923 1.7313 14.0884 2.26992 11.9542 3.02399C9.81996 3.77805 7.2856 4.63984 6.21846 7.33293Z" stroke="#6C55F9" stroke-opacity="0.4" stroke-width="0.171079"/>
    </svg>
    <nav className='nav-links'>
        {/* <Link to="/contactUs"><li>contact us</li></Link> */}
        {/* <Link to="/onboarding"><li>get started</li></Link> */}
        <GetStartedBtn />
    </nav>
   </header>
  )
}

export default NavBar;