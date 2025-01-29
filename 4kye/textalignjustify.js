// Your task in this Kata is to emulate text justification in monospace font. You will be given a single-lined text and the expected justification width. The longest word will never be greater than this width.

// Here are the rules:

// Use spaces to fill in the gaps between words.
// Each line should contain as many words as possible.
// Use '\n' to separate lines.
// Last line should not terminate in '\n'
// '\n' is not included in the length of a line.
// Gaps between words can't differ by more than one space.
// Lines should end with a word not a space.
// Large gaps go first, then smaller ones ('Lorem--ipsum--dolor--sit-amet,' (2, 2, 2, 1 spaces)).
// Last line should not be justified, use only one space between words.
// Lines with one word do not need gaps ('somelongword\n').
// Example with width=30:

// Lorem  ipsum  dolor  sit amet,
// consectetur  adipiscing  elit.
// Vestibulum    sagittis   dolor
// mauris,  at  elementum  ligula
// tempor  eget.  In quis rhoncus
// nunc,  at  aliquet orci. Fusce
// at   dolor   sit   amet  felis
// suscipit   tristique.   Nam  a
// imperdiet   tellus.  Nulla  eu
// vestibulum    urna.    Vivamus
// tincidunt  suscipit  enim, nec
// ultrices   nisi  volutpat  ac.
// Maecenas   sit   amet  lacinia
// arcu,  non dictum justo. Donec
// sed  quam  vel  risus faucibus
// euismod.  Suspendisse  rhoncus
// rhoncus  felis  at  fermentum.
// Donec lorem magna, ultricies a
// nunc    sit    amet,   blandit
// fringilla  nunc. In vestibulum
// velit    ac    felis   rhoncus
// pellentesque. Mauris at tellus
// enim.  Aliquam eleifend tempus
// dapibus. Pellentesque commodo,
// nisi    sit   amet   hendrerit
// fringilla,   ante  odio  porta
// lacus,   ut   elementum  justo
// nulla et dolor.
// Also you can always take a look at how justification works in your text editor or directly in HTML (css: text-align: justify).

// Have fun :)

function justify(text, width) {
    const words = text.split(' '); // Split the text into words
    const result = [];
    let currentLine = [];
    let currentLength = 0;

    for (let word of words) {
        // If adding this word exceeds the width, finalize the current line
        if (currentLength + currentLine.length + word.length > width) {
            // Distribute spaces
            result.push(justifyLine(currentLine, currentLength, width));
            currentLine = [word]; // Start new line with the current word
            currentLength = word.length; // Reset the current length
        } else {
            // Otherwise, add the word to the current line
            currentLine.push(word);
            currentLength += word.length;
        }
    }

    // Handle the last line which should not be justified
    if (currentLine.length > 0) {
        result.push(currentLine.join(' '));
    }

    return result.join('\n'); // Join the lines with newline characters
}

function justifyLine(line, length, width) {
    if (line.length === 1) {
        return line[0]; // Single word line doesn't need justification
    }

    const totalSpaces = width - length; // Total spaces to add
    const gaps = line.length - 1; // Number of gaps between words
    const baseSpaces = Math.floor(totalSpaces / gaps); // Minimum spaces per gap
    const extraSpaces = totalSpaces % gaps; // Extra spaces to distribute

    let justifiedLine = '';
    
    for (let i = 0; i < line.length; i++) {
        justifiedLine += line[i]; // Add the word
        if (i < gaps) { // If not the last word
            // Add base spaces + 1 extra space for the first 'extraSpaces' gaps
            justifiedLine += ' '.repeat(baseSpaces + (i < extraSpaces ? 1 : 0));
        }
    }

    return justifiedLine.trimEnd(); // Trim any trailing spaces
}

// Example usage
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const width = 30;
console.log(justify(text, width));