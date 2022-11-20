import styled from "styled-components";
import { useModal } from "../../components/Modal";

const View = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-3);

  & > footer {
    display: flex;
    justify-content: flex-end;
  }
`;

export const ExampleModal = () => {
  const { showModal } = useModal();

  return (
    <View>
      <header>
        <h3>Example Modal</h3>
      </header>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illo
          tempora doloribus natus exercitationem ipsum voluptatem deserunt enim
          id laborum? Officia, sit commodi? Minima exercitationem maxime dolor
          velit commodi eos.
        </p>
      </div>
      <footer>
        <button type="submit" onClick={() => showModal(null)}>
          ok
        </button>
      </footer>
    </View>
  );
};
