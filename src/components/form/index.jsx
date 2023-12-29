import { useForm } from "react-hook-form"
import PropTypes from "prop-types";
import Cookies from 'js-cookie';
// import PhoneInput from "react-phone-number-input";

const formatRupiah = (number) => {
  if (number === null || isNaN(number)) {
    return '';
  }

  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });
  return formatter.format(number);
};

const fee = (number) => {
  if (number === null || isNaN(number)) {
    return '';
  }

  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });
  return formatter.format(number * 0.05);
};

const total = (number, fee) => {
  if (number === null || isNaN(number)) {
    return '';
  }

  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });
  return formatter.format(number + fee);
};


export default function Form({theme, buttonBuy}) {
  Form.propTypes = {
    theme: PropTypes.string.isRequired,
    buttonBuy: PropTypes.object.isRequired
  };

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async () => {
    const order_id = `TRX-${Date.now()}`;
  
    const parameters = {
      serviceid: `ORDER-${buttonBuy.name}`,
      order_id: order_id,
      name: buttonBuy.name,
      price: buttonBuy.price,
      qty: 1
    };
  
    try {
      const payload = await fetch("https://backend-follower-f8a6bb63a58e.herokuapp.com/api/v1/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(parameters)
      });
  
      const response = await payload.json();
      const { token, redirect_url } = response.result;
  
      Cookies.set('order_id', order_id);
  
      // Open the redirect_url in a new tab
      window.open(redirect_url, '_blank', { expires: 1 });
    } catch (error) {
      console.error("Error submitting the form:", error);
      // Handle the error appropriately
    }
  };
  


  return (
    <div className="w-full min-h-screen p-10">
      <div className="w-full flex flex-col items-center md:items-start md:flex-row gap-3">
        <div className="w-full h-full rounded-lg bg-white p-10">
          <div className="flex flex-col gap-10">
            <div>
              <div className="mb-5">
                <h1 className="text-2xl text-slate-600 font-bold">Target</h1>
                <p className="text-slate-400">Pastikan username/link yang Anda input sudah benar dan akun tidak berstatus private.</p>
              </div>
              <input {...register('target', { required: true })} type="text" placeholder="Target Username @" className="h-12 text-lg w-full border-2 rounded-md bg-slate-100 border-gray-200 outline-none p-2"/>
              {errors.target && <span className="text-red-500">Harap isi kolom ini!</span>}
            </div>
            <div>
              <div className="mb-5">
                <h1 className="text-2xl text-slate-600 font-bold">Informasi Kontak</h1>
                <p className="text-slate-400">Pastikan anda mengisi seluruh informasi kontak.</p>
              </div>
              <input {...register('fullname', { required: true })} type="text" placeholder="Nama Lengkap" className="h-12 w-full text-lg border-2 rounded-md bg-slate-100 border-gray-200 outline-none p-2"/>
              {errors.fullname && <span className="text-red-500">Harap isi kolom ini!</span>}
              <div className="flex gap-5 mt-5">
                <div className="w-full">  
                  <input {...register('email', { required: true })} type="text" placeholder="Alamat Email" className="h-12 w-full text-lg border-2 rounded-md bg-slate-100 border-gray-200 outline-none p-2"/>
                  {errors.email && <span className="text-red-500">Harap isi kolom ini!</span>}
                </div>
                <div className="w-full">
                  <input {...register('phone', { required: true })} type="text" placeholder="No. Whatsapp" className="h-12 w-full text-lg border-2 rounded-md bg-slate-100 border-gray-200 outline-none p-2"/>
                  {errors.phone && <span className="text-red-500">Harap isi kolom ini!</span>}
                </div>
                {/* <PhoneInput defaultCountry="ID" placeholder="No. Whatsapp" value={value} onChange={setValue} PhoneInputCountryFlag-height={1}/> */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/5 h-full rounded-lg flex flex-col gap-5">
          <div className={`flex justify-center items-center rounded-lg w-full h-16 ${theme === 'light' ? 'bg-navlight' : 'bg-navdark'}`}>
            <h1 className="text-white font-bold">Detail Pembayaran</h1>
          </div>
          <div className="w-full h-fit rounded-lg bg-white flex flex-col gap-1 p-3">
            <div className="flex justify-between border-b">
              <p className="text-lg font-medium text-slate-600">Produk: </p>
              <p className="text-lg font-bold text-slate-600">{buttonBuy.name}</p>
            </div>
            <div className="flex justify-between border-b">
              <p className="text-lg font-medium text-slate-600 border-b">Jumlah: </p>
              <p className="text-lg font-bold text-slate-600">{formatRupiah(buttonBuy.price)}</p>
            </div>
            <div className="flex justify-between border-b">
              <p className="text-lg font-medium text-slate-600 border-b">Fee: </p>
              <p className="text-lg font-bold text-slate-600">{fee(buttonBuy.price)}</p>
            </div>
            <div className="flex justify-between border-b">
              <p className="text-lg font-medium text-slate-600">Total: </p>
              <p className="text-lg font-bold text-slate-600">{total(buttonBuy.price, buttonBuy.price * 0.05)}</p>
            </div>
          </div>
          <button
            onClick={() => {
              if (Object.keys(buttonBuy).length === 0) {
                alert("Harap pilih produk!");
              } else {
                handleSubmit(onSubmit)();
              }
            }}
            type="submit"
            className={`w-full h-16 rounded-lg text-white font-bold ${theme === 'light' ? 'bg-navlight' : 'bg-navdark'}`}
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  )
}
