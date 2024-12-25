export const useCalcButtonsPagination = ( docs: number, part: number): number => {
    const btns = Math.ceil(docs / part)
    return btns
}