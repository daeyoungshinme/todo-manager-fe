# Todo Manager_fe

## 할일 매니저 토이 프로젝트

- 여러가지 할일을 칸반보드 디자인으로 관리하는 프로그램

## Front-End

### [stack]

- Node v18.15.0
- Reactjs v18.2.0
- webpack v5.76.1

### [modules]

##### dependencies

```bash
"react": "^18.2.0",
"react-dom": "^18.2.0"
```

##### devDependencies

```bash
"@babel/core": "^7.21.0",
"@babel/plugin-proposal-class-properties": "^7.18.6",
"@babel/plugin-syntax-dynamic-import": "^7.8.3",
"@babel/plugin-transform-react-constant-elements": "^7.20.2",
"@babel/plugin-transform-react-inline-elements": "^7.21.0",
"@babel/plugin-transform-runtime": "^7.21.0",
"@babel/preset-env": "^7.20.2",
"@babel/preset-react": "^7.18.6",
"babel-loader": "^9.1.2",
"babel-plugin-transform-react-remove-prop-types": "^0.4.24",
"css-loader": "^6.7.3",
"style-loader": "^3.3.2",
"clean-webpack-plugin": "^4.0.0",
"html-webpack-plugin": "^5.5.0",
"mini-css-extract-plugin": "^2.7.3",
"webpack": "^5.76.1",
"webpack-cli": "^5.0.1",
"webpack-dev-server": "^4.11.1"
```

### 이슈 모음

- 20230316 npm start 명령어 변경
  - web-dev-server 로 개발서버를 띄우면 webpack.config.js 내의 resolve.alias 가 적용이 안되는 이슈가 있어서 webpack serve로 명령어 변경

---

## github

```bash
$ git clone https://github.com/top-d3ei/todo-manager-fe
```

## 프로젝트 셋팅

### 프로젝트 생성 및 모듈 설치

```bash
# git clone 후
$ npm install
```

### 프로젝트 서버 구동

```bash
# localhost:9000
$ npm start
```

### 프로젝트 directory 구조

```bash
todo-manager-fe
⏐⎯ assets/
⏐⎯ dist/
⏐⎯ node_modules/
⏐⎯ src/
    ⏐⎯ css/
    ⏐⎯ componenets/
    ⏐⎯ pages/
    ⏐⎯ app.js
    ⏐⎯ index.js
⏐⎯ .gitignore
⏐⎯ babel.config.js
⏐⎯ package.json
⏐⎯ READEME.md
⏐⎯ webpack.config.js
```

### 프로젝트 API 개발 가이드

- components/ 추가
  - components/[newComponent].js
  - components/index.js 에 [newComponent].js 추가
- pages/ 추가
  - @components 의 컴포넌트들을 조립하여 페이지 구성
- css/style.css

  - 페이지 및 컴포넌트를 디자인

- 추후 추가 구성
  - TDD 구성
  - state 관리 모듈 사용
  - typescript 재구성
  - nextjs 재구성
