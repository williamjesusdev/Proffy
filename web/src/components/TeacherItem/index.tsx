import React from "react";

import whatsapp from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://yt3.ggpht.com/a/AGF-l79N7hXinOYM-07N-n-xf0Ir4utaEkBARMf4FQ=s900-c-k-c0xffffffff-no-rj-mo"
          alt="Profile"
        />
        <div>
          <strong>William Jesus</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br /> <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </p>
      <footer>
        <p>
          Preço/hora <strong>R$50,00</strong>
        </p>
        <button type="button">
          <img src={whatsapp} alt="Whatsapp" />
          Entram em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
