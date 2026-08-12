import styled from 'styled-components';

const Bar = styled.div`
  background-color: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding: 10px 20px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  width: 100%;
  position: relative;
  z-index: 10;
`;

function AnnouncementBar() {
  return (
    <Bar>
      NEW SUMMER ARRIVALS ADDED! DRESS NOW, RECEIVE WITHIN 1-3 BUSINESS DAYS! —
    </Bar>
  );
}

export default AnnouncementBar;
