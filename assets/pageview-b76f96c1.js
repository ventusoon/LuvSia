import{_ as t}from"./app-928bef58.js";const n=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-928bef58.js").then(r=>r.M),[]);return e({serverURL:"https://waline-comment.vuejs.press"})}catch{console.error("@waline/client is not installed!");return}};export{n as updatePageview};