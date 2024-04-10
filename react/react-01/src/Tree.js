const Tree = (props) => {
  return (
    <section>
      <h3>{props.name}</h3>
      <img src={props.image} alt={props.name} />
    </section>
  );
};

export default Tree;
