import Link from 'next/link'

export default function Page() {
    return (
        <main className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
            <h1 className="text-2xl font-bold">Sign In</h1>
            <p className="text-muted-foreground">Authentication is not configured.</p>
            <Link href="/" className="btn-primary">
                Return Home
            </Link>
        </main>
    )
}
