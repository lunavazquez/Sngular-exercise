import "./total.css";
function Total({ total }) {
  return (
    <>
      <p>
        El término de la serie n es: <span className="total">{total}</span>
      </p>
    </>
  );
}
export default Total;
