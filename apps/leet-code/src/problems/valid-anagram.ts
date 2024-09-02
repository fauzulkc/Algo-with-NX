/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/
export function isAnagram ( s: string, t: string ): boolean
{
    if ( s.length !== t.length ) return false;
    if ( s.length < 1 || s.length > 5 * 10 ** 4 ) return false;

    for ( let i = 0; i < s.length; i++ ) {
        let index: number = t.indexOf( s[ i ] );
        t = t.slice( undefined, index ) + t.slice( index + 1, s.length );
    }
    if ( t !== "" ) return false;
    else return true;

    return true;
};

export function isAnagramHashWorkflow ( s: string, t: string )
{
    const charHashFirst = new Map<string, number>();
    const charHashSecond = new Map<string, number>();
    for ( let i = 0; i < s.length; i++ ) {
        if ( charHashFirst.get( s[ i ] ) === undefined ) {
            charHashFirst.set( s[ i ], 0 );
        }
        if ( charHashSecond.get( t[ i ] ) === undefined ) {
            charHashSecond.set( t[ i ], 0 );
        }
        charHashSecond.set( t[ i ], charHashSecond.get( t[ i ] ) + 1 );
        charHashFirst.set( s[ i ], charHashFirst.get( s[ i ] ) + 1 );
    }

    for ( let [ k, v ] of charHashFirst ) {
        console.log( { first: charHashFirst.get( k ) }, { second: charHashSecond.get( k ) }, charHashFirst.get( k ) === charHashSecond.get( k ) );
        if ( charHashFirst.get( k ) !== charHashSecond.get( k ) ) return false;
    }
    return true;
}