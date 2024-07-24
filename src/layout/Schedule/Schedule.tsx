import styled from '@emotion/styled';
import data from 'data.json';
import { Caption } from '@/components/Text';

export default function Schedule() {
  const { greeting } = data;
  return (
    <ScheduleWrapper>
      <Caption textAlign={'center'}>{greeting.eventDetail}</Caption>
    </ScheduleWrapper>
  );
}

const ScheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 20px; */
`;
