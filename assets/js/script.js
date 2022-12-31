$(function(){
    $(".en").click(function() {
        $(".nav-item").children().eq(0).text("About me");
        $(".nav-item").children().eq(1).text("Experiences");
        $(".nav-item").children().eq(2).text("Skills");
        $(".nav-item").children().eq(3).text("Projects");
        $(".language-selected").text("en-UK");
        $(".language-selected").addClass(".change-uk");


    
    
    })
    $(".br").click(function() {
        $(".nav-item").children().eq(0).text("Sobre mim");
        $(".nav-item").children().eq(1).text("Experiencia");
        $(".nav-item").children().eq(2).text("Habilidades");
        $(".nav-item").children().eq(3).text("Projetos");
        $(".language-selected").text("pt-BR");
        $(".language-selected").addClass(".change-br");


    
    
    })

})