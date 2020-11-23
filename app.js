//for(let i = 0; i < 63 ; i++){
//    $('.grid').append($('<div class="cell">'))
//}
const PALETTE = [
    'red',
    'blue',
    'cyan',
    'green',
    'purple',
    '#b57edc', //lavender
    'orange',
    'yellow',
    'white',
    'black',
  ]
for(let i = 1; i < PALETTE.length; i++){
    const nextColor = PALETTE[i]
    $('.palette').append($('<button style="background-color:'+nextColor+'">'))
}

function makePalette() {
    $('.palette button').first().addClass('active');
  }

makePalette()

function makeGrid() {
    for(let i = 0; i < 64 ; i++){
        $('.grid').append($('<div class="cell">'))
    }
}
makeGrid()

function onPaletteClick() {
    $('.active').removeClass('active')
    $(this).addClass('active')
}
$('.palette button').click(onPaletteClick);

function onGridClick(){
    $(this).css('background-color', $('.active').css('background-color')).addClass('filled');
}
$('.grid .cell').click(onGridClick);

function onClearClick(){
    $('.grid .cell').css('background-color', '').removeClass('filled')
}
$('.controls .clear').click(onClearClick)

function onFillAllClick(){
    $('.grid .cell').css('background-color', $('.active').css('background-color') )
}
$('.controls .fill-all').click(onFillAllClick)

function onFillEmptyClick(){  
    $('.cell').not('.filled').css('background-color', $('.active').css('background-color')).addClass('filled')
}
$('.controls .fill-empty').click(onFillEmptyClick)

$('body').append($('<input id="customColor" placeholder="Custom Color" style="text-align: center" type="text">'))
$('body').append($('<br><button id="customColorBtn">').text('Create'))

$('#customColorBtn').on('click', function(){
    $('.active').removeClass('active')
    $('.palette').prepend($('<button class="active" style="background-color:'+$('#customColor').val()+'">'))
 
    function onPaletteClick() {
        $('.active').removeClass('active')
        $(this).addClass('active')
}
    $('.palette button').click(onPaletteClick);
})

$(document).mousedown(function() {
    isDown = true;
  })
  .mouseup(function() {
    isDown = false;    
});

$('.grid .cell').on("mouseenter", function(){
    if(isDown == true){
        $(this).css('background-color', $('.active').css('background-color'))
    }
})

$('body').append($('<br><label>Columns</label><input id="columns" type="number"><br>'))
$('body').append($('<label>Rows</label><input id="rows" type="number">'))
$('body').append($('<button>').text('Change Size'))

//Got lost right around here.


