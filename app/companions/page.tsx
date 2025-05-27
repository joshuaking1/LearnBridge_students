import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CompainonsList from "@/components/CompainonsList";

const CompanionsLibrary = async () => {
  const { userId } = await auth();

  // Redirect unauthenticated users to sign-in page
  if (!userId) {
    redirect("/sign-in");
  }

  // TODO: Fetch user's companions from database
  // For now, we'll show an empty state
  const userCompanions: Companion[] = [];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">My Companions</h1>
        <Link href="/companions/new">
          <Button className="btn-primary">Create New Companion</Button>
        </Link>
      </div>

      {userCompanions.length > 0 ? (
        <CompainonsList
          title="Your AI Companions"
          companions={userCompanions}
        />
      ) : (
        <div className="companion-limit">
          <h2 className="text-2xl font-semibold mb-4">No Companions Yet</h2>
          <p className="text-gray-600 mb-6">
            Create your first AI companion to start learning!
          </p>
          <Link href="/companions/new">
            <Button className="btn-primary">Create Your First Companion</Button>
          </Link>
        </div>
      )}
    </main>
  );
};

export default CompanionsLibrary;
