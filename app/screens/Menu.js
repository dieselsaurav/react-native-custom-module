import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background: #2d9cdb;
`;
const Text = styled.Text``;

function Menu() {
  return (
    <Container>
      <Text>Settings</Text>
    </Container>
  );
}

export default Menu;
