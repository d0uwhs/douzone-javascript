const grade = '운영자';
if (grade === '손님'){
    const authority = '글 읽기';
    console.log(`${grade}의 경우 ${authority}가 가능합니다.`)
}
if (grade === '일반 회원'){
    const authority = '글 읽기, 글 쓰기';
    console.log(`${grade}의 경우 ${authority}가 가능합니다.`)
}
if (grade === '운영자') {
    const authority = '글 읽기, 글 쓰기, 글 삭제';
    console.log(`${grade}의 경우 ${authority}가 가능합니다.`)
}