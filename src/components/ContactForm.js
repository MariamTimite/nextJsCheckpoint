import React from 'react';
import { useState } from "react";
import styled from "styled-components";

// Styled Components
const Section = styled.section`
  padding: 60px 10%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const FormWrapper = styled.form`
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  background: white;
  padding: 30px;
  margin-right: 85px
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  h2 {
    text-align: center;
    color: #0f3959;
  }
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InputBox = styled.div`
  position: relative;
  input, textarea {
    width: 94%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: all 0.3s ease;
    &:focus {
      border-color: #0f3959;
      outline: none;
    }
  }
  span {
    position: absolute;
    top: 12px;
    left: 15px;
    color: gray;
    transition: all 0.3s ease;
  }
  input:focus + span, input:valid + span, textarea:focus + span, textarea:valid + span {
    top: -8px;
    left: 10px;
    font-size: 12px;
    color: #0f3959;
  }
`;

const SubmitBox = styled.div`
  button {
    width: 100%;
    padding: 12px;
    background: #0f3959;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background: #09243d;
    }
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;


const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.nom.trim()) newErrors.nom = "Nom requis";
    if (!formData.prenom.trim()) newErrors.prenom = "Prénom requis";
    if (!formData.email.includes("@")) newErrors.email = "Email invalide";
    if (!formData.telephone.match(/^[0-9]+$/)) newErrors.telephone = "Numéro invalide";
    if (!formData.message.trim()) newErrors.message = "Message requis";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ nom: "", prenom: "", email: "", telephone: "", message: "" });
    }
    setErrors(validationErrors);
  };

  return (
    <Section>
      <Container>
        <FormWrapper onSubmit={handleSubmit}>
          <h2>Contactez-moi</h2>
          {submitted && <SuccessMessage>Message envoyé avec succès !</SuccessMessage>}
          <FormBox>
            <InputBox>
              <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />
              <span>Nom</span>
              {errors.nom && <ErrorMessage>{errors.nom}</ErrorMessage>}
            </InputBox>
            <InputBox>
              <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required />
              <span>Prénom(s)</span>
              {errors.prenom && <ErrorMessage>{errors.prenom}</ErrorMessage>}
            </InputBox>
            <InputBox>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              <span>Email</span>
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </InputBox>
            <InputBox>
              <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} required />
              <span>Téléphone</span>
              {errors.telephone && <ErrorMessage>{errors.telephone}</ErrorMessage>}
            </InputBox>
            <InputBox>
              <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
              <span>Message</span>
              {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
            </InputBox>
            <SubmitBox>
              <button type="submit">Envoyer</button>
            </SubmitBox>
          </FormBox>
        </FormWrapper>
      </Container>
    </Section>
  );
};

export default ContactForm;