// ==UserScript==
// @name         Attendence Alerter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Vishnu Priyan
// @match        https://meet.google.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==


window.onload =(function() {
    'use strict';
    let watch =true;
    // Replace this with whichever Video you want to play to alert you
    const VIDEO_URL = "https://youtu.be/6oBvMxax93A";
    const triggers = [10.50,11.50,12.50,13.50,14.31,14.50,15.50];
    if(watch){

        let presentChecker =setInterval(function(){
            var today = new Date();
            var hrs = today.getHours();
            var min = today.getMinutes();
            var time = hrs + "." + min;
            for(let i in triggers){
                if(time == triggers[i]){
                    window.open(VIDEO_URL);
                    alert("Alert for Attendance bro");
                    watch =false;
                    clearInterval(presentChecker);
                }
            }
        },1000);
    }

    // Your code here...
})();
