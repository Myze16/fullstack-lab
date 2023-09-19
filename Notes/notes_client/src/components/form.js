import React from "react";

const Form = ({ titulo, conteudo, onclick }) => {
    return (
        <form action="">
            <div className="form-group">
                <label htmlFor="title">Titulo</label>
                <input
                    type="text"
                    name="title"
                    id="titulo"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    className="form-control"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="content">Conteúdo</label>
                <textarea
                    name="content"
                    id=""
                    cols="30"
                    rows="5"
                    value={conteudo}
                    onChange={(e) => setConteudo(e.target.value)}
                    className="form-control"
                    required
                ></textarea>
            </div>
            <div className="form-group">
                <input
                    type="submit"
                    value="Salvar"
                    className="btn"
                    onClick={criarNota}
                />
            </div>
        </form>
    );
};

export default Form;
