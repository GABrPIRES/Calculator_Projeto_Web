$(function () {

    //Button events

    $('#btn-closed').click(function () {
        $('.calculator').css('display','none');
        $('.informations-calculator').css('display','contents');
    })

    $('#btn-historic').click(function () {
        thiselement = $(this).text();
        alert(historic);
    })

    $('#btn-destructor').click(function () {
        var lengthList = listCalculator.length;
        var lengthresultequal = resultequal.length;
        for (i = 0; i < lengthList; i++) {
            listCalculator.pop(lengthList);
        }
        for(i = 0; i < lengthresultequal; i++){
            resultequal.pop();
        }
        resultequal.pop();
        $('.result p').text("0");
        console.log(listCalculator)
    })

    $('#btn-delete').click(function () {
        listCalculator.pop();
        $('.result p').text(listCalculator.join(''));
        if(listCalculator == ''){
            $('.result p').text('0');
        }
    })

    $('#btn-equal').click(function () {
        resolveEquation();
        var lengthList = listCalculator.length;
        for (i = 0; i < lengthList; i++) {
            listCalculator.pop(lengthList);
        }
    })

    $('.display-1').click(function () {
        thiselement = $(this).text();
        if (thiselement === 'X') {
            thiselement = '*';
        }
        if (!$(this).is('#btn-destructor, #btn-delete, #btn-more-or-less, #btn-equal')) {
            initCalculator();
        };
    })

    $('.display-2').click(function () {
        thiselement = $(this).text();
        initCalculator();
    })

    //Buttons funtions 

    var listCalculator = [];
    var historic = [];
    var separador = ' | ';
    var space = ' ';
    var resultequal = [];

    function initCalculator() {
        var lengthresultequal = resultequal.length;
        if(lengthresultequal > 1){
            resultequal.shift();
        }
        if(lengthresultequal = 1 && listCalculator == ''){
            listCalculator.push(resultequal);
        }
        listCalculator.push(thiselement);
        $('.result p').text(listCalculator.join(''));
    }

    function resolveEquation() {
        var equation = listCalculator.join('');
        var pointerHistoricResult = [];
        var pointerHistoricEquation = [];

        try {
            var result = math.evaluate(equation);
            $('.result p').text(result);
        } catch (error) {
            $('.result p').text('Error in equation');
        }

        pointerHistoricResult = 'Resposta: ' + result;
        pointerHistoricEquation = 'Equation: ' + equation;

        historic.push(space + pointerHistoricEquation + separador + pointerHistoricResult + space);

        resultequal.push(result);
        console.log('dentro: ' + resultequal)
    }

    //Buttons to use the calculator

    $('#btn-icon').click(function(){
        $('.calculator').fadeIn().css('display','flex');
        $('.informations-calculator').css('display','none');
    })

    $('#btn-informations').click(function(){
        $('.calculator').fadeIn().css('display','flex');
        $('.informations-calculator').css('display','none');
    })

})