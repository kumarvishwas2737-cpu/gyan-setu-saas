import { PricingTable } from "@clerk/nextjs";
import { hasClerkPublishableKey } from "@/lib/clerk-env";

const Subscription = () => {
  if (!hasClerkPublishableKey) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-2xl items-center justify-center px-6 text-center">
        <div>
          <h1 className="text-2xl font-semibold">Billing is unavailable.</h1>
          <p className="mt-3 text-muted-foreground">
            Configure Clerk keys to display the subscription pricing table.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <PricingTable />
    </main>
  );
};

export default Subscription;
