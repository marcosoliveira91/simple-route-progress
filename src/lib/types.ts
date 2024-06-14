/* DTOs */
export interface RouteParticipant {
    name: string
    position: number
    isMe?: boolean
}

export interface RouteProgress {
    routeName: string
    myPosition: number
    participants: RouteParticipant[]
}

export const NullRouteProgressObject = (): RouteProgress => ({
    routeName: '',
    myPosition: 0,
    participants: [],
})


/* API Response types */
export interface RouteProgressResponse {
    routeName: string
    myPosition: number
    peopleOnRoute: RouteParticipant[]
}