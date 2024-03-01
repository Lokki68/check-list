import LayoutContainer from "../components/LayoutContainer";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import Error from "../components/Error";


function Store() {

  // const [data, setdata] = useState([])
  const url = 'https://dummyjson.com/products'
  const {data, loading, error} = useFetch({url, options: {}})
  console.log(data)

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <Error message={error} />
  }

  return (
    <LayoutContainer environment="store" data={data?.products} />
  );
}

export default Store;