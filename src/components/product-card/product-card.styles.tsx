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
    margin-bottom: 0;
    text-decoration: none;
  }
  
  h4 {
  display: flex;
  width: fit-content;
  padding: 4px 12px 4px 1px;
  border-radius: 3px;
  background-color: #eef4fb;
  border: 1px solid #d4dce4;
  font-size: 0.875rem;
  font-weight: 600;
  color: #777;
  margin: 10px 0 5px 0;
}
  
  p {
    color: #666;
    font-weight: 600;
    margin: 5px 0 5px 0;
  }
  p:nth-of-type(2) {
    font-weight: normal;
    color: #616c79;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

