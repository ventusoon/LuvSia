import{_ as t}from"./app-f64d5265.js";const i=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-f64d5265.js").then(r=>r.M),[]);return e({serverURL:"https://waline.luvsia.com/"})}catch{console.error("@waline/client is not installed!");return}};export{i as updatePageview};