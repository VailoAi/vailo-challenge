import { CardsGrid } from "./components/Grid";
import { CreditCard } from "./components/CreditCard";
import { packs } from "./data/packs";
// import { PurchaseModal } from "./components/Modal"; // TODO: implement

export default function App() {
  return (
    <div>
      {/* Header */}
      <header>
        <div>{/* Logo placeholder */}</div>
        <div>{/* Avatar placeholder */}</div>
      </header>

      {/* Title */}
      <h1>Pick Your Credit Pack</h1>

      {/* Cards */}
      <CardsGrid>
        {packs.map((p) => (
          <CreditCard key={p.id} pack={p} />
        ))}
      </CardsGrid>

      {/* TODO: PurchaseModal + Zustand store for state + Recent purchases list */}
    </div>
  );
}
