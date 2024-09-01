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

import { longestPalindrome } from "../problems/longest-palindromic-substring";

describe( "Return the longest palindromic substring", () =>
{
    it( "should return bab for an input of babad", () =>
    {
        expect( longestPalindrome( "babad" ) ).toBe( "bab" );
    } );
    it( "should return bb for an input of cbbd", () =>
    {
        expect( longestPalindrome( "cbbd" ) ).toBe( "bb" );
    } );
} );