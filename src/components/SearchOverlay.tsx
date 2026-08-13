import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

const Overlay = styled.div<{ $isOpen?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(249, 244, 235, 0.98);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transition: opacity 0.3s ease;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.charcoal};
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 20px;
    right: 20px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: center;
`;

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 30px;
`;

const InputWrap = styled.div`
  position: relative;
  border-bottom: 2px solid ${({ theme }) => theme.colors.charcoal};
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  padding: 15px 0;
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.sans};
  color: ${({ theme }) => theme.colors.charcoal};
  outline: none;

  ::placeholder {
    color: rgba(44, 34, 30, 0.3);
  }
`;

const SubmitBtn = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.charcoal};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 24px;
  }
`;

const Suggestions = styled.ul`
  display: flex;
  justify-content: center;
  gap: 15px;
  list-style: none;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const SuggestionLink = styled.a`
  color: ${({ theme }) => theme.colors.charcoal};
  text-decoration: none;
  font-weight: 600;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

function SearchOverlay({ isOpen, onClose }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Short delay for input focus to ensure transition rendering is complete
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <Overlay $isOpen={isOpen}>
      <CloseBtn onClick={onClose} aria-label="Close Search">
        <Icon icon="ph:x" />
      </CloseBtn>
      <Container>
        <Title>Search our boutique</Title>
        <InputWrap>
          <Input 
            ref={inputRef}
            type="text" 
            placeholder="Search for clothing, accessories..." 
            aria-label="Search catalog"
          />
          <SubmitBtn aria-label="Submit Search">
            <Icon icon="ph:magnifying-glass" />
          </SubmitBtn>
        </InputWrap>
        <Suggestions>
          <li>Suggestions:</li>
          <li><SuggestionLink href="#shop" onClick={onClose}>Sets</SuggestionLink></li>
          <li><SuggestionLink href="#shop" onClick={onClose}>Onesies</SuggestionLink></li>
          <li><SuggestionLink href="#shop" onClick={onClose}>Accessories</SuggestionLink></li>
          <li><SuggestionLink href="#shop" onClick={onClose}>Summer Collection</SuggestionLink></li>
        </Suggestions>
      </Container>
    </Overlay>
  );
}

export default SearchOverlay;
