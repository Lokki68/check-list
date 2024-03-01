import LayoutContainer from "../components/LayoutContainer";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import Notify from "../components/Notify";


function Store() {

  const url = 'https://dummyjson.com/products'
  const {data, loading, error} = useFetch({url, options: {}})

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <Notify message={error} severity={"error"} />
  }

  return (
    <LayoutContainer environment="store" data={data?.products} />
  );
}

export default Store;