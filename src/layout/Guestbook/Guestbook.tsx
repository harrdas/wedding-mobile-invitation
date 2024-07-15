import styled from '@emotion/styled';
import CommentForm from './CommentForm.tsx';
import { Heading2 } from '@/components/Text.tsx';
import GuestbookList from '@/layout/Guestbook/CommentList.tsx';

const Guestbook = () => {
  return (
    <GuestBookWrapper>
      <Heading2>축하의 메시지를 남겨주세요.</Heading2>
      <CommentForm />
      <GuestbookList />
    </GuestBookWrapper>
  );
};

export default Guestbook;

const GuestBookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 50px;

  width: 100%;

  @media (min-width: 500px) {
    width: 80%;
  }
`;
