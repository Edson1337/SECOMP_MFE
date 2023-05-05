import { useState } from 'react'
import axios from 'axios'
import { NavNext } from '@thetheu/scopim.nav-next'
import { FooterNext } from '@minicurso_mfe/components.footer-next'

export default function MyPage({ data }) {

  const [responseData, setResponseData] = useState(data)

   async function fetchImage() {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random')
    setResponseData(response.data)
  }

  return (
    <div>
      <NavNext />
      <div className="container">
        <img className="dog" src={responseData.message} alt="Random dog" />
        <button onClick={fetchImage}>Mudar Doguinho</button>
      </div>
      <FooterNext className="myFooter"/>
    </div>
  )
}

export async function getServerSideProps() {
  // This function is executed on the server-side and it can fetch data from an external API
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random')
    const data = response.data
    return { props: { data } }
  } catch (error) {
    console.error(error)
    return { props: { data: null } }
  }
}
