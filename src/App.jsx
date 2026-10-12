import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'
import SearchBar from './components/SearchBar'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((respuesta) => {
        if (respuesta.status === 404) {
          throw new Error('¿Estás seguro que escribiste bien la URL? No se encontró el recurso solicitado 😅')
        }
        if (respuesta.status === 500) {
          throw new Error('Parece que está tardando un poco más de lo normal, es momento de relajarse y mantener la calma 🧘')
        }
        return respuesta.json()
      })
      .then((datos) => {
        setProducts(datos.products)
        setLoading(false)
      })
      .catch((err) => {
        if (err.message.includes('fetch')) {
          setError('¿Estás seguro que pagaste la cuenta del internet este mes? 📶')
        } else {
          setError(err.message)
        }
        setLoading(false)
      })
  }, [])

  const productosFiltrados = products.filter((producto) =>
  producto.title.toLowerCase().includes(busqueda.toLowerCase())
)

  return (
    <div>
      <Header />
      <main className="contenedor">
      <SearchBar value={busqueda} onChange={setBusqueda} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && <ProductList products={productosFiltrados} />}
      </main>
      <Footer />
    </div>
  )
}

export default App