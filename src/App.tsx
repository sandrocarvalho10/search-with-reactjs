import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ListItem from './components/ListItem';
import styled from 'styled-components';
import { getBooks } from './mock/BookService';

const ListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #ccc;
    padding: 10px;
`;


const listBook: string[] = []


function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(getBooks(): listBook);
  }, [])

  return (
    <Container>
      <ListContainer>
        {
          books.map(book => {
            return (
              <ListItem
                key={book.url}
                title={book.title}
                image={book.image}
                price={book.price}
                url={book.url}
              />
            )
          })
        }

      </ListContainer>
    </Container>
  );
}

export default App;
