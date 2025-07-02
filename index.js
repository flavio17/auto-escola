/** Initialize animate on scroll */
AOS.init();

/** Initialize swiper js */
var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      slidesPerView: 1,
      spaceBetween: 50,
      breakpoints: {
        599: {
            slidesPerView: 3
        }
      }
    });


    /** Packages buttons toggle */
const packagesButtons = document.querySelectorAll('.packages__buttons button');
const packagesTableBody = document.querySelector(".packages tbody");

const removeActiveClassFromButtons = () => {
    packagesButtons.forEach(button => {
        button.classList.remove('active');
    })
}

packagesButtons.forEach(button => {
    button.addEventListener("click", () => {
        removeActiveClassFromButtons();

        if(button.classList.contains('students')){
            button.classList.add("active");
            packagesTableBody.innerHTML = `
                    <tr>
                        <td>Licensa Padrão</td>
                        <td>08 semanas</td>
                        <td>R$ 3.000,00</td>
                    </tr>

                    <tr>
                        <td>Licensa Ouro</td>
                        <td>07 semanas</td>
                        <td>R$ 2.900,00</td>
                    </tr>

                    <tr>
                        <td>Licensa Prata</td>
                        <td>06 semanas</td>
                        <td>R$ 2.800,00</td>
                    </tr>

                    <tr>
                        <td>Licensa Bronze</td>
                        <td>05 semanas</td>
                        <td>R$ 2.700,00</td>
                    </tr>

                    <tr>
                        <td>Licensa standard</td>
                        <td>04 semanas</td>
                        <td>R$ 2.600,00</td>
                    </tr>

                    <tr>
                        <td>Licensa Platinum</td>
                        <td>03 semanas</td>
                        <td>R$ 2.500,00</td>
                    </tr>

                    <tr>
                        <td>Aula particular</td>
                        <td>01 Hora / Aula</td>
                        <td>R$ 150,00</td>
                    </tr>

                    <tr>
                        <td>Aula de meio ambiente</td>
                        <td>01 Hora / Aula</td>
                        <td>R$ 100,00</td>
                    </tr>

                    <tr>
                        <td>Aula de primeiros socorros</td>
                        <td>01 Hora / Aula</td>
                        <td>R$ 200,00</td>
                    </tr>

                     <tr>
                        <td>Aula de legislação de transito</td>
                        <td>01 Hora / Aula</td>
                        <td>R$ 200,00</td>
                    </tr>

                    <tr>
                        <td>Aula de prova simulada</td>
                        <td>01 Hora / Aula</td>
                        <td>R$ 200,00</td>
                    </tr>
            `;
        } else if (button.classList.contains('license')) {
            button.classList.add("active");
            packagesTableBody.innerHTML = `
                  <tr>
                        <td>Licensa Padrão</td>
                        <td>08 semanas</td>
                        <td>R$ 3.000,00</td>
                    </tr>

                    <tr>
                        <td>Licensa Ouro</td>
                        <td>07 semanas</td>
                        <td>R$ 2.900,00</td>
                    </tr>

                    <tr>
                        <td>Licensa Prata</td>
                        <td>06 semanas</td>
                        <td>R$ 2.800,00</td>
                    </tr>

                    <tr>
                        <td>Licensa Bronze</td>
                        <td>05 semanas</td>
                        <td>R$ 2.700,00</td>
                    </tr>

                    <tr>
                        <td>Licensa standard</td>
                        <td>04 semanas</td>
                        <td>R$ 2.600,00</td>
                    </tr>

                    <tr>
                        <td>Licensa Platinum</td>
                        <td>03 semanas</td>
                        <td>R$ 2.500,00</td>
                    </tr>

            `;
        } else if(button.classList.contains('non_students')) {
            button.classList.add("active");
            packagesTableBody.innerHTML = `
                 <tr>
                    <td>Aula particular</td>
                    <td>01 Hora / Aula</td>
                    <td>R$ 150,00</td>
                </tr>

                 <tr>
                    <td>Licensa Padrão</td>
                    <td>08 semanas</td>
                    <td>R$ 3.000,00</td>
                </tr>

                <tr>
                    <td>Aula de legislação de transito</td>
                    <td>01 Hora / Aula</td>
                    <td>R$ 200,00</td>
                </tr>

                 <tr>
                    <td>Licensa Prata</td>
                    <td>06 semanas</td>
                    <td>R$ 2.800,00</td>
                </tr>

                <tr>
                        <td>Aula de primeiros socorros</td>
                        <td>01 Hora / Aula</td>
                        <td>R$ 200,00</td>
                    </tr>

                <tr>
                    <td>Licensa Bronze</td>
                    <td>05 semanas</td>
                    <td>R$ 2.700,00</td>
                </tr>

            `;
        }
    });
})