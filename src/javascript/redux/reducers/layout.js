const list = [
    {id: '1000000', name: '홈', link: '/main', level: 0, idx : 0},

    {id: '2000000', name: '과목별 학습', link: '/subject', level: 0, defaultLink: '/subject/kor', idx : 1},
    {id: '2010000', name: '한글·국어', link: '/subject/kor', level: 1, parent : '2000000'},
    {id: '2020000', name: '수학·연산', link: '/subject/math', level: 1, parent : '2000000'},
    {id: '2040000', name: '영어', link: '/subject/eng', level: 1, parent : '2000000'},
    {id: '2050000', name: '독서', link: '/subject/reading', level: 1, parent : '2000000'},
    {id: '2060000', name: '선택활동', link: '/subject/activity', level: 1, parent : '2000000'},

    {id: '3000000', name: '연령별 학습', link: '/age', level: 0, defaultLink: '/age/begin', idx : 2},
    {id: '3010000', name: '4~6세', link: '/age/begin', level: 1, parent : '3000000'},
    {id: '3020000', name: '7세', link: '/age/middle', level: 1, parent : '3000000'},
    {id: '3040000', name: '8세', link: '/age/high', level: 1, parent : '3000000'},

    {id: '4000000', name: '사용자 후기', link: '/review', level: 0, idx : 3, swipeExcept : true},
];

const footerList = [
    {id: '100000000', name: '윙크 학부모앱 바로가기', type: 'MdForward', link : 'https://itunes.apple.com/kr/app/%EC%9C%99%ED%81%AC-%ED%95%99%EB%B6%80%EB%AA%A8/id1294082776?mt=8', level: 0 },
    // {id: '200000000', name: '윙크', link : '/main', level: 0 },
    {id: '300000000', name: '설정', type:'FaCog', link : '/setting', level: 0 },
];

const service = [
    {id: '400000000', name: '상세보기', link : '/boards', level: 0 },
    {id: '500000000', name: '무료학습 신청하기', link : '/request', level: 0 },
]

export const layout = (state = {list, footerList, service}, action) => {
    switch(action.type) {
        default:
            return state;
    }
}
