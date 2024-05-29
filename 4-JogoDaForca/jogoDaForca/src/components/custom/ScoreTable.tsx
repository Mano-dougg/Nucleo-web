import { parseStoredUsers } from "@/utils/useLocalStorage";
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

function calculatePrecision(precision: number[] | undefined): number {
  precision = precision || [0];
  const result = precision.reduce((acc, curr) => acc + curr, 0) / precision.length;
  if (isNaN(result)) return 0;
  return result;
}

function ScoreTable() {
  const allUsers = parseStoredUsers();
  const allPlayers = allUsers.length;
  const initialScore = {
    allGames: 0,
    allWins: 0,
    allLosses: 0,
    allPrecision: [] as number[],
  }
  const score = allUsers.reduce(
    (accumulator, user) => {
      accumulator.allGames += user.totalGames
      accumulator.allWins += user.gamesWon
      accumulator.allLosses += user.gamesLost
      accumulator.allPrecision = accumulator.allPrecision.concat(user.precision);
      return accumulator;
    }, initialScore,
  );
  const finalScore = { ...score, allPlayers }

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
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.totalGames}</TableCell>
            <TableCell>{user.gamesWon}</TableCell>
            <TableCell>{user.gamesLost}</TableCell>
            <TableCell>{`${calculatePrecision(user.precision).toFixed(2)}%`}</TableCell>
          </TableRow>
        )}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>{finalScore.allPlayers}</TableCell>
          <TableCell>{finalScore.allGames}</TableCell>
          <TableCell>{finalScore.allWins}</TableCell>
          <TableCell>{finalScore.allLosses}</TableCell>
          <TableCell>{`${calculatePrecision(finalScore.allPrecision).toFixed(2)}%`}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export default ScoreTable;
