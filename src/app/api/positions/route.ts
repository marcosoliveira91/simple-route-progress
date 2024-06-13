import { NextResponse, NextRequest } from 'next/server';

/**
 * @url /api/positions
 * @method GET
 * @param request NextRequest
 * @returns 
 */
export const GET = async (): Promise<NextResponse> => {
    const mockResponse = {
        "routeName": "To the dunes and back",
        "myPosition": 0.2,
        "peopleOnRoute": [
            {
                "name": "Lex",
                "position": 0.4
            },
            {
                "name": "Frikkie",
                "position": 0.25
            },
            {
                "name": "Ronald",
                "position": 0.75
            }
        ]
    };

    return NextResponse.json(mockResponse);
};

