import React, { useState } from 'react';
import { Button, Grid, Typography, Box, List, ListItem, ListItemButton } from '@mui/material';

function calculateWinner(squares: Array<string | null>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
};

function Square({ value, onSquareClick }: SquareProps) {
  return (
    <Button 
      variant="outlined" 
      onClick={onSquareClick}
      sx={{ 
        width: 100, 
        height: 100, 
        fontSize: 24,
        margin: 1 
      }}
    >
      {value}
    </Button>
  );
}

type BoardProps = {
  xIsNext: boolean;
  squares: Array<string | null>;
  onPlay: (nextSquares: Array<string | null>) => void;
};

function Board({ xIsNext, squares, onPlay }: BoardProps) {
  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <Box>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>{status}</Typography>
      <Grid container spacing={0} justifyContent="center">
        {[0, 1, 2].map((i) => (
          <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />
        ))}
      </Grid>
      <Grid container spacing={0} justifyContent="center">
        {[3, 4, 5].map((i) => (
          <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />
        ))}
      </Grid>
      <Grid container spacing={0} justifyContent="center">
        {[6, 7, 8].map((i) => (
          <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />
        ))}
      </Grid>
    </Box>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: Array<string | null>) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to move #${move}`;
    } else {
      description = 'Go to game start';
    }
    return (
      <ListItem key={move}>
        <ListItemButton onClick={() => jumpTo(move)}>{description}</ListItemButton>
      </ListItem>
    );
  });

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
      <Box sx={{ maxWidth: 400, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ marginBottom: 4 }}>Tic-Tac-Toe</Typography>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h6">Game History</Typography>
          <List>{moves}</List>
        </Box>
      </Box>
    </Box>
  );
}
