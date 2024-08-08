
let buttonsList = [
    {'icon':'bx bxs-face', 'title': 'Perfil', 'body': 'Sou um profissional que já atua no desenvolvimento de software há 12 anos tendo uma vasta experiência em desenvolvimento mainframe atuando principalmente em empresa do sistema fianceiro nacional.'},
    {'icon':'bx bxs-pencil', 'title': 'Formação', 'body': '* Lienciatura em Ciências da Computação - UESPI (2006); <br>* Pós Graduação Análise de Sistemas - FAP (2007); <br>* Técnico em Informática - CEFET PI (2008); <br>* Pós Gradução Análise Forense e Perícia Digital - IPOG (2019); <br>* MBA Cybersegurança - FIAP (2023); <br>* Certificação em CyberSegurança - IBSEC (Junho/2024);'},
    {'icon':'bx bxs-landmark', 'title': 'Experiência', 'body': '* Técnico em Informática - Prefeitura Municipal de Parnaíba (7 anos); <br>* Professor Efetivo de Computação - SEDUC PI (1 ano); <br>* Assessor de TI - Banco do Brasil (11/13 anos);'},
    {'icon':'bx bxs-message-alt-detail', 'title': 'Depoimento', 'body': '<i>Você vai evoluir a medida aprender algo novo além daquilo que já domina.'},
    {'icon':'bx  bx-laptop', 'title': 'Trabalhos', 'body': 'Projetos Internos na Diretoria de Tecnologia do Banco do Brasil na área de Desenvolvimento de Software Plataforma Mainframe, Java, JavaCloud, entre outros.'},
    {'icon':'bx bx-toggle-right', 'title': 'Programe-IO', 'body': 'link'},
    {'icon':'bx bxs-network-chart', 'title': 'Contato', 'body': 'E-mail: rntmuniz@gmail.com'},
]
let content = '';

buttonsList.forEach((item) => {
    
    content += `
    <div class="btn-${item.title}" id="btn-${item.title}">
    <button onclick="abrirModal('${item.title}', '${item.body}')" class="button-${item.title}" id="button-${item.title}">
        <i class='${item.icon}'></i> 
    </button>
    </div>`;
    
    
});

document.getElementById('button-list').innerHTML = content;

function abrirModal(title, body){
    let link = `<a href="https://rntmuniz.github.io/CalculadoraHtml/" target="_blank">Calculadora HTML</a><br> 
    <a href="https://rntmuniz.github.io/CalculadoraHtml/" target="_blank">Calculadora Plus HTML</a>`;

    // const texto = document.querySelector('.texto');
    const modal = document.getElementById('janela-modal');

    document.getElementById('modal-title').innerHTML = title;
    
    if (body == 'link'){
        body = link;
    }

    document.getElementById('modal-body').innerHTML = body;
    
    modal.classList.add('abrir');
    
    // modalBody.innerHTML = content.innerText;
    
    modal.addEventListener('click', (e) => {
        if (e.target.id == 'janela-modal' || e.target.id == "fechar"){
            modal.classList.remove('abrir')
            localStorage.fechaModal = 'janela-modal'
        }
    })
}


