function Products() {
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
        <div className="filter-bottom flex justify-between gap-3 mt-8">
          <div className="range-block w-1/4">
            <input type="range" min={0} max={1000} className="range range-primary" />
          </div>
          <div className="checked"></div>
          <div className="search"></div>
          <div className="reset"></div>
        </div>
      </div>
      <div className="products">

      </div>
    </div>
  )
}

export default Products