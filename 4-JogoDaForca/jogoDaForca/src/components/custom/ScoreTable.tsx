import { getStoredUsers, parseStoredUsers } from "@/utils/useLocalStorage";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from "../ui/table";

function ScoreTable() {
  const storedUsers = getStoredUsers();
  const parsedUsers = parseStoredUsers(storedUsers);
  const allUsers = Object.entries(parsedUsers)
  const allPlayers = allUsers.length;
  const initialScore = {
    allGames: 0,
    allWins: 0,
    allLosses: 0,
    allPrecision: 0,
  }
  const score = allUsers.reduce(
    (accumulator, user) => {
      accumulator.allGames += user[ 1 ].totalGames || 0
      accumulator.allWins += user[ 1 ].gamesWon || 0
      accumulator.allLosses += user[ 1 ].gamesLost || 0
      accumulator.allPrecision += user[ 1 ].precision || 0
      return accumulator;
    }, initialScore,
  );
  const finalScore = {...score, allPrecision: (score.allPrecision / allPlayers), allPlayers}

  return (
    <Table className="text-center">
      <TableCaption>Placar</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Jogadores</TableHead>
          <TableHead>Jogos</TableHead>
          <TableHead>Vitórias</TableHead>
          <TableHead>Derrotas</TableHead>
          <TableHead>Precisão</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {allUsers && allUsers.map((user) =>
          <TableRow key={crypto.randomUUID()}>
            <TableCell>{user[ 0 ]}</TableCell>
            <TableCell>{user[ 1 ].totalGames}</TableCell>
            <TableCell>{user[ 1 ].gamesWon}</TableCell>
            <TableCell>{user[ 1 ].gamesLost}</TableCell>
            <TableCell>{`${user[ 1 ].precision?.toFixed(2)}%`}</TableCell>
          </TableRow>
        )}
      </TableBody>
      <TableFooter>
          <TableRow>
            <TableCell>{finalScore.allPlayers}</TableCell>
            <TableCell>{finalScore.allGames}</TableCell>
            <TableCell>{finalScore.allWins}</TableCell>
            <TableCell>{finalScore.allLosses}</TableCell>
            <TableCell>{`${finalScore.allPrecision?.toFixed(2)}%`}</TableCell>
          </TableRow>
      </TableFooter>
    </Table>
  );
}

export default ScoreTable;
