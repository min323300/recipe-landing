# 🍳 레시피 랜딩페이지 - 구글 시트 연동 가이드

## 📋 목차
1. [구글 시트 만들기](#1-구글-시트-만들기)
2. [시트 구조](#2-시트-구조)
3. [웹에 게시하기](#3-웹에-게시하기)
4. [사이트에 연결하기](#4-사이트에-연결하기)
5. [이미지 업로드 방법](#5-이미지-업로드-방법)

---

## 1. 구글 시트 만들기

### 1단계: 새 스프레드시트 생성
1. [Google Sheets](https://sheets.google.com) 접속
2. **빈 스프레드시트** 클릭
3. 제목을 `레시피 관리`로 변경

### 2단계: 시트 3개 생성
시트 탭 이름을 **정확히** 아래와 같이 설정:
- `카테고리`
- `레시피`
- `상품`

⚠️ **중요**: 시트 이름이 정확히 일치해야 작동합니다!

---

## 2. 시트 구조

### 📑 시트1: 카테고리

| A | B |
|---|---|
| **카테고리명** | **이미지URL** |
| 김치찌개 | images/kimchi-jjigae.png |
| 된장찌개 | images/doenjang-jjigae.png |
| 고기요리 | images/meat.png |
| 반찬 | images/banchan.png |
| 디저트 | images/dessert.png |

### 📑 시트2: 레시피

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| **ID** | **제목** | **설명** | **카테고리** | **이미지URL** | **유튜브링크** | **블로그링크** | **영상길이** |
| 1 | 김치찌개 황금레시피 | 집에서 10분만에 완성하는 김치찌개 | 김치찌개 | images/recipe-1.png | https://youtube.com/watch?v=xxx | https://blog.com/xxx | 10:25 |
| 2 | 된장찌개 맛있게 끓이기 | 구수한 된장찌개 비법 공개 | 된장찌개 | images/recipe-2.png | https://youtube.com/watch?v=yyy | https://blog.com/yyy | 8:30 |

### 📑 시트3: 상품

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| **레시피ID** | **상품명** | **가격** | **이미지URL** | **쇼핑몰** | **쇼핑링크** |
| 1 | 종가집 맛김치 | 12,900원 | images/product-kimchi.png | 쿠팡 | https://coupang.com/xxx |
| 1 | 국산 돼지고기 앞다리살 | 15,000원 | images/product-pork.png | 쿠팡 | https://coupang.com/yyy |
| 1 | 순두부 | 3,500원 | images/product-tofu.png | 쿠팡 | https://coupang.com/zzz |
| 2 | 해찬들 재래식 된장 | 8,900원 | images/product-doenjang.png | 쿠팡 | https://coupang.com/aaa |
| 2 | 국산 두부 | 2,500원 | images/product-tofu2.png | 쿠팡 | https://coupang.com/bbb |
| 2 | 애호박 | 3,000원 | images/product-hobak.png | 쿠팡 | https://coupang.com/ccc |

> 💡 **핵심**: `레시피ID`가 같으면 해당 레시피의 재료들입니다!  
> 예: 레시피ID가 1인 상품들 = 김치찌개 재료들

---

## 3. 웹에 게시하기

### 1단계: 파일 > 공유 > 웹에 게시
![웹에 게시](https://i.imgur.com/example.png)

### 2단계: 설정
- **링크**: 전체 문서
- **형식**: 웹페이지
- **게시** 버튼 클릭

### 3단계: 시트 ID 복사
URL에서 `/d/` 와 `/edit` 사이의 문자열이 시트 ID입니다.

```
https://docs.google.com/spreadsheets/d/여기가_시트_ID/edit
                                      ↑↑↑↑↑↑↑↑↑↑↑↑↑
```

예시: `1iq0rpcyhqRayAXIdr-D4NYqZQ_J8Qvf_GFF3vgVU6bw`

---

## 4. 사이트에 연결하기

### index.html 수정
```javascript
const SHEET_ID = '여기에_구글시트_ID를_넣으세요';
         ↓
const SHEET_ID = '1iq0rpcyhqRayAXIdr-D4NYqZQ_J8Qvf_GFF3vgVU6bw';
```

### GitHub 업로드
1. GitHub 레포지토리 접속
2. `index.html` 파일 수정 (또는 업로드)
3. Commit changes

---

## 5. 이미지 업로드 방법

### 방법 A: GitHub images 폴더 (추천 ⭐)

1. GitHub 레포에 `images` 폴더 생성
2. 이미지 파일 업로드 (영문 파일명 권장)
3. 구글 시트에 경로 입력

```
예시:
이미지URL: images/kimchi-jjigae.png
```

### 방법 B: 외부 이미지 URL

1. 이미지를 호스팅 서비스에 업로드
   - [Imgur](https://imgur.com)
   - [Postimages](https://postimages.org)
   - 구글 드라이브 (공개 설정 필요)

2. 전체 URL 복사해서 구글 시트에 입력

```
예시:
이미지URL: https://i.imgur.com/abc123.png
```

### 이미지 파일명 규칙
- ✅ 영문, 숫자, 하이픈(-), 언더스코어(_) 사용
- ❌ 한글, 공백, 특수문자 사용 금지

```
✅ 좋은 예: kimchi-jjigae.png, recipe_01.jpg
❌ 나쁜 예: 김치찌개.png, recipe 01.jpg
```

---

## 📊 운영 요약

| 작업 | 방법 |
|------|------|
| 카테고리 추가 | 시트1에 행 추가 |
| 레시피 추가 | 시트2에 행 추가 (ID 순서대로) |
| 상품 추가 | 시트3에 행 추가 (레시피ID 연결) |
| 수정 | 해당 셀 직접 수정 |
| 삭제 | 해당 행 삭제 |

👉 **시트만 수정하면 사이트에 자동 반영!**

---

## ⚠️ 주의사항

1. **시트 이름** 정확히 일치 (카테고리, 레시피, 상품)
2. **컬럼명** 정확히 일치 (첫 번째 행)
3. **웹에 게시** 상태 유지
4. **이미지 파일명** 영문으로

---

## 🆘 문제 해결

### 데이터가 안 나와요
1. 시트 이름 확인 (정확히 `카테고리`, `레시피`, `상품`)
2. 웹에 게시 상태 확인
3. SHEET_ID 정확한지 확인

### 이미지가 안 나와요
1. 파일명에 한글/공백 없는지 확인
2. 경로 정확한지 확인 (`images/파일명.png`)
3. GitHub에 이미지 파일 업로드 됐는지 확인

### Rate limit 오류
- 10~20분 대기 후 재시도
- 새로고침 너무 자주 하지 않기

---

## 📞 문의

BS컴퍼니 | 디지털 마케팅 전문
