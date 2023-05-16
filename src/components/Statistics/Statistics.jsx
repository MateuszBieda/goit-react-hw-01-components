import css from 'components/Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

const getRandomHexColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statlist}>
        {stats.map(stat => (
          <li
            className={css.item}
            style={{ backgroundColor: getRandomHexColor() }}
            key={stat.id}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired,
  }),
};
