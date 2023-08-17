import React from 'react';
import QAListEntry from './QAListEntry.jsx';
import _ from 'underscore';

const QAList = ({product_id, questions, setQuestions, setAddAnswerVisible}) => {
  return (
    <ul className='qa_ul'>
      {_.map(questions, (question) => {
        return <QAListEntry key={question.question_id} product_id={product_id} question={question} questions={questions} setQuestions={setQuestions} setAddAnswerVisible={setAddAnswerVisible}/>;
      })}
    </ul>
  );
};

export default QAList;