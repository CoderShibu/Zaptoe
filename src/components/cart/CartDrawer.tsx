import React from "react";
import { useCart } from "./CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const CartDrawer: React.FC = () => {
  const { isOpen, closeCart, items, subtotal, removeItem, clear } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={(open) => (!open ? closeCart() : undefined)}>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>

        <div className="mt-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-muted-foreground">Your cart is empty.</div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                {item.imageUrl ? (
                  <img src={item.imageUrl} alt={item.name} className="w-16 h-16 rounded object-cover" />
                ) : (
                  <div className="w-16 h-16 rounded bg-muted" />
                )}
                <div className="flex-1">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-muted-foreground">Qty: {item.quantity}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">₹{(item.price * item.quantity).toLocaleString()}</div>
                  <Button variant="outline" size="sm" className="mt-2" onClick={() => removeItem(item.id)}>
                    Remove
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        <SheetFooter className="mt-6">
          <div className="w-full space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-muted-foreground">Subtotal</div>
              <div className="font-semibold">₹{subtotal.toLocaleString()}</div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1" onClick={clear}>Clear</Button>
              <Button className="flex-1" onClick={closeCart}>Checkout</Button>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;


