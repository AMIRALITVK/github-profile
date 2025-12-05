import React, { useEffect, useState } from 'react'

interface GitHubStats {
  public_repos: number
  followers: number
  following: number
}

const Stats: React.FC = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null)

  useEffect(() => {
    fetch('https://api.github.com/users/amiralitvk')
      .then((res) => res.json())
      .then((data) => {
        const { public_repos, followers, following } = data
        setStats({ public_repos, followers, following })
      })
      .catch((err) => console.error(err))
  }, [])

  if (!stats) return <p>Loading GitHub stats...</p>

  return (
    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
      <h2>GitHub Stats</h2>
      <p>Repositories: {stats.public_repos}</p>
      <p>Followers: {stats.followers}</p>
      <p>Following: {stats.following}</p>
    </div>
  )
}

export default Stats
