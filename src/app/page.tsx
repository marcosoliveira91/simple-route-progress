import { RouteProgress } from "@/components/route-progress";
import { fetchRouteProgress } from "@/lib/api";
import { notFound } from "next/navigation";

export default async function Home() {
  const { routeName, participants, myPosition } = await fetchRouteProgress();

  if (!routeName) {
    notFound()
  }


  return (
    <main className="flex items-center relative justify-center w-screen h-screen max-w-screen-md max-h-80">
      <div className="h-full w-full border border-black rounded-3xl">
        <RouteProgress routeName={routeName} participants={participants} myPosition={myPosition} />
      </div>
    </main>
  );
}
