import styled from '@emotion/styled';

// Basic colors
const borderColor = '#D8DEE3';

// Components
export const CardContainer = styled.article`
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
    font-size: 1rem;
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
  font-size: 0.75rem;
  font-weight: 600;
  color: #555;
  margin: 10px 0 5px 0;
}
  figure figcaption {
    color: #666;
    font-weight: 600;
    font-size: 0.95rem;
    display: block;
    margin: 0 0 20px 0;
  }
  
  p {
    color: #666;
    font-size: 0.8rem;
    font-weight: 600;
    margin: 5px 0 5px 0;
    color: #616c79;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

