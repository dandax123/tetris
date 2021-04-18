class Game {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.world = this.createWorld()
        this.score = 0;
        this.currRot = 0;
        this.currPos = [Math.round(width / 2), 1]
        this.lTetromino = [
            [this.currPos[0], this.currPos[0] + 1, this.currPos[0] + this.width*this.currPos[1], this.currPos[0] + this.width * (this.currPos[1]+1)],
        ]
    }

    createWorld() {
        return new Array(this.height)
            .fill(null).map((_, i) => new Array(this.width)
                .fill(0))
    }
    drawWorld = () => {
        return this.world.flat(1).map((box, i) => <div className={`gridBox b${box}`} key={i}></div>)
    }
    draw() {
        let newWorld = this.world
        let counter = 0
        for (let i = 0; i < newWorld.length; i++) {
            for (let j = 0; j < newWorld[i].length; j++) {
                if (this.lTetromino[0].includes(counter)) {
                    newWorld[i][j] = 2
                    counter
                }
                counter++
            }
        }
        this.world = newWorld
    }
}
export default Game