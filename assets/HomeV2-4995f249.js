import{R as v,r as n,u as x,g as P,j as t,a as c,C as g}from"./index-6cfbd91a.js";import{c as o,u as j,a as f,L as m}from"./Layout-b449d43b.js";import{L as R}from"./ListMovies-e660580a.js";import{P as D}from"./Pagination-4ac3f621.js";import{S}from"./Skeleton-aac10ad3.js";import"./index-336640b2.js";import"./index-cf2a4ec6.js";const s=e=>e.home,M=o(s,e=>e.dataMovies.map(a=>({id:a.id,title:a.title,original_title:a.original_title,poster_path:a.poster_path}))),H=o(s,e=>e.loading),L=o(s,e=>e.totalPage),T=o(s,e=>e.totalResult),_=()=>{const[e,i]=n.useState(1),a=j(),{loading:h,movies:r,totalPage:u,totalResult:d}=x(f({loading:H,movies:M,totalPage:L,totalResult:T})),p=l=>{l>=1&&l<=u&&i(l)};return n.useEffect(()=>{a(P(e))},[a,e]),h?t.jsx(m,{level1:"Trang chu",level2:"Danh sach",level3:"Phim xem nhieu",children:t.jsx(c,{children:t.jsx(g,{span:24,children:t.jsx(S,{active:!0})})})}):t.jsx(m,{level1:"Trang chu",level2:"Danh sach",level3:"Phim xem nhieu",children:t.jsx(c,{children:t.jsxs(g,{span:24,children:[t.jsx(R,{movies:r}),r.length>0&&t.jsx(D,{current:e,total:d,changePage:p})]})})})},b=v.memo(_);export{b as default};