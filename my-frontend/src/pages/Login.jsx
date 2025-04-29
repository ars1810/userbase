// src/pages/Login.jsx
import { useState } from 'react'
import { TextField, Button, Container, Typography, Alert } from '@mui/material'
import API from '../api/api'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await API.post('/login', form)
      localStorage.setItem('token', res.data.token)
      toast.success('Login sukses!')
      navigate('/profile')
      navigate('/dashboard')

    } catch (err) {
      toast.error('Login gagal!')
    }
  }

  return (
    <Container>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Login
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Login
        </Button>
      </form>
    </Container>
  )
}
