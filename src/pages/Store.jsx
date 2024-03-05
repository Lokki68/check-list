import LayoutContainer from "../components/LayoutContainer";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import Notify from "../components/Notify";
import Header from "../components/Header";
import { useContext, useState } from "react";
import { GlobalStore } from "../context/globalStore";

const initialNotify = {
  message: '',
  severity: 'success'}
function Store() {
  const {
    storeChecking,
    setstoreChecking,
    handleAddChecking,
    resetStoreChecking
  } = useContext(GlobalStore)

  const [notify, setNotify] = useState(initialNotify)
  const [showModal, setshowModal] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [dateValue, setDateValue] = useState('')

  const toggleModal = () => setshowModal(!showModal)



  const url = 'https://dummyjson.com/products'
  const {data, loading, error} = useFetch({url, options: {}})

  const handleChangeInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const handleChangeDate  = (e) => {
    setDateValue(e)
  }

  if (loading) {
    return <Loader />
  }

  if (error) {
    setNotify({
      message: error,
      severity: 'warning'
    })

    setTimeout(() => {
      setNotify(initialNotify)
    }, 3000)
  }

  return (
    <>
      <Header 
        notify={notify} 
        inputValue={inputValue}
        handleChangeInput={handleChangeInputValue}
        toggleModal={toggleModal}
        dateValue={dateValue}
        handleChangeDate={handleChangeDate}
      />
      <LayoutContainer 
        title="Magasin" 
        data={data?.products} 
        showModal={showModal} 
        toggleModal={toggleModal} 
      />
    </>
  );
}

export default Store;