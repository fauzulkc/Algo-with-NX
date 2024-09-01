// Given a string s, return the longest palindromic;

// substring in s.

//         Example 1:

// Input: s = "babad";
// Output: "bab";
// Explanation: "aba" is also a valid answer.
//     Example 2:

// Input: s = "cbbd";
// Output: "bb";


// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.;

export function longestPalindrome ( s: string ): string
{
    if ( s.length < 1 ) {
        throw new Error( "String is empty" );
    }
    if ( s.length > 1000 ) {
        throw new Error( "String must be shorter" );
    }
    // if ( !( /^[a-zA-Z0-9]*gi/ ).test( s ) ) {
    //     throw new Error( "Bad String Characters" );
    // }

    let currentlyMatching = false;
    let leftIndex = 0;
    let rightIndex = s.length - 1;
    for ( let i = 0; i < s.length; i++ ) {
        for ( let j = s.length - 1; j > i; j-- ) {
            if ( s[ i ] !== s[ j ] ) {
                continue;
            }
            else if ( s[ i ] === s[ j ] ) {
                currentlyMatching = true;
                rightIndex = j;
                break;
            }
            currentlyMatching = false;
            if ( !currentlyMatching ) {
                leftIndex = i;
            }
        }
    }
    console.log( { leftIndex } );
    console.log( s.slice( leftIndex, rightIndex + 1 ) );
    return s.slice( leftIndex, rightIndex + 1 );


};