$(function(){
    $(".en").click(function() {
        console.log("teste")
        $(".nav-item").children().eq(0).text("About me");
        $(".nav-item").children().eq(1).text("Experiences");
        $(".nav-item").children().eq(2).text("Skills");
        $(".nav-item").children().eq(3).text("Projects");
        
        $("h3").eq(0).text("External Links");
        
        $("h3").eq(1).text("Contact info")
        $(".txtfield").children().eq(0).children().children().eq(0).text("Phone: 79981142662");

        $("h3").eq(2).text("Graduation")
        $(".txtfield").children().eq(1).children().children().eq(0).text("College degree on going (Computer's ciencie)");
        $(".txtfield").children().eq(1).children().children().eq(1).text("ata de incio: 03/2020  Course End's prevision: 12/2024");
        
        $(".languages-selection").text("EN-US");

        $(".accordion-header").children().eq(0).text("Who am i and what i seek:");
        $(".accordion-body").children().eq(0).text(
            "..."
            );
        $(".accordion-header").children().eq(1).text("What i have to offer:");
        $(".accordion-body").children().eq(1).text(
            "...."
            );
        
        $(".language-selected").text("en-UK");
        $(".language-selected").addClass(".change-uk");

    
    
    })
    console.log("teste")
    $(".br").click(function() {
        $(".nav-item").children().eq(0).text("Sobre mim");
        $(".nav-item").children().eq(1).text("Experiencia");
        $(".nav-item").children().eq(2).text("Habilidades");
        $(".nav-item").children().eq(3).text("Projetos");

        
        $("h3").eq(0).text("links externos");
        
        $("h3").eq(1).text("Informações de contato")
        $(".txtfield").children().eq(0).children().children().eq(0).text("Telefone: 79981142662");
        $(".txtfield").children().eq(0).children().children().eq(1).text("Email: jdamasceno414@gmail.com ");

        $("h3").eq(2).text("Formação")
        $(".txtfield").children().eq(1).children().children().eq(0).text("Ensino Superior em andamento (Cienacia da Computação)");
        $(".txtfield").children().eq(1).children().children().eq(1).text("data de incio: 03/2020  previsão de termino: 12/2024");

        $(".accordion-header").children().eq(0).text("Quem eu sou e o que Procuro:");
        $(".accordion-body").children().eq(0).text(
            "Estudante de Ciencia da Computação procuro uma vaga como desenvolvedor seja back front ou full stack, escolhi essa area"
            +"para construir minha carreira por que queria estar num ambiente onde eu pudesse estar sempre aprendendo coisas e rodeado"
            +"de pessoas que compartilham desse sentimento conhecer todo tipo pessoas ampliar meu conhecimento seja a nivel humano"
            +"ou nivel técnico (no caso como desenvolvedor) é o que eu busco pessoalmente e nada me deixaria masi satisfeito do que poder viver dessa forma"
            );
       
            $(".accordion-header").children().eq(1).text("Oque tenho a oferecer:");
            $(".accordion-body").children().eq(1).text(
                "conteudo link mais conteudo"
            );

        $(".languages-selection").text("PT-br");
        $(".language-selected").text("PT-BR");
        $(".language-selected").addClass(".change-br");

    })

})