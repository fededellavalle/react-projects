import "./Footer.css";
import { useFilters } from "../hooks/useFilters";
import { useCart } from "../hooks/useCart";

export function Footer() {
  const { filters } = useFilters();
  const { cart } = useCart();

  return (
    <footer className="footer">
      {JSON.stringify(cart, null, 2)}
      {/*
      <h4>
        Prueba tecnica de React - <span>@fededellavalle</span>
      </h4>
      <h5>Shooping Cart con useContext & useReducer</h5>
      */}
    </footer>
  );
}
