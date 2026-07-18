'use client'
import { useState } from 'react'
import { Drawer, Button } from 'antd'

export default function UsersPage() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <h1>Users List</h1>
      <Button onClick={() => setOpen(true)}>Edit User 1</Button>

      <Drawer
        title="Edit User"
        placement="bottom"
        onClose={() => setOpen(false)}
        open={open}
        size="90%"
      >
        <p>Name: John Doe</p>
        <p>Email: john@example.com</p>
      </Drawer>
    </div>
  )
}