export const useCalcButtonsPagination = ( docs: number, part: number): number => {
    const calc = docs / part
    const btns = Math.trunc(calc) + 1
    return btns
}