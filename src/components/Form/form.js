onSubmit: (values) => {
    alert(JSON.stringify(values))

    //contar casos das questões
    //questão 9
    const cases13 = 0;

    //questão 10
    const cases14 = 0;



    //casos que necessitem atenção especial
        // Maiores de 60 anos, grávidas, pessoas com histórico de doenças
    if(formik.values.birthday >= 60 || formik.values.q2 === 'true' ||
            formik.values.q3 === 'true' || formik.values.q4 === 'true' || 
            formik.values.q5 === 'true' || formik.values.q6 === 'true' || 
            formik.values.q7 === 'true' || formik.values.q8 === 'true' || 
            formik.values.q9 === 'true' || formik.values.q10 === 'true' || 
            formik.values.q11 === 'true' ||formik.values.q12 === 'true' || ){

            if(formik.values.city == "Araranguá"){
                   alert("Você deve buscar o CENTRO DE TRIAGEM. Considerando as informações que você me apresentou, você deve ir até o Centro de Triagem localizado no Centro Comunitário do Santuário Nossa Senhora Mãe dos homens. ");
            }
            else
            {
                alert("Você deve buscar o CENTRO DE TRIAGEM. entre em contato com a sua Unidade Básica de Saúde para saber aonde você deve ir para passar por avaliação médica.");
            }

    else if (cases9 > 0 || cases10 > 3){
         if(formik.values.city == "Araranguá"){
                alert("Você deve buscar o CENTRO DE TRIAGEM. Considerando as informações que você me apresentou, você deve ir até o Centro de Triagem localizado no Centro Comunitário do Santuário Nossa Senhora Mãe dos homens.");
            }
            else
            {
                alert("Você deve buscar o CENTRO DE TRIAGEM. entre em contato com a sua Unidade Básica de Saúde para saber aonde você deve ir para passar por avaliação médica.");
            } 
    else if ((cases10 >= 1 && cases10 < 4) || formik.values.q12 === 'true' || formik.values.q13 === 'true' ){
        if(formik.values.city == "Araranguá"){
            alert("Considerando as informações que você me apresentou, recomendamos que mantenha as medidas de prevenção e o distanciamento social. Recomendamos que qualquer mudança nos seus sintomas, por favor, dirija-se ao Centro de triagem localizado no Centro Comunitário do Santuário Nossa Senhora Mãe dos homens, em Araranguá.");
        }
        else
        {
            alert('Considerando as informações que você me apresentou, recomendamos que faça o isolamento familiar por 14 dias. Em caso de qualquer mudança em seus sintomas, busque o Centro de Triagem de seu município. Caso seu município não conte com centro de triagem, entre em contato com a sua Unidade Básica de Saúde.');
        }
    }
    else{
        alert('Considerando as informações que você me apresentou, recomendamos que mantenha as medidas de prevenção e o distanciamento social. Recomendamos que qualquer mudança nos seus sintomas, por favor, dirija-se ao Centro de triagem de seu município. Caso seu município não conte com centro de triagem, entre em contato com a sua Unidade Básica de Saúde.');
    }

    }

    }

},
