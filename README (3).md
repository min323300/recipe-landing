# 🍳 레시피 영상 & 재료 구매 랜딩페이지

영상으로 요리 배우고, 블로그 글로 확인하고, 필요한 재료는 바로 구매하는 올인원 레시피 페이지입니다.

## 📺 미리보기

![preview](https://via.placeholder.com/800x400/FFE8DD/FF6B35?text=Recipe+Landing+Page)

## ✨ 주요 기능

- **레시피 검색**: 원하는 요리를 빠르게 찾기
- **카테고리 필터**: 찌개/국, 고기요리, 분식 등 카테고리별 분류
- **유튜브 영상**: 레시피 영상 바로 보기
- **블로그 글 연결**: 글로 보는 상세 레시피
- **재료 구매 링크**: 쿠팡, 네이버, 마켓컬리 등 바로 구매

## 🚀 GitHub Pages 배포 방법

1. 이 레포지토리를 Fork 하거나 파일을 업로드
2. Settings → Pages → Source를 `main` 브랜치로 설정
3. 몇 분 후 `https://[username].github.io/recipe-landing` 에서 확인

## 📝 레시피 추가/수정 방법

`recipes.js` 파일을 열어서 수정하세요:

```javascript
{
  id: 7,  // 고유 번호
  title: "레시피 제목",
  description: "간단한 설명",
  category: "찌개/국",  // 카테고리
  thumbnail: "🍲",  // 이모지
  duration: "10:25",  // 영상 길이
  
  // 유튜브 영상 ID
  // https://www.youtube.com/watch?v=ABC123 → "ABC123"
  youtubeId: "ABC123",
  
  // 블로그 링크
  blogUrl: "https://blog.naver.com/...",
  blogTitle: "글로 보는 레시피",
  
  // 재료 목록
  ingredients: [
    {
      name: "상품명",
      price: "12,900원",
      emoji: "🥬",
      shopUrl: "https://www.coupang.com/...",
      shop: "쿠팡"
    }
  ]
}
```

## 📁 파일 구조

```
recipe-landing/
├── index.html      # 메인 페이지
├── recipes.js      # 레시피 데이터 (수정 필요)
└── README.md       # 설명서
```

## 🛒 쿠팡 파트너스 링크 설정

1. [쿠팡 파트너스](https://partners.coupang.com/) 가입
2. 상품 검색 → 링크 생성
3. `recipes.js`의 `shopUrl`에 붙여넣기

## 📱 반응형 지원

- ✅ 데스크톱
- ✅ 태블릿
- ✅ 모바일

## 📄 라이선스

MIT License

---

Made with ❤️ by **BS컴퍼니**
