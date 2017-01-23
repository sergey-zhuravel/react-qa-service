import React, {Component} from 'react';
import QuestionItem from './QuestionItem';
import QuestionsStore from '../stores/QuestionsStore';

class QuestionsList extends Component {
    constructor() {
        super();
        this.state = {
            questions: QuestionsStore.getAll(),
        }
    }

    componentWillMount() {
        QuestionsStore.on("change", () => {

            //ToDo Fix warning without isMounted check
            this && this.setState({
                questions: QuestionsStore.getAll(),
            });
        });
    }
    render() {
        let questionsType = 'all'; //by default get all questions
        if (this.props.type) {
            questionsType = this.props.type;
        }
        //moved filtering from component to the Store
        const questions = QuestionsStore.getQuestions(questionsType);
        const QuestionComponents = questions.map((question) => {
            return <QuestionItem key={question.id} {...question} />;
        });
        
        return (
            <div>
            Questions
                {QuestionComponents}
            </div>
            
        );
    }
}

export default QuestionsList;