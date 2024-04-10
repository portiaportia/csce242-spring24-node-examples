import Tree from "./Tree.js";

const Gallery = (props) => {
  return (
    <main className="gallery">
      <section id="trees" className="columns">
        <Tree
          name="Bald Cypress"
          image="images/bald-cypress.jpg"
          alt="Bald Cypress Tree"
        />
        <Tree
          name="Eastern Redbud"
          image="images/eastern-redbud.jpeg"
          alt="Eastern Redbud Tree"
        />
      </section>
    </main>
  );
};

export default Gallery;
