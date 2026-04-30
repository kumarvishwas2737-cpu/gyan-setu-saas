import { SignIn } from "@clerk/nextjs";
import { hasClerkPublishableKey } from "@/lib/clerk-env";

const SignInPage = () => {
  if (!hasClerkPublishableKey) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-2xl items-center justify-center px-6 text-center">
        <div>
          <h1 className="text-2xl font-semibold">Authentication is not configured.</h1>
          <p className="mt-3 text-muted-foreground">
            Set NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY in your environment to enable sign-in.
          </p>
        </div>
      </main>
    );
  }

  return <SignIn />;
};

export default SignInPage;
