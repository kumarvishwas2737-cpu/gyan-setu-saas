import { SignIn } from '@clerk/nextjs'

export default function Page() {
    if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
        return (
            <main className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Authentication Not Configured</h1>
                    <p className="text-gray-600">Please configure Clerk authentication keys to access this page.</p>
                </div>
            </main>
        )
    }

    return (
        <main className="flex items-center justify-center">
            <SignIn />
        </main>
    )
}