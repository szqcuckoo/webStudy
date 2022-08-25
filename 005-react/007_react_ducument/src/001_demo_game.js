import React from "react";
import './001_demo_game.css'

function Square(props) {
    return (
        <button className="square" onClick={() => {
            props.onClick()
        }}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            square: Array(9).fill(null),
            xIsNext: true
        }
    }

    handleClick = (i) => {
        const square = this.state.square.slice()
        if(calculateWinner(square) || square[i]) {
            return
        }
        square[i] = this.state.xIsNext ? 'x' : 'o'
        this.setState({square, xIsNext: !this.state.xIsNext})

    }

    renderSquare(i) {
        return <Square value={this.state.square[i]} onClick={() => {
            this.handleClick(i)
        }}/>;
    }

    render() {
        // const status = `Next player: ${this.state.xIsNext ? 'x' : 'o'}`

        const winner = calculateWinner(this.state.square)
        let status;
        if(winner) {
            status = 'Winner:' + winner
        } else {
            status =`Next player: ${this.state.xIsNext ? 'x' : 'o'}`
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

export default class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (squares[i] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return null
}

// ========================================

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Game />);