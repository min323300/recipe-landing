// ============================================
// 🍳 레시피 데이터 파일
// ============================================
// 
// 📌 수정 방법:
// 1. youtubeId: 유튜브 영상 URL에서 v= 뒤의 코드
//    예: https://www.youtube.com/watch?v=ABC123 → "ABC123"
//
// 2. blogUrl: 블로그/티스토리 글 전체 URL
//
// 3. ingredients: 재료 목록
//    - name: 상품명
//    - price: 가격
//    - emoji: 이모지
//    - shopUrl: 쿠팡/네이버 등 상품 링크
//    - shop: 쇼핑몰 이름 (쿠팡, 네이버, 마켓컬리 등)
//
// ============================================

const recipesData = [
  {
    id: 1,
    title: "초간단 김치찌개",
    description: "10분만에 완성하는 칼칼한 김치찌개",
    category: "찌개/국",
    thumbnail: "🍲",
    duration: "10:25",
    
    // 유튜브 영상 ID (실제 영상 ID로 변경하세요)
    youtubeId: "dQw4w9WgXcQ",
    
    // 블로그/티스토리 링크
    blogUrl: "https://blog.naver.com/example/kimchi",
    blogTitle: "김치찌개 황금레시피 (글로 보기)",
    
    // 필요한 재료 & 쇼핑 링크
    ingredients: [
      {
        name: "종가집 김치 1kg",
        price: "12,900원",
        emoji: "🥬",
        shopUrl: "https://www.coupang.com/vp/products/12345",
        shop: "쿠팡"
      },
      {
        name: "청정원 고춧가루",
        price: "8,500원",
        emoji: "🌶️",
        shopUrl: "https://www.coupang.com/vp/products/12346",
        shop: "쿠팡"
      },
      {
        name: "국산 돼지고기 앞다리살",
        price: "15,900원",
        emoji: "🥩",
        shopUrl: "https://www.coupang.com/vp/products/12347",
        shop: "쿠팡"
      },
      {
        name: "참기름 500ml",
        price: "9,900원",
        emoji: "🫒",
        shopUrl: "https://smartstore.naver.com/example",
        shop: "네이버"
      }
    ]
  },
  
  {
    id: 2,
    title: "부드러운 소불고기",
    description: "아이들도 좋아하는 달콤한 불고기",
    category: "고기요리",
    thumbnail: "🥘",
    duration: "15:30",
    youtubeId: "dQw4w9WgXcQ",
    blogUrl: "https://example.tistory.com/bulgogi",
    blogTitle: "소불고기 양념 비법 (글로 보기)",
    ingredients: [
      {
        name: "한우 불고기용 300g",
        price: "28,900원",
        emoji: "🥩",
        shopUrl: "https://www.coupang.com/vp/products/22345",
        shop: "쿠팡"
      },
      {
        name: "백설 불고기양념",
        price: "4,500원",
        emoji: "🍶",
        shopUrl: "https://www.coupang.com/vp/products/22346",
        shop: "쿠팡"
      },
      {
        name: "양파 3kg",
        price: "6,900원",
        emoji: "🧅",
        shopUrl: "https://www.kurly.com/goods/12345",
        shop: "마켓컬리"
      },
      {
        name: "대파 1단",
        price: "2,500원",
        emoji: "🥬",
        shopUrl: "https://www.coupang.com/vp/products/22348",
        shop: "쿠팡"
      }
    ]
  },
  
  {
    id: 3,
    title: "바삭한 돈까스",
    description: "경양식 돈까스 집에서 만들기",
    category: "튀김요리",
    thumbnail: "🍛",
    duration: "20:15",
    youtubeId: "dQw4w9WgXcQ",
    blogUrl: "https://blog.naver.com/example/donkatsu",
    blogTitle: "돈까스 바삭하게 튀기는 법 (글로 보기)",
    ingredients: [
      {
        name: "돼지 등심 500g",
        price: "12,900원",
        emoji: "🥩",
        shopUrl: "https://www.coupang.com/vp/products/32345",
        shop: "쿠팡"
      },
      {
        name: "빵가루 1kg",
        price: "3,900원",
        emoji: "🍞",
        shopUrl: "https://www.coupang.com/vp/products/32346",
        shop: "쿠팡"
      },
      {
        name: "돈까스 소스",
        price: "5,500원",
        emoji: "🍶",
        shopUrl: "https://www.coupang.com/vp/products/32347",
        shop: "쿠팡"
      },
      {
        name: "식용유 1.8L",
        price: "7,900원",
        emoji: "🫒",
        shopUrl: "https://www.emart.com/product/12345",
        shop: "이마트"
      }
    ]
  },
  
  {
    id: 4,
    title: "매콤 떡볶이",
    description: "분식집 그 맛! 쫄깃한 떡볶이",
    category: "분식",
    thumbnail: "🍢",
    duration: "12:00",
    youtubeId: "dQw4w9WgXcQ",
    blogUrl: "https://example.tistory.com/tteokbokki",
    blogTitle: "떡볶이 황금비율 레시피 (글로 보기)",
    ingredients: [
      {
        name: "밀떡 1kg",
        price: "5,900원",
        emoji: "🍡",
        shopUrl: "https://www.coupang.com/vp/products/42345",
        shop: "쿠팡"
      },
      {
        name: "고추장 1kg",
        price: "8,900원",
        emoji: "🫙",
        shopUrl: "https://www.coupang.com/vp/products/42346",
        shop: "쿠팡"
      },
      {
        name: "어묵 500g",
        price: "4,500원",
        emoji: "🍥",
        shopUrl: "https://www.coupang.com/vp/products/42347",
        shop: "쿠팡"
      },
      {
        name: "삶은 계란 10구",
        price: "3,900원",
        emoji: "🥚",
        shopUrl: "https://www.coupang.com/vp/products/42348",
        shop: "쿠팡"
      }
    ]
  },
  
  {
    id: 5,
    title: "집밥 된장찌개",
    description: "구수한 된장찌개 끓이는 법",
    category: "찌개/국",
    thumbnail: "🥣",
    duration: "18:45",
    youtubeId: "dQw4w9WgXcQ",
    blogUrl: "https://blog.naver.com/example/doenjang",
    blogTitle: "된장찌개 맛있게 끓이는 팁 (글로 보기)",
    ingredients: [
      {
        name: "순창 된장 1kg",
        price: "9,900원",
        emoji: "🫙",
        shopUrl: "https://www.coupang.com/vp/products/52345",
        shop: "쿠팡"
      },
      {
        name: "두부 2모",
        price: "2,500원",
        emoji: "🧈",
        shopUrl: "https://www.coupang.com/vp/products/52346",
        shop: "쿠팡"
      },
      {
        name: "애호박",
        price: "1,900원",
        emoji: "🥒",
        shopUrl: "https://www.kurly.com/goods/52347",
        shop: "마켓컬리"
      },
      {
        name: "청양고추 100g",
        price: "2,900원",
        emoji: "🌶️",
        shopUrl: "https://www.coupang.com/vp/products/52348",
        shop: "쿠팡"
      }
    ]
  },
  
  {
    id: 6,
    title: "치즈 계란말이",
    description: "도시락 반찬 1등! 촉촉한 계란말이",
    category: "반찬",
    thumbnail: "🍳",
    duration: "8:30",
    youtubeId: "dQw4w9WgXcQ",
    blogUrl: "https://example.tistory.com/eggroll",
    blogTitle: "계란말이 예쁘게 마는 법 (글로 보기)",
    ingredients: [
      {
        name: "계란 30구",
        price: "7,900원",
        emoji: "🥚",
        shopUrl: "https://www.coupang.com/vp/products/62345",
        shop: "쿠팡"
      },
      {
        name: "슬라이스 치즈",
        price: "5,500원",
        emoji: "🧀",
        shopUrl: "https://www.coupang.com/vp/products/62346",
        shop: "쿠팡"
      },
      {
        name: "계란말이팬",
        price: "15,900원",
        emoji: "🍳",
        shopUrl: "https://www.coupang.com/vp/products/62347",
        shop: "쿠팡"
      },
      {
        name: "맛소금",
        price: "1,500원",
        emoji: "🧂",
        shopUrl: "https://www.coupang.com/vp/products/62348",
        shop: "쿠팡"
      }
    ]
  }
  
  // ============================================
  // 📌 새 레시피 추가 방법:
  // 위의 형식을 복사하여 아래에 붙여넣고 수정하세요
  // id는 고유한 숫자로 변경해주세요
  // ============================================
  
];
