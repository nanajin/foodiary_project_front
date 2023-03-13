### Foodiary 프론트엔드 저장소에 오신걸 환영합니다

## 목차
- [프로젝트 소개](#foodiary)
- [배포 링크](#link)
- [사용 기술](#사용-기술프론트)
- [주요 기능](#주요-기능)
- [기능 플로우(이미지)](#기능-플로우이미지)

<br/>

# 📒Foodiary
Typescript 기반 React 웹 프로젝트 'Foodiary'입니다!
- “오늘 뭐 먹지?” “오늘 뭐 먹었지?” 라는 분들께 추천드리는 나만의 다이어리 웹입니다.
- 본인의 취향에 따른 음식 추천과 일주일 식단 추천을 받을 수 있으며 먹은 음식에 대한 기록을 할 수 있습니다.
## 📆기간
- 2022.12.19 ~ 2023.01.30
## 👨‍👩‍👧‍👧팀 구성
- 프론트엔드 2
- 백엔드 2
## 🖥️배포 환경
- 프론트: Netlify
- 백: AWS, 깃액션
## 🔗Link
- https://foodiary.netlify.app/

## 🖥️사용 기술(프론트)
<p align="center">
<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=TypeScript&logoColor=white">&nbsp
<img src="https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=white">&nbsp
<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=#5A29E4">&nbsp
<br>
<img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=#CC6699">&nbsp
<img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=Netlify&logoColor=#00C7B7">&nbsp
</p>

> 사용 라이브러리
> - craco
> - react-hook-form, yup
> - lodash
> - framer-motion
> - react-icons
> - react-slick
> - zustand

## 💡주요 기능
- **취향에 따른 음식 무한 추천**
- **일주일치 식단(하루 두끼) 추천**
- 게시글 랭킹
- 섭취한 음식 기록 **다이어리** 기능
- 타인 프로필 조회 기능
- 다이어리 게시판 기능
- 1:1 문의하기 
- 추천 메뉴 좋아요/싫어요를 통한 취향 변경 기능
- 소셜 로그인(구글, 네이버)

## ✏️기능 플로우(이미지)
- **메인페이지**
> - 음식 메뉴 추천(음식 카테고리별 이미지 상이)
>   - 새로고침 버튼을 누르면 새로운 메뉴 추천
>   - Good, No thanks 버튼으로 DB에 자신의 음식 취향 반영(회원만 가능), 후에 취향 음식과 비슷한 메뉴들로 추천받을 수 있음
> - 1달, 1주별 좋아요순 랭킹 확인 가능
<br/>
<p align="center">
  <img width="20%" height="40%" src="https://user-images.githubusercontent.com/98149590/224647102-3fe7906b-e6eb-4a9f-8463-887c664d8be7.png"/>
  <img width="20%" height="40%" src="https://user-images.githubusercontent.com/98149590/224648377-354899e6-c397-4089-ab9a-7b5fe1069e87.png" />
</p>

- **로그인 페이지**
> - 소셜 로그인(구글, 네이버)
>   - 처음 접속한 사용자라면 회원가입 페이지로 이동
> - 자체 로그인, 회원가입 가능 
> - 등록된 이메일로 아이디, 비밀번호 찾기 가능
<br/>
<p align="center">
  <img width="20%" height="40%" src="https://user-images.githubusercontent.com/98149590/224649465-36d06aa2-22a9-46fc-bc95-e359c2531f25.png" />
  <img width="20%" height="40%" src="https://user-images.githubusercontent.com/98149590/224649649-b4d0c02f-59df-4799-9759-6668c0b87114.png" />
</p>

- **회원가입 페이지** (중간 부분 생략)
> - 자체 회원가입 시
>   - 약관동의, 아이디 입력, 비밀번호 입력, 비밀번호 확인, 이메일 인증, 프로필 사진 등록, 프로필 메세지 등록 후 가입 완료
> - 처음으로 소셜 로그인에 시도할 시
>   - 이메일 인증을 뺀 모든 프로세스 동일
>   - 이후 소셜로그인 버튼을 눌러도 되고 직접 아이디, 비번을 입력하고 로그인해도 됨
<br/>
<p align="center">
  <img width="20%" height="40%" src="https://user-images.githubusercontent.com/98149590/224649765-4f432dac-209b-489e-bb05-433eadc0f458.png"/>
  <img width="20%" height="40%" src="https://user-images.githubusercontent.com/98149590/224649952-89121bb3-20ef-4674-b90d-b3abc3212b6a.png" />
  <img width="20%" height="40%" src="https://user-images.githubusercontent.com/98149590/224650045-ce429757-eba1-4053-8b86-078a66ec1570.png" />
</p>

- **식단추천 페이지**
> - 현재 날짜 기준 일주일치 식단 제공
<br/>
<p align="center">
  <img width="20%" height="40%" src="https://user-images.githubusercontent.com/98149590/224650306-05cd6897-3072-49d3-8313-970da0be1b89.png"/>
</p>

- **검색 페이지**
> - 단어로 게시글 검색 가능
> - 회원은 검색어 저장, 삭제 가능 / 비회원은 검색만 가능
<br/>
<p align="center">
  <img width="20%" height="40%" src="https://user-images.githubusercontent.com/98149590/224650506-621c623f-eed1-46d5-b097-0d917df21587.png"/>
  <img width="20%" height="40%" src="https://user-images.githubusercontent.com/98149590/224654716-9cf6a064-5369-4146-bae4-7e307ccbb2c8.png"/>
  <img width="20%" height="40%" src="https://user-images.githubusercontent.com/98149590/224660381-6658297c-afb2-4007-a23f-be704f7f523c.png"/>
</p>

- **하루공유 페이지**
> - 최신글 기준 정렬
> - 한 페이지당 10개씩 데이터 불러옴
> - 무한 스크롤 적용
> - 글 작성, 수정, 삭제 가능
<br/>
<p align="center">
  <img width="20%" height="40%" src=""/>
</p>

- **하루 공유 상세 페이지**
> - 이미지 Carousel, 이미지는 최소 1장, 최대 5장까지 가능
> - 랭킹 뱃지 
> - 좋아요, 스크랩 가능 (회원 전용)
> - 댓글 기능 (작성은 회원 전용)
<br/>
<p align="center">
  <img width="20%" height="40%" src="https://user-images.githubusercontent.com/98149590/224650618-5283f2a4-43a8-4177-b266-aacfbe32ec30.png"/>
  <img width="20%" height="40%" src="https://user-images.githubusercontent.com/98149590/224650773-f1e6fa31-9e23-4016-9a09-f320f77d0ed5.png"/>
</p>

- **마이페이지**
> - 내가 쓴 글, 댓글, 좋아요 글, 스크랩 글을 볼 수 있음
> - 메인화면에서 음식 메뉴 추천을 받고 아래 버튼을 눌러 데이터 저장된 메뉴들이 "나의 추천 메뉴"에 있음
>   - 버튼을 눌러 변경 가능
>   - 10개씩 페이지네이션
>   - 무한 스크롤 적용
> - 1:1 문의하기 
<br/>
<p align="center">
  <img width="20%" height="40%" src="https://user-images.githubusercontent.com/98149590/224650910-afaf371f-268a-4223-ac6b-dd93b880c633.png"/>
  <img width="20%" height="40%" src="https://user-images.githubusercontent.com/98149590/224650978-63cedc56-38cb-4110-82df-ae95b3b5b6bb.png"/>
  <img width="20%" height="40%" src="https://user-images.githubusercontent.com/98149590/224663557-97fcc30c-6abc-43c1-8970-5d7ed6dde04a.png"/>
</p>
