function Josh() {
  const routes = [
    { path: '/anthony', label: 'Anthony' },
    { path: '/nikita', label: 'Nikita' },
    { path: '/lydia', label: 'Lydia' },
    { path: '/aaron', label: 'Aaron' },
    { path: '/jorie-tess-kiana', label: 'Jorie, Tess & Kiana' },
    { path: '/michael', label: 'Michael' },
    { path: '/aaron-michael', label: 'Aaron & Michael' },
  ]

  return (
    <main className="container">
      <h1 style={{ fontWeight: 'normal', fontSize: '1.4rem', marginBottom: '2rem' }}>Private Routes</h1>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'system-ui, sans-serif' }}>
        {routes.map(({ path, label }) => (
          <li key={path} style={{ marginBottom: '1rem' }}>
            <a href={path} style={{ fontSize: '1rem' }}>{label}</a>
            <span style={{ color: '#999', marginLeft: '0.75rem', fontSize: '0.9rem' }}>{path}</span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Josh
