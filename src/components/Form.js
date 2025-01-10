import styles from '@/styles/formSection.module.css'
import router from 'next/router'
import { useState } from 'react'

const Form = () => {

    const [ emailMessage, setEmailMessage ] = useState('ENVIAR CONSULTA')
    const [ formData, setFormData ] = useState({
        name: '',
        cod: '',
        cel: '',
        city: '',
        email: '',
        message: ''
    })

    const handleTextChange = (event) => {
        const { name, value } = event.target;
        // Utiliza una expresión regular para permitir solo letras, números y espacios
        const sanitizedValue = value.replace(/[^a-zA-Z0-9\s]/g, '');

        setFormData({...formData, [name]: sanitizedValue});
    };

    const handleNumberChange = (event) => {
        const { name, value } = event.target;
        // Utiliza una expresión regular para permitir solo letras, números y espacios
        const sanitizedValue = value.replace(/\D/g, '');
        setFormData({...formData, [name]: sanitizedValue});
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setEmailMessage('Enviando...')
    //await sendContactForm(formData)
       try {
          const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            console.log('Correo enviado con éxito');
            router.push('/send')
            // Aquí podrías redirigir a una página de éxito o hacer algo más
          } else {
            console.error('Error al enviar el correo');
            setEmailMessage('Error')
          }
        } catch (error) {
          console.error('Error al enviar el formulario', error);
          setEmailMessage('Error')
        }
      };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={formData.name} name='name' placeholder="Ingresá tu nombre y apellido"  onChange={handleTextChange} required/>
            <div className={styles.phoneInput}>
                <input type="tel" value={formData.cod} name='cod' className={styles.areaCode} maxLength="4" placeholder="Cód. Área*" onChange={handleNumberChange} required/>
                <input type="tel" value={formData.cel} name='cel' placeholder="Tu Celular*" onChange={handleNumberChange} required/>
            </div>
            <input type="text" value={formData.city} name='city' placeholder="Tu ciudad o Localidad*" onChange={handleTextChange} required/>
            <input type="email" value={formData.email} placeholder="Ingresa tu Email" onChange={(e) => setFormData({...formData, email: e.target.value})} required/>
            <input type="text" value={formData.message} name='message' placeholder="Mensaje o consulta" onChange={handleTextChange} required/>
            <button type="submit">{emailMessage}</button>
        </form>
    )
}

export default Form