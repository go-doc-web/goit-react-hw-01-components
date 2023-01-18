import PropTypes from 'prop-types';
import css from './section-task.module.css';

const SectionTask = ({title}) => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>{title }</h2>
    </section>
  )
}

export default SectionTask;

SectionTask.propTypes = {
  title:PropTypes.string.isRequired,
}