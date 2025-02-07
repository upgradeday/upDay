export const CATEGORY_IMAGES = {
    '식단': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMtt3aOrfYZ1KnQq4GK0vf9gkNBC07f72UWQ&s',
    '학습': 'https://news.edupang.com/data/photos/20170939/art_1506413638434_4f048d.jpg',
    '운동': 'https://www.noblesse.com/shop/data/m/editor_new/2021/09/09/89bf18216575225e3.jpg',
    '습관': 'https://www.kbiznews.co.kr/news/photo/201901/48673_10396_236.jpg',
    default: 'https://blog.kakaocdn.net/dn/GHYFr/btrsSwcSDQV/UQZxkayGyAXrPACyf0MaV1/img.jpg'
};


export const userChallengeList = [
    {
        id: 1,
        authorId: 'nobadword@gmail.com',
        category: '습관',
        duration: '1주',
        title: '욕 안 하기',
        content: '요즘 욕을 입에 달고 살아요.. 이렇게라도 고쳐보고 싶어요.',
        userImg:
            'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg',
        nickname: '바른말고운말',
        postDate: '2024-12-02',
        clgJoin: false,
        clgState: true,
    },
    {
        id: 2,
        authorId: 'vloger@naver.com',
        category: '습관',
        duration: '3개월',
        title: '블로그 글 쓰기',
        content:
            '초등학교 때 방학 일기 밀려쓰던 사람? 그 사람이 바로 저예요. 작은 일이라도 블로그에 글로 쓰며 일상을 남겨봐요! 쌓이는 글을 보면 뿌듯해진답니다 :)',
        userImg:
            'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg',
        nickname: '꾸준해꾸',
        postDate: '2024-11-30',
        clgJoin: false,
        clgState: true,
    },
    {
        id: 3,
        authorId: 'test01@naver.com',
        category: '습관',
        duration: '2주',
        title: '커피 대신 따뜻한 차 마시기',
        content:
            '만성 피로에 매일 마셔댄 아아 때문에 위에 무리가 왔어요ㅠ 저와 함께 커피 대신 차를 마시며 몸을 챙겨봐요!',
        userImg:
            'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg',
        nickname: '데이메이커',
        postDate: '2025-01-01',
        clgJoin: true,
        clgState: false,
    },
    {
        id: 4,
        authorId: 'nodelivery@naver.com',
        category: '식단',
        duration: '3개월',
        title: '배달음식 먹지 않기',
        content:
            '자극적인 음식에 중독되어 자꾸 집밥을 피하게 되네요... 돈도 아끼고 건강도 챙기고 일석이조 챌린지',
        userImg:
            'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg',
        nickname: '배달의만족',
        postDate: '2025-01-13',
        clgJoin: true,
        clgState: false,
    },
    {
        id: 5,
        authorId: 'walking10000@gmail.com',
        category: '운동',
        duration: '매일',
        title: '하루 10,000보 걷기',
        content:
            '가까운 거리는 걷기! 에스컬레이터 보단 계단! 10,000보를 채우는 재미를 느끼실 거예요.',
        userImg:
            'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg',
        nickname: '만보르기니',
        postDate: '2025-01-11',
        clgJoin: true,
        clgState: true,
    },
    {
        id: 6,
        authorId: '1mealathome@kakao.com',
        category: '습관',
        duration: '1개월',
        title: '하루 한 끼 집밥 해먹기',
        content:
            '처음엔 귀찮을 수 있지만, 내 손으로 만드는 소중한 한 끼의 가치를 알게 되면 일상의 소소한 행복을 느낄 수 있어요. 1개월이면 자연스럽게 습관이 되어 장을 보러 가는게 일상이 되고, 어쩌면 하루 세 끼를 모두 집밥을 해먹는 날이 올 거랍니다 :)',
        userImg:
            'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg',
        nickname: '집밥박선생',
        postDate: '2024-12-01',
        clgJoin: true,
        clgState: false,
    },
    {
        id: 7,
        authorId: 'sugarlover@kakao.com',
        category: '식단',
        duration: '3개월',
        title: '설탕 없는 하루 보내기',
        content:
            '가공된 설탕이 들어간 음식 대신 자연식으로 하루를 보내보세요. 더 건강한 식습관을 만들어 봅시다!',
        userImg:
            'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg',
        nickname: '슈가프리',
        postDate: '2024-11-22',
        clgJoin: false,
        clgState: true,
    },
    {
        id: 8,
        authorId: 'english007@naver.com',
        category: '학습',
        duration: '3개월',
        title: '매일 1시간씩 영어 공부하기',
        content:
            '매년 다짐만 하는 영어공부, 제대로 습관을 들이자!!! 단어 외우기? 문법? 이런 거 신경쓰지 말고 미드/영드 자막 없이 보기, 영어권 팟캐스트 듣기 등 자유롭게 공부해봐요!',
        userImg:
            'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg',
        nickname: '아인파인땡큐앤유',
        postDate: '2025-01-01',
        clgJoin: true,
        clgState: false,
    },
    {
        id: 9,
        authorId: 'happy2@naver.com',
        category: '습관',
        duration: '매일',
        title: '하루 한 번 소리내서 웃기',
        content:
            '일상에 지쳐 감정을 숨기는 당신! 하하하 웃어봅시다! 하하하하하하! 기분이 좋아질 거예요!',
        userImg:
            'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg',
        nickname: '해피해피',
        postDate: '2025-01-05',
        clgJoin: true,
        clgState: false,
    },
    {
        id: 10,
        authorId: 'test01@naver.com',
        category: '학습',
        duration: '1개월',
        title: '일주일에 책 1권씩 읽기',
        content:
            '숏폼에 빠져 책을 멀리하게 된 제 자신이 참... 근데 여러분도 그렇죠? 일단 얇은 책 부터 시작해서 책 읽는 재미를 들이고, 다음 책을 읽을 설렘이 생길 수 있도록 도전해봐요!',
        userImg:
            'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg',
        nickname: '데이메이커',
        postDate: '2025-01-04',
        clgJoin: true,
        clgState: false,
    },
    {
        id: 11,
        authorId: 'healthylife@kakao.com',
        category: '운동',
        duration: '1개월',
        title: '30일 팔굽혀펴기 챌린지',
        content:
            '첫날 5개부터 시작해서 점점 개수를 늘려가며 30일 동안 팔 힘과 코어를 단련해보세요!',
        userImg:
            'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg',
        nickname: '짐브로',
        postDate: '2024-11-30',
        clgJoin: false,
        clgState: true,
    },
    {
        id: 12,
        authorId: 'peacefulm2nd@gmail.com',
        category: '습관',
        duration: '매일',
        title: '매일 아침 5분간 명상하기',
        content:
            '오늘의 나를 정비하는 시간, 매일 아침 명상을 통해 이너피스를 찾아봅시다 :)',
        userImg:
            'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg',
        nickname: '부지러니',
        postDate: '2024-12-01',
        clgJoin: true,
        clgState: true,
    },
    {
        id: 13,
        authorId: '10page99@gmail.com',
        category: '학습',
        duration: '매일',
        title: '하루 10쪽 독서하기',
        content:
            '하루에 딱 10쪽만 읽어도 한 달이면 한 권을 완독! 작은 습관이 큰 변화를 만든다!',
        userImg:
            'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg',
        nickname: '책벌레99',
        postDate: '2024-12-01',
        clgJoin: true,
        clgState: true,
    },
    {
        id: 14,
        authorId: 'memorymaster@gmail.com',
        category: '학습',
        duration: '매일',
        title: '하루 5개 역사 상식 익히기',
        content:
            '매일 역사적 사건이나 인물을 공부하고, 배운 내용을 정리해봐요. 퀴즈로 복습하면 더 좋을 것 같아요.',
        userImg:
            'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg',
        nickname: '암기마스터',
        postDate: '2024-12-01',
        clgJoin: true,
        clgState: true,
    },
    {
        id: 15,
        authorId: 'detoxic@kakao.com',
        category: '습관',
        duration: '1개월',
        title: '주말마다 디지털 디톡스하기',
        content:
            '소중한 주말! 유튜브, 릴스, 틱톡에 시간을 허비하고 있지 않으신가요? 디지털 디톡스로 더욱 의미있는 주말을 만들어가요!',
        userImg:
            'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg',
        nickname: '얼리어답터',
        postDate: '2024-12-10',
        clgJoin: true,
        clgState: false,
    },
    {
        id: 16,
        authorId: 'veggie123@kakao.com',
        category: '식단',
        duration: '3개월',
        title: '하루 한 끼 채식 도전',
        content:
            '고기 없이 채소 위주로 한 끼를 구성해볼까요? 건강과 환경을 동시에 챙기는 좋은 습관, 내 몸의 변화를 느끼면 채식에 빠지게 될 거예요!',
        userImg:
            'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg',
        nickname: '비건챌린저',
        postDate: '2025-01-18',
        clgJoin: true,
        clgState: false,
    },
    {
        id: 17,
        authorId: 'veggie123@kakao.com',
        category: '식단',
        duration: '1개월',
        title: '인스턴트 대신 자연식 먹기',
        content:
            '패스트푸드를 피하고 자연 그대로의 식재료로 만든 음식을 먹어보자! 몸이 가벼워지는 걸 느낄 수 있을 것!',
        userImg:
            'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg',
        nickname: '건강집착러',
        postDate: '2025-01-04',
        clgJoin: true,
        clgState: false,
    },
    {
        id: 18,
        authorId: 'noyasik@kakao.com',
        category: '식단',
        duration: '1주',
        title: '야식 먹지 않기',
        content:
            '알아요 쉽지 않다는 거... 그래서 딱 1주만 해보고... 다시 생각해볼까요?',
        userImg:
            'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg',
        nickname: '야식끊기1일차',
        postDate: '2024-12-01',
        clgJoin: true,
        clgState: false,
    },
    {
        id: 19,
        authorId: 'test01@naver.com',
        category: '운동',
        duration: '1개월',
        title: '점심 먹고 30분 이상 산책 하기',
        content:
            '식사 후 산책은 혈당조절에도 도움이 되고, 소화를 돕는다고 합니다. 추워도 굴하지 않고 걸어요!!',
        userImg:
            'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg',
        nickname: '데이메이커',
        postDate: '20225-01-15',
        clgJoin: true,
        clgState: false,
    },
    {
        id: 20,
        authorId: 'corecore@gmail.com',
        category: '운동',
        duration: '1개월',
        title: '하루 30초 플랭크 챌린지',
        content:
            '처음에는 30초부터 시작해서 점점 시간을 늘려보자! 코어 근육 강화에 딱!',
        userImg:
            'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg',
        nickname: '머슬코어',
        postDate: '2025-01-15',
        clgJoin: true,
        clgState: false,
    },
    {
        id: 21,
        authorId: '5000won@naver.com',
        category: '습관',
        duration: '1개월',
        title: '일주일에 하루 5천원으로 생활하기',
        content:
            '과소비는 그만! 5천원으로 살아보며 돈의 소중함을 다시 한 번 느낄 수 있어요.',
        userImg:
            'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg',
        nickname: '오천원의행복',
        postDate: '2025-01-15',
        clgJoin: true,
        clgState: false,
    },
    {
        id: 22,
        authorId: 'waterbank@naver.com',
        category: '습관',
        duration: '6개월',
        title: '하루 물 2L 마시기',
        content:
            '건강을 위한 물 2L 마시기를 함께 해요! 물을 충분히 마시면 혈액 순환이 잘 되고, 피부가 촉촉하고 건강해 보일 수 있어요. 또 집중력과 기억력 향상에도 도움이 된다고 해요! 이번 챌린지를 통해 제대로 된 습관을 만들어봐요 :)',
        userImg:
            'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg',
        nickname: '물안먹는하마',
        postDate: '2025-01-16',
        clgJoin: true,
        clgState: true,
    },
    {
        id: 23,
        authorId: 'test01@naver.com',
        category: '습관',
        duration: '3개월',
        title: '일주일에 한 번 친구에게 연락하기',
        content:
            '무소식이 희소식이다 하고 살다보니 어느새 멀어진 것만 같은 친구들, 바쁜데 괜히 귀찮아할까 걱정하지 마세요. 분명 기뻐할 거예요. 사랑은 나누는 거랍니다 :)',
        userImg:
            'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg',
        nickname: '데이메이커',
        postDate: '2025-01-17',
        clgJoin: true,
        clgState: true,
    },
    {
        id: 24,
        authorId: 'luluralra@naver.com',
        category: '운동',
        duration: '6개월',
        title: '매일 10분 스트레칭',
        content:
            '하루 10분만 투자해서 전신을 스트레칭해 보세요. 유연성과 혈액순환을 개선할 수 있어요.',
        userImg:
            'https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg',
        nickname: '룰루라이프',
        postDate: '2025-01-07',
        clgJoin: false,
        clgState: true,
    },
];
