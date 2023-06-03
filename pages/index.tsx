import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <>
        <main>
          <div className="bg-blue-900 w-screen h-screen flex items-center">
            <div className="text-center w-full">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => signIn()}
              >
                Login With Google
              </button>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <main>
        <div className="bg-blue-900 w-screen h-screen flex items-center">
          <div className="text-center w-full">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
