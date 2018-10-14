"use strict";

function isSunday(){
    return new Date().getDay()===0;
}

function isPost(request){
    return request.method==="POST";
}

function onBeforeRequest(request){
    return {cancel: isSunday() && isPost(request)};
}

chrome.webRequest.onBeforeRequest.addListener(onBeforeRequest, {urls: ["<all_urls>"]}, ["blocking"]);
