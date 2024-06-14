"use client";

import { useMemo } from 'react';

const buildProgress = (num: number): string => {
    if (num < 0 && isNaN(num)) return '0%';

    return num < 1 ? `${(num * 100).toFixed(0)}%` : 'finished!';
}

const useProgress = (position: number) => {
    return useMemo(() => buildProgress(position), [position])
};

export default useProgress;