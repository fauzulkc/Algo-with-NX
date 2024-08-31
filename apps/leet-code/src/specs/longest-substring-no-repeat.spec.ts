import { lengthOfLongestSubstring } from "../problems/longest-substring-no-repeat";

describe( "finding the longest substring in a given string without repeating", () =>
{
    it( "Test max length of substring to be 3", () =>
    {
        const testString = "abcabcbb";
        expect( lengthOfLongestSubstring( testString ) ).toEqual( 3 );
    } );
    it( "Test max length of substring to be 1", () =>
    {
        const testString = "bbbbb";
        expect( lengthOfLongestSubstring( testString ) ).toEqual( 1 );
    } );
    it( "Test max length of substring to be 3", () =>
    {
        const stringOfMaxLength = "pwwkew";
        expect( lengthOfLongestSubstring( stringOfMaxLength ) ).toEqual( 3 );
    } );
} );