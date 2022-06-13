// Description:

	// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).


// If you want to know more: http://en.wikipedia.org/wiki/DNA
// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)
	// "ATTGC" --> "TAACG"
	// "GTAT" --> "CATA"

function DNAStrand(dna){
	return dna.toLowerCase().replace(/a/g,'T').replace(/t/g,'A').replace(/g/g,'C').replace(/c/g,'G')
}