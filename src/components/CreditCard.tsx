import type { Pack } from "../data/packs";

interface CreditCardProps {
  pack: Pack;
  onBuy?: (pack: Pack) => void;
}

export function CreditCard({ pack, onBuy }: CreditCardProps) {
  return (
    <div>
      <h3>{pack.title}</h3>
      <p>{pack.description}</p>

      {/* Separator */}
      <div />

      <p>
        ${pack.price} &middot; {pack.credits.toLocaleString()} credits
      </p>

      <button type="button" onClick={() => onBuy?.(pack)}>
        Buy Now
      </button>
    </div>
  );
}
