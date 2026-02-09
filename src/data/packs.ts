export interface Pack {
  id: string;
  title: string;
  description: string;
  credits: number;
  price: number;
}

export const packs: Pack[] = [
  { id: "starter", title: "Starter Pack", description: "Perfect for trying things out", credits: 400, price: 4 },
  { id: "pro", title: "Pro Pack", description: "For regular creators", credits: 1200, price: 12 },
  { id: "team", title: "Team Pack", description: "Great for small teams", credits: 3000, price: 30 },
  { id: "studio", title: "Studio Pack", description: "For professional studios", credits: 6000, price: 60 },
  { id: "agency", title: "Agency Pack", description: "Built for agencies at scale", credits: 12000, price: 120 },
  { id: "enterprise", title: "Enterprise Pack", description: "Maximum power for large orgs", credits: 25000, price: 250 },
];
