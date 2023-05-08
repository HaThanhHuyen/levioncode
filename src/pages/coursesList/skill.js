import styles from "../coursesList/coursesList.module.css";
export default function FilterSkill({ handleFilterSkills, skills }) {
  return (
    <div className={styles.skillAll}>
      <h3>Skills</h3>
      <div className={styles.skill}>
        {skills.map((e) => (
          <div className={styles.skills} key={e.id}>
            <input
              name={e.skill}
              type="checkbox"
              value={e.skill}
              checked={e.checked}
              onChange={handleFilterSkills}
            />
            <p>{e.skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}