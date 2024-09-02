/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/
import { isAnagram, isAnagramHashWorkflow } from "../problems/valid-anagram";

describe( "Given two strings s and t, return true if t is an anagram of s, and false otherwise.", () =>
{
    it( "should return true for string of 'anagram' and 'nagaram'", () =>
    {
        expect( isAnagram( "anagram", "nagaram" ) ).toBeTruthy();
    } );
    it( "should return false for string of 'rat' and 'car'", () =>
    {
        expect( isAnagram( "rat", "car" ) ).toBeFalsy();
    } );
} );
describe( "Given two strings s and t, return true if t is an anagram of s, and false otherwise.", () =>
{
    it( "should return true for string of 'anagram' and 'nagaram'", () =>
    {
        expect( isAnagramHashWorkflow( "anagram", "nagaram" ) ).toBeTruthy();
    } );
    it( "should return false for string of 'rat' and 'car'", () =>
    {
        expect( isAnagramHashWorkflow( "rat", "car" ) ).toBeFalsy();
    } );
} );