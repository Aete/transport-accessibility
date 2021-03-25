import '../css/Modal.css';

export default function Modal({ handleModal }) {
  return (
    <article className="Modal">
      <header className="Modal__header">
        <h1>Transportation Accessibility Dashboard</h1>
        <button onTouchStart={handleModal} onClick={handleModal}>
          close
        </button>
      </header>
      <main>
        <p className="author">
          2020. 12 ~ present, Seunggyun Han & Woowon Chung
        </p>
        <p>
          <strong>In Seoul</strong>, where personal car ownership is low and
          dependence on public transportation is very high, accessibility to
          public transportation is a very important factor when choosing a place
          to work or live. Therefore, in the places with good access to public
          transport, the most expensive and large-scale apartment complexes have
          been built, and in places with relatively poor accessibility, small
          and inexpensive multi-family houses are located.
        </p>
        <p>
          In this study, targeting the Gangnam district, we investigated the
          areas where actual public transportation (bicycle, subway, bus)
          accessibility is weak and where it is good. In addition, by analyzing
          the types of housing in each surveyed region, we tried to find a
          district where redevelopment would be possible and a place where a new
          public transport plan is needed.
        </p>
      </main>
    </article>
  );
}
