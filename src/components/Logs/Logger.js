import React, { useState, useEffect } from 'react'
import LoggerItem from './LoggerItem'
import PreLoader from '../layouts/PreLoader';

const Logger = () => {
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getLogs = async () => {
      setLoading(true)
      const res = await fetch('/logs')
      const data = await res.json()
      setLogs(data)
      setLoading(false)
    }
    getLogs()
  }, [])

  if (loading) {
    return <PreLoader/>
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map((log) => <LoggerItem key={log.id} log={log}/>)
      )}
    </ul>
  )
}

export default Logger
