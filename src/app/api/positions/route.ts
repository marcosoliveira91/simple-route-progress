import { NextResponse, NextRequest } from 'next/server';

/**
 * @url /api/positions
 * @method GET
 * @param request NextRequest
 * @returns 
 */
export const GET = async (): Promise<NextResponse> => {
    const mockResponse = {
        "routeName": "Road to Macondo",
        "myPosition": 0.2,
        "peopleOnRoute": [
            {
                "name": "Arcadio",
                "position": 0.4
            },
            {
                "name": "Úrsula",
                "position": 0.25
            },
            {
                "name": "Aureliano",
                "position": 0.75
            }
        ]
    };

    return NextResponse.json(mockResponse);
};

