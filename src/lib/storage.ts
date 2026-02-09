export type Order = {
  id: string;
  name: string;
  email: string;
  packId: string;
  createdAt: string;
};

const KEY = "credit-packs-orders";

export function readOrders(): Order[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Order[]) : [];
  } catch {
    return [];
  }
}

export function saveOrder(order: Order) {
  const list = readOrders();
  list.unshift(order);
  localStorage.setItem(KEY, JSON.stringify(list));
}
