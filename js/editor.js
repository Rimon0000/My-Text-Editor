//way-1
//textarea function
function areaField(code, style){
const textAreaField = document.getElementById('textarea-field');
textAreaField.style[code] = style;
}
//add event listener and call areaField function, set style
document.getElementById('btn-bold').addEventListener('click', function(){
    areaField('fontWeight', 'bold');
})


// easy-way 
// 1.bold
document.getElementById('btn-bold').addEventListener('click', function(){
    const textAreaField = document.getElementById('textarea-field');
    textAreaField.style.fontWeight = 'bold';
})

// 2.italic
document.getElementById('btn-italic').addEventListener('click', function(){
    const textAreaField = document.getElementById('textarea-field');
    textAreaField.style.fontStyle = 'italic';
})

// 3. underline
document.getElementById('btn-underline').addEventListener('click', function(){
    const textAreaField = document.getElementById('textarea-field');
    textAreaField.style.textDecoration = 'underline';
})

// 3. text align:
document.getElementById('align-left').addEventListener('click', function(){
    const textAreaField = document.getElementById('textarea-field');
    textAreaField.style.textAlign = 'left';
})

// 4. text align:center
document.getElementById('align-center').addEventListener('click', function(){
    const textAreaField = document.getElementById('textarea-field');
    textAreaField.style.textAlign = 'center';
})

// 5. text align:right
document.getElementById('align-right').addEventListener('click', function(){
    const textAreaField = document.getElementById('textarea-field');
    textAreaField.style.textAlign = 'right';
})

// 6.font size
document.getElementById('number-field').addEventListener('click', function(event){
    const text = event.target.value;
    const textAreaField = document.getElementById('textarea-field');
    textAreaField.style.fontSize = text+ "px";      //`${text}px` buji nai
})

// 7.color
document.getElementById('color-field').addEventListener('input', function(event){
    const colors = event.target.value;
    const textAreaField = document.getElementById('textarea-field');
    textAreaField.style.color = colors ;
})

