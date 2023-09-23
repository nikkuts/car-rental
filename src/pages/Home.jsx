const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontWeight: 500,
      fontSize: 48,
      textAlign: 'center',
    },
  };

export const Home = () => {
    return (
        <div style={styles.container}>
        <h1 style={styles.title}>
          Application for choosing cars for rent in Ukraine {' '}
        </h1>
      </div>
    )
};