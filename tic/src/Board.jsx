import React from "react";
import Square from "./Square";
import CalculateWinner from './CalculateWinner';
export default class Board extends React.Component {

    handleClick(i){
        const squares = this.state.squares.slice();
        if(CalculateWinner(squares) || squares[i]){
            return ;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }
    renderSquare(i) {
        return <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />;
    }

    render() {
        const winner = CalculateWinner(this.state.squares);
        let  status;
        if(winner){
            status = `Win!!! ${winner}`
        }else {
            status = `Next:  ${this.state.xIsNext ? 'X' : 'O'}`
        }
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
