import * as Dialog from "@radix-ui/react-dialog";
import type { Pack } from "../data/packs";

interface PurchaseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pack: Pack | null;
}

/**
 * TODO: Implement the purchase modal.
 *
 * Requirements:
 * - Use Radix UI Dialog (already imported) for accessibility
 * - Form fields: name, email, packId (preselected from the pack prop)
 * - On submit: persist the order using the storage utilities in lib/storage.ts
 * - Style with TailwindCSS to match the dark theme
 */
export function PurchaseModal({ open, onOpenChange, pack }: PurchaseModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title>Purchase {pack?.title}</Dialog.Title>

          {/* TODO: Implement form and submit logic here */}

          <Dialog.Close asChild>
            <button type="button">Cancel</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
