import css from './Options.module.css';

export const Options = ({ onUpdate, totalFeedback, handleReset }) => {
  return (
    <div>
      <button className={css.btnAll} onClick={() => onUpdate('good')}>
        Good
      </button>
      <button className={css.btnAll} onClick={() => onUpdate('neutral')}>
        Neutral
      </button>
      <button className={css.btnAll} onClick={() => onUpdate('bad')}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={handleReset} className={css.btnReset}>
          Reset
        </button>
      )}
    </div>
  );
};
