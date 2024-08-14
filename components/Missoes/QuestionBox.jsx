import { useState } from "react"; 

function QuestionBox ({ question, answer }) {
    const [showAnswer, setShowAnswer] = useState();

    const toggleAnswer = () => {
        setShowAnswer (!showAnswer);
    };

    return (
        <div >
            <div className="atributodeavaliacao" onClick={toggleAnswer}>
                {question}
            </div>
            {showAnswer && <div className="atribuicao">{answer}</div>}
        </div>
    )
};

export default QuestionBox