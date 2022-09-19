# sudoku solver
import random as rnd

class gameObject:
    sudoku_array = []
    def __init__(self) -> None:
        self.sudoku_array = [
                0, 1, 2,
                3, 4, 5,
                6, 7, 8 ]

        self.sudoku_array_mt = [
                'x', 'x', 'x',
                'x', 'x', 'x',
                'x', 'x', 'x' ]

    def printSArray(self) -> None:
        print("This is the array from the class")
        print(self.sudoku_array)

sudoku_array = [
                0, 1, 2,
                3, 4, 5,
                6, 7, 8 ]

sudoku_array = [
                'x', 'x', 'x',
                'x', 'x', 'x',
                'x', 'x', 'x' ]


def gameLoop():
    global sudoku_array
    gameObj = gameObject()
    while 1:
        print(sudoku_array)
        usr_ans = input()
        print(f"usr inp is {usr_ans}")
        gameObj.printSArray()

def main():
    gameLoop()

if __name__ == '__main__':
    main()
