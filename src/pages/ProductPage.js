import Header from "../components/Header"
import { useParams } from "react-router-dom"
import Categories from "../components/Categories";

export default function ProductPage() {
  const params = useParams()
  console.log(params)
  return (
    <>
      <Header />
      <Categories />
    </>
  )
}
