import "./form-consulta.css";

const FormConsulta = () => {
    return (
        <div className="form-consult">
            <h2>Tienes dudas o consultas? Dejalo en el form y nos comunicaremos contigo de inmediato</h2>
            <form>
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" required placeholder="Jhon Doe" />
        
                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" required placeholder="ejemplo@gmail.com"/>
        
                <label htmlFor="message">Mensaje:</label>
                <textarea id="message" name="message" required placeholder="Tengo una consulta sobre...."></textarea>
        
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default FormConsulta;