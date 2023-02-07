$(function(){
    $(".en").click(function() {
        $(".nav-item").children().eq(0).text("About me");
        $(".nav-item").children().eq(1).text("Experiences");
        $(".nav-item").children().eq(2).text("Skills");
        $(".nav-item").children().eq(3).text("Projects");
        $(".txtfield").children().eq(0).children().children().text("oi3").addClass("h3");
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
    $(".br").click(function() {
        $(".nav-item").children().eq(0).text("Sobre mim");
        $(".nav-item").children().eq(1).text("Experiencia");
        $(".nav-item").children().eq(2).text("Habilidades");
        $(".nav-item").children().eq(3).text("Projetos");

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