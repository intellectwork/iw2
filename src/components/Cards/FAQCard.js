import React from 'react'

export const FAQCard = ({question, answer, id}) => {
    return (
        <li data-aos="fade-up">
            <i className="far fa-question-circle help-icon"></i>
            <a data-toggle="collapse" className="collapsed" href={`#${id}`} aria-expanded="false" aria-controls={id}>
                {question}
                <i className="fas fa-chevron-down icon-show"></i>
                <i className="fas fa-chevron-up icon-close"></i>
            </a>
            <div id={id} className="collapse" data-parent=".faq-list">
                {answer}
            </div>
        </li>
    )
}