import { IoMdMenu } from "react-icons/io";
import { GrAppsRounded } from "react-icons/gr";
import { useEffect } from "react";
import { useRef, useState } from "react";
import Card from "../components/Card";
import Details from "./Details";

export function Products() {

  const [data, setData] = useState([]);
  const [isGrid, setGrid] = useState(true);
  const searchRef = useRef(null);
  const categoryRef = useRef(null);
  const companyRef = useRef(null);
  const sortRef = useRef(null);
  const [price, setPrice] = useState(10000);
  const [shipping, setShipping] = useState(false);

  async function getData(
    url = "https://strapi-store-server.onrender.com/api/products"
  ) {
    try {
      const res = await fetch(url);
      const responseData = await res.json();
      setData(responseData.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  function handleFilter() { }

  function handleReset() {
    searchRef.current.value = null;
    categoryRef.current.value = "all";
    companyRef.current.value = "all";
    sortRef.current.value = "a-z";
    setPrice(10000);
    setShipping(false);
  }


  return (
    <div className="w-3/5 mx-auto mt-14">
      <div className="filter p-4 w-full bg-primary-content rounded-lg">
        <div className="filter-top flex justify-between gap-3">
          <div className="field flex flex-col gap-1 w-1/4">
            <label htmlFor="search" className="cursor-pointer label-text capitalize">Search Product</label>
            <input type="search" className="input input-bordered input-sm w-full" id="search" />
          </div>
          <div className="field flex flex-col gap-1 w-1/4">
            <label htmlFor="category-select" className="cursor-pointer label-text capitalize">Select Category</label>
            <select id="category-select" className="select select-bordered w-full select-sm">
              <option value="all">All</option>
              <option value="tables">Tables</option>
              <option value="chairs">Chairs</option>
              <option value="kids">Kids</option>
              <option value="sofas">Sofas</option>
              <option value="beds">Beds</option>
            </select>
          </div>
          <div className="field flex flex-col gap-1 w-1/4">
            <label htmlFor="category-select" className="cursor-pointer label-text capitalize">Select Company</label>
            <select id="category-select" className="select select-bordered w-full select-sm">
              <option value="all">All</option>
              <option value="modenza">Modenza</option>
              <option value="luxora">Luxora</option>
              <option value="artiflex">Artiflex</option>
              <option value="comfora">Comfore</option>
              <option value="homestead">Homestead</option>
            </select>
          </div>
          <div className="field flex flex-col gap-1 w-1/4">
            <label htmlFor="category-select" className="cursor-pointer label-text capitalize">Sort By</label>
            <select id="category-select" className="select select-bordered w-full select-sm">
              <option value="all">All</option>
              <option value="a-z">a-z</option>
              <option value="z-a">z-a</option>
              <option value="high">High</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
        <div className="filter-bottom flex items-center justify-between gap-3 mt-8">
          <div className="range-block w-1/4">

            <div className="range-title flex items-center justify-between mb-2">
              <span className="label-text capitalize">Select Price</span>
              <span className="label-text capitalize">$1,000.00</span>
            </div>
            <div className="range-body">
              <input type="range" min={0} max={1000} className="range range-primary" />
            </div>
            <div className="range-max-min flex items-center justify-between">
              <span className="font-bold text-md">0</span>
              <span className="font-bold text-md">Max : $1,000.00</span>
            </div>
          </div>

          <div className="checked w-1/4">
            <label htmlFor="checked" className="label cursor-pointer flex flex-col">
              <span>Free Shipping</span>
              <input type="checkbox" className="checkbox checkbox-primary" />
            </label>
          </div>

          <div className="search w-1/4">
            <button className="btn w-full btn-sm btn-primary uppercase">Search</button>
          </div>

          <div className="reset w-1/4">
            <button className="btn w-full btn-sm btn-secondary uppercase">reset</button>
          </div>
        </div>
      </div>
      <div className="products">

      </div>
      <div className="flex items-center justify-between border-b-2 pb-6 mt-14">
        <p>{data.length} products</p>
        <div className="flex text-2xl gap-2">
          <span onClick={() => { setGrid(true) }}
            className="cursor-pointer flex justify-center items-center"
            style={isGrid ? {
              width: "40px",
              height: "40px",
              backgroundColor: "blue",
              color: "white",
              borderRadius: "50%",
            } : {}}
          >
            <GrAppsRounded />
          </span>
          <span onClick={() => { setGrid(false) }}
            className="cursor-pointer flex justify-center items-center"
            style={!isGrid ? {
              width: "40px",
              height: "40px",
              backgroundColor: "blue",
              color: "white",
              borderRadius: "50%",
            } : {}}
          >
            <IoMdMenu />
          </span>
        </div>
      </div>
      <div className={`products flex justify-between flex-wrap gap-3 mb-20 ${isGrid ? 'flex' : 'flex-col'}`}>
        {data.length > 0 &&
          data.map((el, index) => {
            return (
              <Card isGrid={isGrid} key={index} data={el.attributes} id={el}></Card>
            )
          })}
      </div>
    </div>
  )
}

export default Products