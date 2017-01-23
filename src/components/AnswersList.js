import React, {Component} from 'react';
import AnswerItem from './AnswerItem';
import AnswersStore from '../stores/AnswersStore';

class AnswersList extends Component {
    constructor() {
        super();
        this.state = {
            answers: AnswersStore.getAll(),
        }
    }
    //we can use it to show all existing answers (for example in admin panel)
    //now this.state is not used
    componentWillMount() {
        AnswersStore.on("change", () => {
            this.setState({
                answers: AnswersStore.getAll(),
            });
        });
    }
    render() {
        //const {answers} = this.state; 
        const questionId = this.props.id;
        const answers = AnswersStore.getQuestionAnswers(questionId);
        const AnswerComponents = answers.map((answer) => {
            return <AnswerItem key={answer.id} {...answer} />;
        });
        
        return (
            <div>
                Answers:
                {AnswerComponents}
            </div>
            
        );
    }
}

export default AnswersList;