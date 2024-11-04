/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import styled from 'styled-components';
import RobotAiIcon from '@src/components/SVGIcons/RobotAiIcon';
import CloseIcon from '@src/components/SVGIcons/CloseIcon';

interface ChatHeaderProps {
  onClose: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onClose }) => {
  return (
    <Header>
      <RobotAiIcon />
      <TitleContainer>
        <Title>AI Companion</Title>
        <StatusContainer>
          <StatusDot />
          <StatusText>Online</StatusText>
        </StatusContainer>
      </TitleContainer>
      <CloseButton onClick={onClose}>
        <CloseIcon />
      </CloseButton>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: 2;
  letter-spacing: -0.18px;
  margin: 0;
`;

const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StatusDot = styled.span`
  background-color: #2ad162;
  border-radius: 50%;
  width: 8px;
  height: 8px;
`;

const StatusText = styled.span`
  color: #2ad162;
  font-size: 10px;
  line-height: 1.6;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export default ChatHeader;