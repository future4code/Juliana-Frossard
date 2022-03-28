import styled from 'styled-components';

export const ScreenContainer1 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 30px;
`

export const TripContainer = styled.div`
display: grid;
 
 grid-template-columns: repeat(4, 1fr);
  
 grid-auto-rows: column;
  
 grid-gap: 1rem;
  
 }
  
 &amp;amp;nbsp;
  
 .card {
  
 border: 2px solid #e7e7e7;
  
 border-radius: 4px;
  
 padding: .5rem;
  
 };
`
