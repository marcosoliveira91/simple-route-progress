export enum MarkerVariants {
    Primary = 'primary',
    Secondary = 'secondary'
}

export type MarkerProps = {
    label: string
    position: number,
    variant: MarkerVariants
}

export const Marker: React.FC<MarkerProps> = ({ label, position, variant }) => {
    if (variant === MarkerVariants.Primary) {
        return <div
            className='absolute w-14 h-8 border-4 border-orange-400 bg-yellow-200 text-orange-400 text-sm font-medium rounded-lg text-center top-[50%] translate-x-[-50%] translate-y-[-50%]'
            style={{ left: `${position * 100}%` }}
        >
            {label}
        </div>
    }

    return <div
        className='absolute w-14 h-8 border-4 border-blue-500 bg-yellow-200 text-blue-500 text-sm font-medium rounded-lg text-center top-[50%] translate-x-[-50%] translate-y-[-50%]'
        style={{ left: `${position * 100}%` }}
    >
        {label}
    </div>

    // OR dynamic styling:
    // return (
    //     <div className="w-10 border-2 text-sm rounded-md"
    //         style={{
    //             borderColor: variant === MarkerVariants.Primary ? 'rgb(251 146 60)' : 'rgb(59 130 246)',
    //             color: variant === MarkerVariants.Primary ? 'rgb(251 146 60)' : 'rgb(59 130 246)'
    //         }}>
    //         {label}
    //     </div>
    // )
}
