const grade = '운영자';
let authority;
grade==='손님' ? (
    authority  = '글 읽기',
    console.log(`${grade}의 경우 ${authority}가 가능합니다.`)

) : grade==='일반 회원' ? (
    authority  = '글 읽기, 글 쓰기',
    console.log(`${grade}의 경우 ${authority}가 가능합니다.`)

) : grade==='운영자' ? (
    authority  = '글 읽기, 글 쓰기, 글삭제',
    console.log(`${grade}의 경우 ${authority}가 가능합니다.`)

) : undefined;