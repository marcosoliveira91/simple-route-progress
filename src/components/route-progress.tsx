"use client";

import { RouteParticipant } from '@/lib/types';
import useProgress from '@/hooks/progress';
import { Marker, MarkerVariants } from '@/components/marker';


type RouteProgressProps = {
    routeName: string
    myPosition: number
    participants: RouteParticipant[]
    className?: string
}

export const RouteProgress: React.FC<RouteProgressProps> = ({ routeName, myPosition, participants }) => {
    const progress = useProgress(myPosition);

    return (
        <div className="m-12">
            <div className="mb-8">
                <h1 className="text-lg font-semibold">{routeName}, {progress}</h1>
            </div>

            <div className="flex flex-row items-center w-full">
                <div>0%</div>

                <div className="relative w-full bg-blue-500 h-2 rounded-md mx-4">

                    {participants.map(({ name, position, isMe = false }, index) => (
                        <Marker key={index} label={name} position={position} variant={isMe ? MarkerVariants.Primary : MarkerVariants.Secondary} />
                    ))}
                </div>

                <div>100%</div>
            </div>
        </div>
    );
}
