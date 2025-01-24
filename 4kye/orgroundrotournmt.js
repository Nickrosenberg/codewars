// You are organizing a soccer tournament, so you need to build a matches table.

// The tournament is composed by 20 teams. It is a round-robin tournament (all-play-all), so it has 19 rounds, and each team plays once per round. Each team confront the others once in the tournament (each match does not repeat in the tournament).

// Your mission is to implement a function buildMatchesTable that receives the number of teams (always a positive and even number) and returns a matrix.

// Each line of the matrix represents one round. Each column of the matrix represents one match. The match is represented as an array/tuple with two teams. Each team is represented as a number, starting from 1 until the number of teams.

// Example:

// buildMatchesTable(4)
// // Should return a matrix like that:
// [
//   [[1,2], [3, 4]],  // first round:  1 vs 2, 3 vs 4
//   [[1,3], [2, 4]],  // second round: 1 vs 3, 2 vs 4
//   [[1,4], [2, 3]]   // third round:  1 vs 4, 2 vs 3
// ]
// You should not care about the order of the teams in the match, nor the order of the matches in the round. You should just care about the rules of the tournament.

function buildMatchesTable(numberOfTeams) {
    const rounds = [];  // Array to hold rounds of matches
    const teams = Array.from({ length: numberOfTeams }, (_, i) => i + 1);

    // We will have 'numberOfTeams - 1' rounds
    for (let round = 0; round < numberOfTeams - 1; round++) {
        const matches = [];  // Array to hold matches for the current round

        // Pairing teams
        for (let i = 0; i < numberOfTeams / 2; i++) {
            const home = teams[i]; // First half of teams
            const away = teams[numberOfTeams - 1 - i]; // Second half of teams
            matches.push([home, away]); // Create a match
        }

        rounds.push(matches); // Add matches to rounds

        // Rotate the team positions (keeping the first team fixed)
        const movedTeam = teams.pop(); // Remove last team
        teams.splice(1, 0, movedTeam); // Insert it to the second position
    }

    return rounds; // Return the complete rounds
}

// Example Usage
console.log(buildMatchesTable(4));
console.log(buildMatchesTable(6));
console.log(buildMatchesTable(8));