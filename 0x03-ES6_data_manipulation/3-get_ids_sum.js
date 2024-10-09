export default function getStudentIdsSum(arr) {
    if (arr instanceof Array) {
        const ids = arr.reduce((accumulator, id) => {
            return accumulator + id.id;
        }, 0)
    }
}