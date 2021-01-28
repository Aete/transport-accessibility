import '../css/Modal.css';

export default function Modal({ handleModal }) {
  return (
    <article className="Modal">
      <header className="Modal__header">
        <h1>Title</h1>
        <button onTouchStart={handleModal} onClick={handleModal}>
          close
        </button>
      </header>
      <main>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis quos
          quibusdam excepturi maiores recusandae ut ipsum libero illum provident
          odio ducimus alias labore ad necessitatibus soluta, rem vel cum
          veritatis quam dignissimos animi. Alias porro deserunt, sed asperiores
          laborum modi dolorem. Odio praesentium autem, error nobis vitae sunt
          velit necessitatibus fuga ut earum accusamus iusto, ipsam repudiandae
          ratione cupiditate ullam ea. Nostrum, quaerat. Quod architecto eveniet
          sed similique accusamus libero vitae optio magni natus aut reiciendis
          placeat provident id neque nisi fuga necessitatibus voluptates laborum
          molestias veniam, maiores qui, minima repellat rem? Ipsam similique
          impedit praesentium? Inventore ducimus et deserunt!
        </p>
      </main>
    </article>
  );
}
