function App() {
  return (
    <div className="app">
      <h1 style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(48px, 10vw, 120px)',
        fontWeight: 900,
        textTransform: 'uppercase',
        textAlign: 'center',
        padding: '20vh var(--page-gutter)',
        lineHeight: 0.9,
      }}>
        Energy Cup{' '}
        <span style={{ color: 'var(--accent-orange)' }}>'27</span>
      </h1>
    </div>
  );
}

export default App;
