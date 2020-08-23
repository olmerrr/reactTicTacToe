import React from 'react';
import Board from './Board'
import './Game.css';
import CalculateWinner from './CalculateWinner';

export default class Game extends React.Component {
   state = {
       history: [{
           squares: Array(9).fill(null)
       }],
       xIsNext: true
   };
        render() {
            const history = this.state.history;
            const current = history[history.length - 1];
            const winner = CalculateWinner(current.squares);
            let status;
            if (winner) {
                status = 'Выиграл ' + winner;
            } else {
                status = 'Следующий ход: ' + (this.state.xIsNext ? 'X' : 'O');
            }

            return (
                <div className="game">
                    <div className="game-board">
                        <Board
                            squares={current.squares}
                            onClick={(i) => this.handleClick(i)}
                        />
                    </div>
                    <div className="game-info">
                        <div>{status}</div>
                        <ol>{/* TODO */}</ol>
                    </div>
                </div>
            );
        }
    }