import styled from '@emotion/styled';
import data from 'data.json';
import { Caption } from '@/components/Text';

export default function DressCode() {
  const { greeting } = data;
  return (
    <DressCodeWrapper>
      <Caption textAlign={'center'}>{greeting.dressCode}</Caption>
    </DressCodeWrapper>
  );
}

const DressCodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
