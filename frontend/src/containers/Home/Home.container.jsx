import { NavLink } from "react-router-dom";

import { Button } from "../../components/Button/Button.component";
import Computer from "../../assets/images/computer";

import "./Home.scss";

export function Home() {
  return (
    <main className="home">
      <section className="home--text_section">
        <div className="home--text_section__name">Адамец Владислав</div>
        <div className="home--text_section__position">
          <span className="home--text_section__position--colorize">
            Frontend {"(& ||)"} Backend
          </span>
          &nbsp; developer
        </div>
        <div className="home--text_section__description">
          Frontend и Backend - Разработчик современных веб-приложений. Если у
          Вас есть идеи или предложения для совместной работы, свяжитесь со мной
          по ссылке ниже.
        </div>

        <NavLink to="/contacts">
          <Button bordered={true} style={{ height: "50px" }}>
            Связаться со мной
          </Button>
        </NavLink>
      </section>
      <section className="home--img_section">{Computer}</section>
    </main>
  );
}
