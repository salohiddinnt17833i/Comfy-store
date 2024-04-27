import { useEffect, useState } from "react";

function Cart() {
  const [allData, setAllData] = useState([]);
  const [allPrice, setAllPrice] = useState(0); // Jami narx

  useEffect(() => {
    const savedData = localStorage.getItem('saveData');
    if (savedData) {
      setAllData(JSON.parse(savedData));
    }

    // Mahsulotlarni yuklangandan so'ng jami narxni hisoblash
    let totalPrice = 0;
    allData.forEach(item => {
      totalPrice += item.price / 100;
    });
    setAllPrice(totalPrice);
  }, [allData]); // allData o'zgarganida jami narxni qayta hisoblash

  function handleRemove(id) {
    let copied = JSON.parse(JSON.stringify(allData));
    copied = copied.filter((ele) => {
      return ele.cartID !== id;
    });
    setAllData(copied);
    localStorage.setItem('saveData', JSON.stringify(copied));

    // Mahsulotni o'chirishdan so'ng jami narxni qayta hisoblash
    let totalPrice = 0;
    copied.forEach(item => {
      totalPrice += item.price / 100;
    });
    setAllPrice(totalPrice);
  }

  return (
    <div className="w-3/5 m-auto">
      <h2 className="text-3xl font-medium tracking-wider capitalize mt-20 my-8">Shopping Cart</h2>
      <hr />

      <div className="flex gap-10">
        <div className="my-2 w-9/12">
          {allData.length > 0 &&
            allData.map((data, index) => (
              <div className="flex gap-16 justify-between border-b-2 py-6" key={index}>
                <div className="image">
                  <img className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover" src={data.image} alt="" />
                </div>
                <div className="title">
                  <h2 className="capitalize font-medium">{data.title}</h2>
                  <p className="mt-2 capitalize text-sm text-neutral-content">{data.company}</p>
                  <p className="mt-4 text-sm capitalize flex items-center gap-x-2">Color :
                    <span style={{ backgroundColor: data.productColor }} className="w-5 h-5 rounded-full"></span>
                  </p>
                </div>
                <div className="form flex flex-col gap-2">
                  <label htmlFor="select">Amount</label>
                  <select name="select" id="select" className="select select-bordered select-sm w-30 h-2  ">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <a onClick={() => { handleRemove(data.cartID) }} href="#" className="link link-primary link-hover text-sm">remove</a>
                </div>
                <div className="price">
                  <h3>$ {data.price / 100}</h3>
                </div>
              </div>
            ))}
        </div>

        {
          allData.length > 0 ? <>
            <div className="card bg-primary-content mt-10 p-4 w-m-[325px]  h-[200px]">
              <div className="flex flex-col gap-3">
                <p className="flex justify-between text-xs border-b border-slate-500 pb-2 gap-10">
                  <span>Subtitle</span>
                  <span>$ {allPrice.toFixed(2)}</span>
                </p>
                <p className="flex justify-between text-xs border-b border-slate-500 pb-2 gap-10">
                  <span>Shipping</span>
                  <span>$5.00</span>
                </p>
                <p className="flex justify-between text-xs border-b border-slate-500 pb-2 gap-10">
                  <span>Tax</span>
                  <span>$529.97</span>
                </p>
                <p className="flex justify-between text-xs border-b border-slate-500 pb-2 gap-10">
                  <span>Order Total</span>
                  <span>$ {allPrice.toFixed(2)}</span>
                </p>
              </div>
            </div></> : <></>
        }

      </div>
    </div >
  );
}

export default Cart;
