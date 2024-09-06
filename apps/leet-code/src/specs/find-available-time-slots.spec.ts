import { AvailableTimeSlots } from "../problems/find-available-time-slots";

describe( "Find the avaialble timeslot in a day for a given set of already booked events and a slot duration to look for", () =>
{
    it( "should give return any 30 min window slots in an array", () =>
    {
        expect( AvailableTimeSlots( 30, [ [ 0, 30 ], [ 60, 90 ],
        [ 90, 190 ],
        [ 220, 240 ], [ 240, 270 ],
        [ 270, 300 ], [ 300, 330 ], [ 330, 360 ],
        [ 360, 390 ], [ 390, 420 ], [ 420, 450 ],
        [ 450, 480 ], [ 480, 510 ], [ 510, 540 ],
        [ 540, 570 ], [ 570, 600 ], [ 600, 630 ],
        [ 630, 660 ], [ 660, 690 ], [ 690, 720 ],
        [ 720, 750 ], [ 750, 780 ], [ 780, 810 ],
        [ 810, 840 ], [ 840, 870 ], [ 870, 900 ],
        [ 900, 960 ],
        [ 990, 1050 ], [ 1050, 1080 ],
        [ 1080, 1110 ], [ 1140, 1170 ],
        [ 1170, 1200 ], [ 1200, 1230 ], [ 1230, 1260 ] ] ) ).toStrictEqual( [ [ 30, 60 ], [ 190, 220 ], [ 960, 990 ], [ 1110, 1140 ],
        [ 1260, 1290 ], [ 1290, 1320 ], [ 1320, 1350 ],
        [ 1350, 1380 ], [ 1380, 1410 ], [ 1410, 1440 ] ] );
    } );
    it( "should give return any 30 min window slots for the whole day from start", () =>
    {
        expect( AvailableTimeSlots( 30, [] ) ).toStrictEqual( [ [ 0, 30 ], [ 30, 60 ], [ 60, 90 ],
        [ 90, 120 ], [ 120, 150 ], [ 150, 180 ],
        [ 180, 210 ], [ 210, 240 ], [ 240, 270 ],
        [ 270, 300 ], [ 300, 330 ], [ 330, 360 ],
        [ 360, 390 ], [ 390, 420 ], [ 420, 450 ],
        [ 450, 480 ], [ 480, 510 ], [ 510, 540 ],
        [ 540, 570 ], [ 570, 600 ], [ 600, 630 ],
        [ 630, 660 ], [ 660, 690 ], [ 690, 720 ],
        [ 720, 750 ], [ 750, 780 ], [ 780, 810 ],
        [ 810, 840 ], [ 840, 870 ], [ 870, 900 ],
        [ 900, 930 ], [ 930, 960 ], [ 960, 990 ],
        [ 990, 1020 ], [ 1020, 1050 ], [ 1050, 1080 ],
        [ 1080, 1110 ], [ 1110, 1140 ], [ 1140, 1170 ],
        [ 1170, 1200 ], [ 1200, 1230 ], [ 1230, 1260 ],
        [ 1260, 1290 ], [ 1290, 1320 ], [ 1320, 1350 ],
        [ 1350, 1380 ], [ 1380, 1410 ], [ 1410, 1440 ] ] );
    } );
    it( "should give return an empty array []", () =>
    {
        expect( AvailableTimeSlots( 30, [
            [ 0, 30 ], [ 30, 60 ], [ 60, 90 ],
            [ 90, 120 ], [ 120, 150 ], [ 150, 180 ],
            [ 180, 210 ], [ 210, 240 ], [ 240, 270 ],
            [ 270, 300 ], [ 300, 330 ], [ 330, 360 ],
            [ 360, 390 ], [ 390, 420 ], [ 420, 450 ],
            [ 450, 480 ], [ 480, 510 ], [ 510, 540 ],
            [ 540, 570 ], [ 570, 600 ], [ 600, 630 ],
            [ 630, 660 ], [ 660, 690 ], [ 690, 720 ],
            [ 720, 750 ], [ 750, 780 ], [ 780, 810 ],
            [ 810, 840 ], [ 840, 870 ], [ 870, 900 ],
            [ 900, 930 ], [ 930, 960 ], [ 960, 990 ],
            [ 990, 1020 ], [ 1020, 1050 ], [ 1050, 1080 ],
            [ 1080, 1110 ], [ 1110, 1140 ], [ 1140, 1170 ],
            [ 1170, 1200 ], [ 1200, 1230 ], [ 1230, 1260 ],
            [ 1260, 1290 ], [ 1290, 1320 ], [ 1320, 1350 ],
            [ 1350, 1380 ], [ 1380, 1410 ], [ 1410, 1440 ]
        ] ) ).toStrictEqual( [] );
    } );
} );

