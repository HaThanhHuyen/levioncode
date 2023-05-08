import styles from "../coursesList/coursesList.module.css";
export default function FilterLevel({ handleFilterLevels, levels }) {
  return (
    <div className={styles.levelAll}>
      <h3>Levels</h3>
      <div className={styles.skill}>
        {levels.map((e) => (
          <div key={e.id} className={styles.skills}>
            <input
              name={e.level}
              type="checkbox"
              value={e.level}
              checked={e.checked}
              onChange={handleFilterLevels}
            />
            <p>{e.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}