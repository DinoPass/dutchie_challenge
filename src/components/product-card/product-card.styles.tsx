import styled from '@emotion/styled';

// Basic colors
const borderColor = '#D8DEE3';

// Components
export const CardContainer = styled.div`
  width: 300px;
  height: 430px;
  border: 1px solid ${borderColor};
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  cursor: pointer;
  padding: 0 12px 0 12px;
  margin: 0 7px 0 7px;

  a {
    text-decoration: none;
    
  }

  h3 {
    color: #7fb5e9;
    font-size: 1.25rem;
    margin-bottom: 15px;
    text-decoration: none;
  }
  
  p {
    color: #666;
    font-weight: 600;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;
