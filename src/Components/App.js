import Map from './Map';
import Modal from './Modal';
import { useState, useCallback } from 'react';

import '../css/App.css';

function App() {
  const [modal, setModal] = useState(true);

  const modalOnOff = useCallback(() => {
    setModal((currentModal) => !currentModal);
  }, []);

  return (
    <main className="dashboard">
      {modal && <Modal handleModal={modalOnOff} />}
      <Map handleModal={modalOnOff} />
    </main>
  );
}

export default App;
