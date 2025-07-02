const programsMenu = document.querySelectorAll(".program");
const programDetail = document.querySelector(".programDetail");

const removeActiveClass = () => {
    programsMenu.forEach(button => {
        button.classList.remove("active");
    });
}

programsMenu.forEach(program => {
    program.addEventListener("click", () => {
        removeActiveClass();
        if(program.classList.contains('express')) {
            program.classList.add("active");
            programDetail.innerHTML = `<div class="container programDetail__container">
            <div class="programDetail__left">
                <h2>Aprendizado Especializado</h2>
                <p>Curso EAD de MOPP com início imediato, proporciona aos profissionais habilidades e conhecimentos necessários para realizar o transporte seguro de substâncias químicas e produtos perigosos.</p>
                <div class="programDetail__images">
                    <div><img src="../assets/graduate4.jpg" alt=""></div>
                    <div><img src="../assets/graduate6.jpg" alt=""></div>
                </div>
                <h4>Aulas todos os dias da semana</h4>
                <p>Curso EAD de Transporte de Coletivo de Passageiros com início imediato, capacita para condução segura de veículos de transporte coletivo.</p>
                <article>
                    <h5>Aulas teoricas</h5>
                    <p>Curso EAD de Transporte de Coletivo de Passageiros com início imediato, capacita para condução segura de veículos de transporte coletivo.</p>
                </article>
                <article>
                    <h5>Aulas de legislação</h5>
                    <p>Curso EAD de Condutor de Veículo de Emergência com início imediato, capacita para condução em situações de emergência.  </p>
                </article>
               
                <article>
                    <h5>Aulas de direção defensiva</h5>
                    <p>Curso EAD de Condutor de Veículo de Emergência com início imediato, capacita para condução em situações de emergência.</p>
                </article>
               
                <a href="../contact/contact.html" class="btn primary">Entre em contato e começe agora</a>
            </div>
            <div class="programDetail__right">
             
                 <article>
                    <h4>Aprendizado Especializado</h4>
                    <div>
                        <h2>R$ 2.999,00</h2>
                        <p>Menor preço do ano</p>
                    </div>
                    <div>
                        <h2>R$ 2.699,00</h2>
                        <p>Apenas para estudantes</p>
                    </div>
                    <p>A habilitação estara disponível em apenas 02 meses após a conclusão de todo o processo de habilitação</p>
                </article>

                   <article>
                    <h4>Aprendizado Expresso</h4>
                    <div>
                        <h2>R$ 2.799,00</h2>
                        <p>Menor preço do ano</p>
                    </div>
                    <div>
                        <h2>R$ 2.500,00</h2>
                        <p>Apenas para estudantes</p>
                    </div>
                </article>

            </div>
        </div>`;
        } else if(program.classList.contains('polishing')){
            program.classList.add("active");
             programDetail.innerHTML = `<div class="container programDetail__container">
            <div class="programDetail__left">
                <h2>Aprendizado Expresso</h2>
                <p>Curso EAD de MOPP com início imediato, proporciona aos profissionais habilidades e conhecimentos necessários para realizar o transporte seguro de substâncias químicas e produtos perigosos.</p>
                <div class="programDetail__images">
                    <div><img src="../assets/graduate5.jpg" alt=""></div>
                    <div><img src="../assets/graduate1.jpg" alt=""></div>
                </div>
                <h4>Aulas todos os dias da semana</h4>
                <p>Curso EAD de Transporte de Coletivo de Passageiros com início imediato, capacita para condução segura de veículos de transporte coletivo.</p>
                <article>
                    <h5>Aulas teoricas</h5>
                    <p>Curso EAD de Transporte de Coletivo de Passageiros com início imediato, capacita para condução segura de veículos de transporte coletivo.</p>
                </article>
                <article>
                    <h5>Aulas de legislação</h5>
                    <p>Curso EAD de Condutor de Veículo de Emergência com início imediato, capacita para condução em situações de emergência.  </p>
                </article>
                <article>
                    <h5>Aulas de primeiros socorros</h5>
                    <p>Curso EAD de Transporte de Coletivo de Passageiros com início imediato, capacita para condução segura de veículos de transporte coletivo.</p>
                </article>
                <article>
                    <h5>Aulas de direção defensiva</h5>
                    <p>Curso EAD de Condutor de Veículo de Emergência com início imediato, capacita para condução em situações de emergência.</p>
                </article>
                <article>
                    <h5>Aulas de meio ambiente</h5>
                    <p>Curso EAD de Transporte de Coletivo de Passageiros com início imediato, capacita para condução segura de veículos de transporte coletivo.</p>
                </article>
                <a href="../contact/contact.html" class="btn primary">Entre em contato e começe agora</a>
            </div>
            <div class="programDetail__right">

              <article>
                    <h4>Aprendizado Expresso</h4>
                    <div>
                        <h2>R$ 2.799,00</h2>
                        <p>Menor preço do ano</p>
                    </div>
                    <div>
                        <h2>R$ 2.500,00</h2>
                        <p>Apenas para estudantes</p>
                    </div>
                </article>

                <article>
                    <h4>Aprendizado Regular</h4>
                    <div>
                        <h2>R$ 2.500,00</h2>
                        <p>Menor preço do ano</p>
                    </div>
                    <div>
                        <h2>R$ 2.300,00</h2>
                        <p>Apenas para estudantes</p>
                    </div>
                </article>

                 <article>
                    <h4>Aprendizado Especializado</h4>
                    <div>
                        <h2>R$ 2.999,00</h2>
                        <p>Menor preço do ano</p>
                    </div>
                    <div>
                        <h2>R$ 2.699,00</h2>
                        <p>Apenas para estudantes</p>
                    </div>
                    <p>A habilitação estara disponível em apenas 02 meses após a conclusão de todo o processo de habilitação</p>
                </article>
            </div>
        </div>`;
        }
        else if(program.classList.contains('license')){
            program.classList.add("active");
             programDetail.innerHTML = `
                <div class="container programDetail__container">
            <div class="programDetail__left">
                <h2>Aprendizado Especial</h2>
                <p>Curso EAD de MOPP com início imediato, proporciona aos profissionais habilidades e conhecimentos necessários para realizar o transporte seguro de substâncias químicas e produtos perigosos.</p>
                <div class="programDetail__images">
                    <div><img src="../assets/graduate3.jpg" alt=""></div>
                    <div><img src="../assets/graduate8.jpg" alt=""></div>
                </div>
                <h4>Aulas todos os dias da semana</h4>
                <p>Curso EAD de Transporte de Coletivo de Passageiros com início imediato, capacita para condução segura de veículos de transporte coletivo.</p>
                <article>
                    <h5>Aulas teoricas</h5>
                    <p>Curso EAD de Transporte de Coletivo de Passageiros com início imediato, capacita para condução segura de veículos de transporte coletivo.</p>
                </article>
                <article>
                    <h5>Aulas de legislação</h5>
                    <p>Curso EAD de Condutor de Veículo de Emergência com início imediato, capacita para condução em situações de emergência.  </p>
                </article>
                <article>
                    <h5>Aulas de primeiros socorros</h5>
                    <p>Curso EAD de Transporte de Coletivo de Passageiros com início imediato, capacita para condução segura de veículos de transporte coletivo.</p>
                </article>
                <article>
                    <h5>Aulas de direção defensiva</h5>
                    <p>Curso EAD de Condutor de Veículo de Emergência com início imediato, capacita para condução em situações de emergência.</p>
                </article>
                <article>
                    <h5>Aulas de meio ambiente</h5>
                    <p>Curso EAD de Transporte de Coletivo de Passageiros com início imediato, capacita para condução segura de veículos de transporte coletivo.</p>
                </article>
                <a href="../contact/contact.html" class="btn primary">Entre em contato e começe agora</a>
            </div>
            <div class="programDetail__right">
                   <article>
                    <h4>Aprendizado Especial</h4>
                    <div>
                        <h2>R$ 2.999,00</h2>
                        <p>Menor preço do ano</p>
                    </div>
                    <div>
                        <h2>R$ 2.699,00</h2>
                        <p>Apenas para estudantes</p>
                    </div>
                    <p>A habilitação estara disponível em apenas 02 meses após a conclusão de todo o processo de habilitação</p>
                </article>

                <article>
                    <h4>Aprendizado Regular</h4>
                    <div>
                        <h2>R$ 2.500,00</h2>
                        <p>Menor preço do ano</p>
                    </div>
                    <div>
                        <h2>R$ 2.300,00</h2>
                        <p>Apenas para estudantes</p>
                    </div>
                </article>

                <article>
                    <h4>Aprendizado Expresso</h4>
                    <div>
                        <h2>R$ 2.799,00</h2>
                        <p>Menor preço do ano</p>
                    </div>
                    <div>
                        <h2>R$ 2.500,00</h2>
                        <p>Apenas para estudantes</p>
                    </div>
                </article>
          
            </div>
        </div>
             `;
        }
        else if(program.classList.contains('regular')){
            program.classList.add("active");
             programDetail.innerHTML = `
                <div class="container programDetail__container">
            <div class="programDetail__left">
                <h2>Aprendizado regular</h2>
                <p>Curso EAD de MOPP com início imediato, proporciona aos profissionais habilidades e conhecimentos necessários para realizar o transporte seguro de substâncias químicas e produtos perigosos.</p>
                <div class="programDetail__images">
                    <div><img src="../assets/graduate3.jpg" alt=""></div>
                    <div><img src="../assets/graduate8.jpg" alt=""></div>
                </div>
                <h4>Aulas todos os dias da semana</h4>
                <p>Curso EAD de Transporte de Coletivo de Passageiros com início imediato, capacita para condução segura de veículos de transporte coletivo.</p>
                <article>
                    <h5>Aulas teoricas</h5>
                    <p>Curso EAD de Transporte de Coletivo de Passageiros com início imediato, capacita para condução segura de veículos de transporte coletivo.</p>
                </article>
                <article>
                    <h5>Aulas de legislação</h5>
                    <p>Curso EAD de Condutor de Veículo de Emergência com início imediato, capacita para condução em situações de emergência.  </p>
                </article>
                <article>
                    <h5>Aulas de primeiros socorros</h5>
                    <p>Curso EAD de Transporte de Coletivo de Passageiros com início imediato, capacita para condução segura de veículos de transporte coletivo.</p>
                </article>
                <article>
                    <h5>Aulas de direção defensiva</h5>
                    <p>Curso EAD de Condutor de Veículo de Emergência com início imediato, capacita para condução em situações de emergência.</p>
                </article>
                <article>
                    <h5>Aulas de meio ambiente</h5>
                    <p>Curso EAD de Transporte de Coletivo de Passageiros com início imediato, capacita para condução segura de veículos de transporte coletivo.</p>
                </article>
                <a href="../contact/contact.html" class="btn primary">Entre em contato e começe agora</a>
            </div>
            <div class="programDetail__right">
                <article>
                    <h4>Aprendizado Regular</h4>
                    <div>
                        <h2>R$ 2.500,00</h2>
                        <p>Menor preço do ano</p>
                    </div>
                    <div>
                        <h2>R$ 2.300,00</h2>
                        <p>Apenas para estudantes</p>
                    </div>
                </article>

                <article>
                    <h4>Aprendizado Expresso</h4>
                    <div>
                        <h2>R$ 2.799,00</h2>
                        <p>Menor preço do ano</p>
                    </div>
                    <div>
                        <h2>R$ 2.500,00</h2>
                        <p>Apenas para estudantes</p>
                    </div>
                </article>

                 <article>
                    <h4>Aprendizado Especializado</h4>
                    <div>
                        <h2>R$ 2.999,00</h2>
                        <p>Menor preço do ano</p>
                    </div>
                    <div>
                        <h2>R$ 2.699,00</h2>
                        <p>Apenas para estudantes</p>
                    </div>
                    <p>A habilitação estara disponível em apenas 02 meses após a conclusão de todo o processo de habilitação</p>
                </article>
            </div>
        </div>
             `;
        }
    });
});