import { GiRotaryPhone } from 'react-icons/gi';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    color: 'navy',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        <span role="img" aria-label="Greeting icon">
          <GiRotaryPhone size="96" />
        </span>
        <br/>contacts manager
      </h1>
    </div>
  );
}
