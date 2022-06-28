/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)


Parameter
String

Result
String

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

Pseudocode
1.Split the string into an array of strings
2. Loop through the array and evaluate the following strings 'A' : 'T' , 'T' : 'A' , 'C' : 'G' , 'G':'C'
3. Join the array into a string
4. Return the string

*/

solution;
function DNAStrand(dna) {
  return dna
    .split("")
    .map((i) =>
      i == "A"
        ? (i = "T")
        : i == "T"
        ? (i = "A")
        : i == "G"
        ? (i = "C")
        : i == "C"
        ? (i = "G")
        : i
    )
    .join("");
}
