const quiz=document.getElementById('quiz');
quiz.innerHTML += `<div class="pergunta"><h3>1. Fechar a torneira ao escovar os dentes ajuda a economizar?</h3>
<label><input type="radio" name="q1" value="c"> Sim</label>
<label><input type="radio" name="q1" value="a"> Não</label></div>`;
quiz.innerHTML += `<div class="pergunta"><h3>2. Reciclar significa transformar resíduos em novos produtos?</h3>
<label><input type="radio" name="q2" value="c"> Sim</label>
<label><input type="radio" name="q2" value="a"> Não</label></div>`;
quiz.innerHTML += `<div class="pergunta"><h3>3. Energia solar é renovável?</h3>
<label><input type="radio" name="q3" value="c"> Sim</label>
<label><input type="radio" name="q3" value="a"> Não</label></div>`;
quiz.innerHTML += `<div class="pergunta"><h3>4. Separar o lixo é coleta seletiva?</h3>
<label><input type="radio" name="q4" value="c"> Sim</label>
<label><input type="radio" name="q4" value="a"> Não</label></div>`;
quiz.innerHTML += `<div class="pergunta"><h3>5. Apagar luzes reduz consumo de energia?</h3>
<label><input type="radio" name="q5" value="c"> Sim</label>
<label><input type="radio" name="q5" value="a"> Não</label></div>`;
quiz.innerHTML += `<div class="pergunta"><h3>6. Usar bicicleta ajuda o meio ambiente?</h3>
<label><input type="radio" name="q6" value="c"> Sim</label>
<label><input type="radio" name="q6" value="a"> Não</label></div>`;
quiz.innerHTML += `<div class="pergunta"><h3>7. Reutilizar materiais reduz resíduos?</h3>
<label><input type="radio" name="q7" value="c"> Sim</label>
<label><input type="radio" name="q7" value="a"> Não</label></div>`;
quiz.innerHTML += `<div class="pergunta"><h3>8. Desperdício de alimentos gera impactos ambientais?</h3>
<label><input type="radio" name="q8" value="c"> Sim</label>
<label><input type="radio" name="q8" value="a"> Não</label></div>`;
quiz.innerHTML += `<div class="pergunta"><h3>9. Plantar árvores ajuda a qualidade do ar?</h3>
<label><input type="radio" name="q9" value="c"> Sim</label>
<label><input type="radio" name="q9" value="a"> Não</label></div>`;
quiz.innerHTML += `<div class="pergunta"><h3>10. Consumir apenas o necessário é consumo consciente?</h3>
<label><input type="radio" name="q10" value="c"> Sim</label>
<label><input type="radio" name="q10" value="a"> Não</label></div>`;
quiz.innerHTML += `<div class="pergunta"><h3>11. A água é um recurso que deve ser preservado?</h3>
<label><input type="radio" name="q11" value="c"> Sim</label>
<label><input type="radio" name="q11" value="a"> Não</label></div>`;
quiz.innerHTML += `<div class="pergunta"><h3>12. Sustentabilidade busca equilíbrio entre produção e natureza?</h3>
<label><input type="radio" name="q12" value="c"> Sim</label>
<label><input type="radio" name="q12" value="a"> Não</label></div>`;

function corrigirQuiz(){
let pontos=0;
for(let i=1;i<=12;i++){
 let r=document.querySelector(`input[name="q${i}"]:checked`);
 if(r && r.value==='c') pontos++;
}
let msg='';
if(pontos<5) msg='Continue aprendendo!';
else if(pontos<9) msg='Muito bem!';
else msg='Parabéns, você é um defensor da sustentabilidade!';
document.getElementById('resultado').innerHTML=`🏆 Você acertou ${pontos}/12.<br>${msg}`;
}
