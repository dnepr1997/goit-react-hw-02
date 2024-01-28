import './App.css';
import { useState, useEffect } from 'react';
import { Description } from '../Description/Description';
import { Options } from '../Options/Options';
import { Feedback } from '../Feedback/Feedback';
import { Notification } from '../Notification/Notification';

export const App = () => {
  const [response, setResponse] = useState(() => {
    const savedClicks = window.localStorage.getItem('key');
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
  });
  const totalFeedback = response.good + response.neutral + response.bad;
  const handleFeedbackClick = type => {
    setResponse(prev => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };
  const handleReset = () => {
    setResponse({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  useEffect(() => {
    window.localStorage.setItem('key', JSON.stringify(response));
  }, [response]);

  return (
    <div>
      <Description />
      <Options
        onUpdate={handleFeedbackClick}
        handleReset={handleReset}
        totalFeedback={totalFeedback}
      />
      {/* {totalFeedback > 0 && (
        <button
          style={{ backgroundColor: 'red', borderRadius: 10 }}
          type="button"
          onClick={handleReset}
        >
          Reset
        </button>
      )} */}
      {totalFeedback > 0 ? (
        <Feedback
          good={response.good}
          neutral={response.neutral}
          bad={response.bad}
          total={totalFeedback}
          positive={Math.round(((response.good + response.neutral) / totalFeedback) * 100)}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};
//  {
//    totalFeedback > 0 && (
//      <button
//        style={{ backgroundColor: 'red', borderRadius: 10 }}
//        type="button"
//        onClick={handleReset}
//      >
//        Reset
//      </button>
//    );
//  }
