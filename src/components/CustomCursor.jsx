import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const CursorWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const Dot = styled.div.attrs(({ $x, $y }) => ({
  style: {
    transform: `translate3d(${$x - 3}px, ${$y - 3}px, 0)`
  }
}))`
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  transition: width 0.3s ease, height 0.3s ease;
  will-change: transform;
`;

const Ring = styled.div.attrs(({ $x, $y, $size }) => ({
  style: {
    width: `${$size}px`,
    height: `${$size}px`,
    transform: `translate3d(${$x - $size / 2}px, ${$y - $size / 2}px, 0)`
  }
}))`
  position: absolute;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform, width, height;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  overflow: hidden;
`;

const Label = styled.span`
  color: ${({ theme }) => theme.colors.charcoal};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.55rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transition: opacity 0.2s ease;
`;

function CustomCursor() {
  const [mouse, setMouse] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [type, setType] = useState('default'); // 'default', 'view', 'drag', 'link'
  const requestRef = useRef();

  // Trail physics animation
  useEffect(() => {
    const animate = () => {
      setTrail((prev) => {
        const dx = mouse.x - prev.x;
        const dy = mouse.y - prev.y;
        return {
          x: prev.x + dx * 0.15, // Damping factor
          y: prev.y + dy * 0.15
        };
      });
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [mouse]);

  // Track mouse coordinates
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Delegation of hover states
  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor], a, button, .swatch, .qty-btn');
      if (!target) {
        setType('default');
        return;
      }

      const cursorAttr = target.getAttribute('data-cursor');
      if (cursorAttr) {
        setType(cursorAttr);
      } else {
        setType('link'); // Default interactive zoom
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  // Determine size and styling of cursor ring
  let size = 20;
  let showLabel = false;
  let labelText = '';

  if (type === 'view') {
    size = 70;
    showLabel = true;
    labelText = 'view';
  } else if (type === 'drag') {
    size = 70;
    showLabel = true;
    labelText = 'drag';
  } else if (type === 'link') {
    size = 40;
  }

  // Avoid showing cursor off-screen at initialization
  if (mouse.x === -100) return null;

  return (
    <CursorWrapper>
      <Dot $x={mouse.x} $y={mouse.y} />
      <Ring $x={trail.x} $y={trail.y} $size={size}>
        <Label $show={showLabel}>{labelText}</Label>
      </Ring>
    </CursorWrapper>
  );
}

export default CustomCursor;
