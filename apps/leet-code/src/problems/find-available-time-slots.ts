export function AvailableTimeSlots ( duration: number, bookedEvents: number[][] ): number[][]
{
    const TotalMinutesInADay = 60 * 24;
    const totalSlots: number[][] = [];
    let currentTime = 0;
    for ( let e = 0; e < bookedEvents.length; e++ ) {
        for ( let i = currentTime; i < TotalMinutesInADay; i += duration ) {
            let slot = [ i, i + duration ];

            if ( slot[ 1 ] <= bookedEvents[ e ][ 0 ] ) {
                totalSlots.push( slot );
            }
        }
        currentTime = currentTime + duration < bookedEvents[ e ][ 0 ] ? currentTime++ : bookedEvents[ e ][ 1 ];
    }
    for ( let j = currentTime; j + duration <= TotalMinutesInADay; j += duration ) {
        totalSlots.push( [ j, j + duration ] );
    }
    console.log( { totalSlots } );
    return totalSlots;
}