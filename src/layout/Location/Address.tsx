import styled from '@emotion/styled';
import data from 'data.json';
import { Caption, PointTitle } from '@/components/Text.tsx';
import { ILocationInfo } from '@/types/data.ts';

const Address = () => {
  const { locationInfo } = data;
  return (
    <WayWrapper>
      {locationInfo?.map((item: ILocationInfo) => {
        const { title, desc } = item;
        return (
          <Way key={title}>
            <PointTitle>{title}</PointTitle>
            <Caption textAlign="center">{desc}</Caption>
          </Way>
        );
      })}
    </WayWrapper>
  );
};

export default Address;

const WayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0px;
  gap: 20px;
`;

const Way = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
