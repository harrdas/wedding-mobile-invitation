import { useEffect, useRef, useState } from 'react';
import { NavermapsProvider } from 'react-naver-maps';
import { Heading1 } from '@/components/Text.tsx';
import Wrapper from '@/components/Wrapper.tsx';
import Account from '@/layout/Account/Account.tsx';
import Container from '@/layout/Container.tsx';
import DressCode from '@/layout/DressCode/DressCode';
import FloatingBar from '@/layout/FloatingBar/FloatingBar.tsx';
import GalleryWrap from '@/layout/Gallery/GalleryWrap.tsx';
import Guestbook from '@/layout/Guestbook/Guestbook.tsx';
import Invitation from '@/layout/Invitation/Invitation.tsx';
import Location from '@/layout/Location/Location.tsx';
import Main from '@/layout/Main/Main.tsx';
import Schedule from '@/layout/Schedule/Schedule';

function App() {
  const ncpClientId = import.meta.env.VITE_APP_NAVERMAPS_CLIENT_ID;
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  const checkScrollPosition = () => {
    if (galleryRef.current) {
      const { offsetTop } = galleryRef.current;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= offsetTop) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  return (
    <NavermapsProvider ncpClientId={ncpClientId}>
      <Container>
        <Wrapper>
          <Main />
        </Wrapper>
        <Wrapper>
          <Heading1>모시는 글</Heading1>
          <Invitation />
        </Wrapper>
        <Wrapper>
          <Heading1>위치 및 시간</Heading1>
          <Schedule />
        </Wrapper>
        <Wrapper>
          <Heading1>드레스 코드</Heading1>
          <DressCode />
        </Wrapper>
        <Wrapper ref={galleryRef}>
          <Heading1>Gallery</Heading1>
          <GalleryWrap />
        </Wrapper>
        <Wrapper>
          <Heading1>마음 전하실 곳</Heading1>
          <Account />
        </Wrapper>
        <Wrapper>
          <Heading1>오시는 길</Heading1>
          <Location />
        </Wrapper>
        <Wrapper>
          <Heading1>신랑 신부에게</Heading1>
          <Guestbook />
        </Wrapper>
        <FloatingBar isVisible={isVisible} />
      </Container>
    </NavermapsProvider>
  );
}

export default App;
