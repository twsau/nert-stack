import styled from "styled-components";

const View = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-3);

  & > footer {
    display: flex;
    justify-content: flex-end;
  }
`;

export const ExampleNotification = () => (
  <View>
    <p>notification!</p>
  </View>
);
