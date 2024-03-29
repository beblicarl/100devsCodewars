/*

Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

Parameter
String

Result
String

Example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

Pseudocode
1. split the dna to an array of strings and store in an array
2. map through the array and if any of the element is 'T' assign the new value to 'U'
3. return the join('')

*/

solution
function DNAtoRNA(dna) {
  
    const splitDna = dna.split("")
    const mapDna = splitDna.map((x) => x == 'T' ? 'U' : x)
    return mapDna.join("")
  } 

function DNAtoRNA(dna) {
    return dna.split("T").join("U");
  }