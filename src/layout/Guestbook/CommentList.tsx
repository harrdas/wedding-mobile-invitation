import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { onValue, ref } from 'firebase/database';
import { realtimeDb } from '../../firebase';
import { Heading1 } from '@/components/Text';

interface GuestbookMessage {
  id: string;
  sender: string;
  message: string;
  createdAt: number;
  date: string;
}

const GuestbookList: React.FC = () => {
  const [messages, setMessages] = useState<GuestbookMessage[]>([]);

  useEffect(() => {
    const guestbookRef = ref(realtimeDb, 'guestbook');
    const unsubscribe = onValue(guestbookRef, (snapshot) => {
      const data = snapshot.val() as Record<string, GuestbookMessage> | null;
      const messageList: GuestbookMessage[] = data
        ? Object.keys(data).map((key) => ({
            id: key,
            sender: data[key].sender,
            message: data[key].message,
            createdAt: data[key].createdAt,
            date: data[key].date,
          }))
        : [];
      setMessages(messageList);
    });

    return () => unsubscribe();
  }, []);

  return (
    <GuestbookWrapper>
      <Heading1>방명록</Heading1>
      <MessageList>
        {messages.map((message) => (
          <MessageItem key={message.id}>
            <MessageHeader>
              <Sender>{message.sender}</Sender>
              <Date>{message.date}</Date>
            </MessageHeader>
            <MessageContent>{message.message}</MessageContent>
          </MessageItem>
        ))}
      </MessageList>
    </GuestbookWrapper>
  );
};

const GuestbookWrapper = styled.div`
  margin: 20px;
`;

const MessageList = styled.ul`
  list-style: none;
  padding: 0;
`;

const MessageItem = styled.li`
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
`;

const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #555;
`;

const Sender = styled.span`
  font-weight: bold;
`;

const Date = styled.span`
  font-style: italic;
  font-size: 0.8rem;
`;

const MessageContent = styled.p`
  margin: 5px 0 0;
  font-size: 1rem;
  text-align: left;
`;

export default GuestbookList;
