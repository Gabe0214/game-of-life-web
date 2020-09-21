import React, { useState } from 'react'

const numRows = 30;
const numCols = 40;

const Grid = () => {
    const [grid, setGrid] = useState(() => {
        const rows = []
        for (let i = 0; i < numRows; i++){
          rows.push(Array.from(Array(numCols), () => 0))
        }
        return rows
    })
    console.log(grid)
    return(
        <div style={{display: 'grid', gridTemplateColumns: `repeat(${numCols}, 20px)`, margin: '0 auto', justifyContent:'center', marginBottom:'5%'}}>
            {grid.map((rows, i) => rows.map((col, k) => (
                <div key={`${i}-${k}`}
                style={{height: 20, width: 20, backgroundColor: grid[i][k] ? "limegreen": null,
                border: '1px solid grey'
            }}
                >
                </div>
            )))}
        </div>
    )
}

export default Grid