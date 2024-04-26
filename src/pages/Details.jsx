import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

function Details() {
  const params = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState(null)

  useEffect(() => {
    if (Number(params.id)) {
      fetch(`https://strapi-store-server.onrender.com/api/products/${params.id}`)
        .then(res => res.json())
        .then(data => {
          setData(data.data)
        })
        .catch(err => {
          console.log(err);
        })
    } else {
      navigate('/')
    }
  }, [])

  return (
    <div className="w-3/5 m-auto">
      <div className="text-sm breadcrumbs py-20">
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/products'}>Products</Link></li>
        </ul>
      </div>

      {
        data?.id && <>
          <div className="flex gap-16">
            <div className="w-96">
              <img className="w-96 h-96 object-cover rounded-lg lg:w-full" src={data.attributes.image} alt="" />
            </div>
            <div className="w-[512px]">
              <h2 className="capitalize text-3xl font-bold">{data.attributes.title}</h2>
              <h3 className="text-xl text-neutral-content font-bold mt-2">{data.attributes.company}</h3>
              <h3 class="mt-3 text-xl">$ {data.attributes.price / 100}</h3>
              <p className="mt-6 leading-8">{data.attributes.description}</p>
              <div className="form">
              </div>
            </div>
          </div>
        </>
      }

    </div>
  )
}

export default Details