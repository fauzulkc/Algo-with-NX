// Given a string s, find the length of the longest substring without repeating characters.;
export function lengthOfLongestSubstring ( s: string ): number
{
    if ( s.length < 1 ) {
        throw new Error( "Missing String" );
    }
    if ( s.length > 5 * ( 10 ** 4 ) ) {
        throw new Error( "String too large" );
    }
    let maxLength = 0;
    let currentSubstring = "";
    for ( let i = 0; i < s.length; i++ ) {
        const charIndex = currentSubstring.indexOf( s[ i ] );
        if ( charIndex !== -1 ) {
            currentSubstring = currentSubstring.slice( charIndex + 1 );
        }
        currentSubstring += s[ i ];
        maxLength = Math.max( maxLength, currentSubstring.length );
    }
    return maxLength;
};