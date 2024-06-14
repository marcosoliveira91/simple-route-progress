import { BASE_URL } from "@/lib/config"
import { NullRouteProgressObject, RouteProgress, RouteProgressResponse } from "@/lib/types";

export const fetchRouteProgress = async (): Promise<RouteProgress> => {
    const res = await fetch(`${BASE_URL}/api/positions`, { next: { revalidate: 3 } }); //invalidates cache every 3s

    if (!res.ok) {
        console.error({ error: res.statusText })
        return NullRouteProgressObject();
    }

    const { routeName, peopleOnRoute, myPosition }: RouteProgressResponse = await res.json();

    return {
        routeName,
        myPosition,
        participants: [...peopleOnRoute, { name: "You", position: myPosition, isMe: true }],
    };
}