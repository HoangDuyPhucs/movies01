import{R as s,I as t,j as e}from"./index-d5a53d45.js";import{L as a}from"./Layout-92c0d9be.js";import{L as i}from"./ListMovies-c627f708.js";import"./index-dd9a1c74.js";import"./Skeleton-d11c7b9c.js";const r=()=>{const o=t.getDataMoviesFromLocalStorage();return e.jsxs(a,{level1:"Phim yeu thich",level2:"Danh sach",level3:"Phim",children:[e.jsx("h2",{children:" Danh sach bo phim ban yeu thich"}),o&&e.jsx(i,{movies:o})]})},n=s.memo(r);export{n as default};