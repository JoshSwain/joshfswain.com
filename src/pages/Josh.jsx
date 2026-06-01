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
      <h1 style={{ fontWeight: 'normal', fontSize: '1.4rem', marginBottom: '2rem', color: 'var(--cream)' }}>
        Private Routes
      </h1>
      <ul className="josh-list">
        {routes.map(({ path, label }) => (
          <li key={path}>
            <a href={path}>{label}</a>
            <span className="route-path">{path}</span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Josh
