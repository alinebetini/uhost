var backdrop = document.querySelector('backdrop');
var modal = document.querySelector('.modal');
var selectPlanButton = document.querySelector('.plan button');

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEvenListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}