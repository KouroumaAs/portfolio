import React from "react";
import PageHeaderContain from "../../components/pageHeaderContainer";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
const personalDetail = [
  {
    label: "Nom Complet",
    value: "Aboubacar Sidiki KOUROUMA",
  },
  {
    label: "Age",
    value: "35 ans",
  },
  {
    label: "Adresse",
    value: "Conakry,Dixinn",
  },
  {
    label: "Email",
    value: "boubasid2000@yahoo.fr",
  },
];
const jobSummary =
  "Expérimenté de plusieurs années dans le métier de développement d’application et d’administration de base de données, je sais me démarquer par mon savoir-faire et ma facilité à m’adapter à différents environnements de travail. Je cherche à rejoindre une équipe dans laquelle je pourrai partager cette expérience et réalisée ensemble de magnifiques projets informatiques.";
function About() {
  return (
    <section className="about" id="about">
      <PageHeaderContain
        headerText="A propos de Moi"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={0}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <p>{jobSummary}</p>
          </Animate>
          <h3 className="personalInformationHeaderText">
            Full Stack Developer
          </h3>

          <Animate
            play
            duration={1.5}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>Information Personnelle</h3>
            <ul>
              {personalDetail.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value} </span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
        <Animate
            play
            duration={1.5}
            delay={0}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}

export default About;
