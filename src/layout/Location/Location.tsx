import styled from '@emotion/styled';
import data from 'data.json';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
import { Caption, PointTitle } from '@/components/Text.tsx';

const Location = () => {
  const { mapInfo } = data;
  return (
    <LocationWrapper>
      <PointTitle>{mapInfo.address1}</PointTitle>
      <Caption textAlign={'center'}>{mapInfo.address2}</Caption>
      <Map />
      <MapButtons />
      <Address />
      <a
        href="https://blog.naver.com/goocan_official/222783882883"
        target="_blank"
        rel="noreferrer">
        오시는 길 자세한 글 링크
      </a>
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
