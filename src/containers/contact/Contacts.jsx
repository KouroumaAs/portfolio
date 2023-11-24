import React, { useState } from "react";
import PageHeaderContain from "../../components/pageHeaderContainer";
import { BsInfoCircleFill } from "react-icons/bs";
import "./styles.scss";
import { Animate } from "react-simple-animate";
import { useForm } from "react-hook-form";
function Contacts() {
  const [contactData, setContactData] = useState({
    nom: "",
    email: "",
    commentaire: "",
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { contactData } });
  const handleInput = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };
  const submitForm = () => {
     console.log(contactData)
  }
  return (
    <section className="contact" id="contact">
      <PageHeaderContain
        headerText="Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0)",
          }}
        >
          <h3 className="contact__content__header-text">Laissez un Message</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0)",
          }}
        >
          <div className="contact__content__form">
            <form onSubmit={handleSubmit(submitForm)}>
              <div className="contact__content__form__controlswrapper">
                <div className="nameWrapper">
                  <input
                    name="nom"
                    className="inputName"
                    type="text"
                    value={contactData.nom}
                    {...register("nom", {
                      onChange: (e) => {
                        handleInput(e);
                      },
                      required: true,
                      minLength: 2,
                    })}
                  />
                  <label htmlFor="nom" className="nameLabel">
                    Prenom et Nom
                  </label>
                  {errors.nom && errors.nom?.type === "required" && (
                    <span className="error-msg">Ce champ est obligatoire.</span>
                  )}
                  {errors.nom && errors.nom?.type === "minLength" && (
                    <span className="error-msg">
                      Ne peut pas être inférieur à deux caractères.
                    </span>
                  )}
                </div>
                <div className="emailWrapper">
                  <input
                    name="email"
                    className="inputEmail"
                    type="email"
                    value={contactData.email}
                    {...register("email", {
                      onChange: (e) => {
                        handleInput(e);
                      },
                      required: true,
                      pattern: /\S+@\S+\.\S+/g,
                    })}
                  />
                  <label htmlFor="email" className="emailLabel">
                    Email
                  </label>
                  {errors.email && errors.email?.type === "required" && (
                    <span className="error-msg">Ce champ est obligatoire.</span>
                  )}
                  {errors.email && errors.email?.type === "pattern" && (
                    <span className="error-msg">
                       Le Format du numéro de email est example@example.com.
                    </span>
                  )}
                </div>
                <div className="descriptionWrapper">
                  <textarea
                    name="commentaire"
                    {...register("commentaire", {
                      onChange: (e) => {
                        handleInput(e);
                      },
                      required: true,
                      minLength: 2,
                    })}
                    className="inputDescription"
                    rows={5}
                    value={contactData.commentaire}
                  />
                  <label htmlFor="description" className="descriptionLabel">
                    Commentaire
                  </label>
                  {errors.commentaire && errors.commentaire?.type === "required" && (
                    <span className="error-msg">Ce champ est obligatoire.</span>
                  )}
                  {errors.commentaire && errors.commentaire?.type === "minLength" && (
                    <span className="error-msg">
                      Ne peut pas être inférieur à deux caractères.
                    </span>
                  )}
                </div>
              </div>
              <button type="submit">Envoyer</button>
            </form>
          </div>
        </Animate>
      </div>
    </section>
  );
}

export default Contacts;
