import {PricingTable} from "@clerk/nextjs";

const Subscription = () => {
    if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
        return (
            <main className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Subscription Not Available</h1>
                    <p className="text-gray-600">Please configure Clerk authentication keys to access subscription features.</p>
                </div>
            </main>
        )
    }

    return (
        <main>
            <PricingTable />
        </main>
    )
}
export default Subscription
