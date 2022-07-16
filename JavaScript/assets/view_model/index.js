'use srict';
import model from '../model/index.js';

const str = document.getElementById('str');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
const mode = document.getElementById('mode');
btn.addEventListener('click', () =>{
    const answer = new model(str.value, mode.value).make();
    result.innerText = answer;
})