import React, { useState } from 'react';

const Form = () => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   const re = {
  //     capital: /(?=.*[A-Z])/,
  //     length: /(?=.{6,40}$)/,
  //     specialChar: /[ -\/:-@\[-\`{-~]/,
  //     digit: /(?=.*[0-9])/,
  //   };
  const rep = /(?=.{10}$)/;
  const [datas, setData] = useState({
    name: '',
    email: '',
    password: '',
    comfirmpassword: '',
    phone: '',
  });
  console.log('datas: ', datas);

  const [err, setErr] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const re = {
      capital: /(?=.*[A-Z])/,
      length: /(?=.{6,40}$)/,
      specialChar: /[ -\/:-@\[-\`{-~]/,
      digit: /(?=.*[0-9])/,
    };

    if (password.length < 6) {
      return 'Password must contain at least 6 characters';
    }

    if (!re.capital.test(password)) {
      return 'Password must contain at least 1 uppercase character';
    }

    if (!re.specialChar.test(password)) {
      return 'Password must contain at least 1 special character';
    }

    if (!re.digit.test(password)) {
      return 'Password must contain at least 1 number character';
    }
  };
  //   const handleChange = (e, value) => {
  //     const newErr = { ...err };
  //     if (value === 'name') {
  //       if (e.target.value === '') newErr.name = 'Name cannot be empty';
  //       else delete newErr.name;
  //     } else if (value === 'email') {
  //       if (e.target.value === '') newErr.email = 'Email cannot be empty';
  //       //   else if (emailRegex.test(e.target.value) === false)
  //       else if (!validateEmail(e.target.value)) newErr.email = 'Invalid email ';
  //       else delete newErr.email;
  //     } else if (value === 'password') {
  //       if (e.target.value === '') newErr.password = 'Password cannot empty';
  //       else if (re.capital.test(e.target.value) === false)
  //         newErr.password = 'Must have at least 1 uppercase character';
  //       else if (re.length.test(e.target.value) === false)
  //         newErr.password = 'Password contains at least 6 characters';
  //       else if (re.specialChar.test(e.target.value) === false)
  //         newErr.password = 'Must have at least 1 special character';
  //       else if (re.digit.test(e.target.value) === false)
  //         newErr.password = 'Must have at least 1 number character';
  //       else delete newErr.password;
  //     } else if (value === 'comfirmpassword') {
  //       if (e.target.value !== datas.password)
  //         newErr.comfirmpassword = 'Password not match';
  //       else delete newErr.comfirmpassword;
  //     } else if (value === 'phone') {
  //       if (e.target.value === '') newErr.phone = 'Phone cannot be empty';
  //       else if (rep.test(e.target.value) === false)
  //         newErr.phone = 'Invalid phone';
  //       else delete newErr.phone;
  //     }
  //     setErr(newErr);
  //     setData({ ...datas, [value]: e.target.value });
  //   };
  const handleChange = (e, value) => {
    const newErr = { ...err };

    if (value === 'name') {
      if (e.target.value === '') {
        newErr.name = 'Name cannot be empty';
      } else {
        delete newErr.name;
      }
    } else if (value === 'email') {
      if (e.target.value === '') {
        newErr.email = 'Email cannot be empty';
      } else if (!validateEmail(e.target.value)) {
        newErr.email = 'Invalid email';
      } else {
        delete newErr.email;
      }
    } else if (value === 'password') {
      if (e.target.value === '') {
        newErr.password = 'Password cannot be empty';
      } else {
        const passwordError = validatePassword(e.target.value);
        if (passwordError !== '') {
          newErr.password = passwordError;
        } else {
          delete newErr.password;
        }
      }
    } else if (value === 'comfirmpassword') {
      if (e.target.value !== datas.password) {
        newErr.comfirmpassword = 'Password does not match';
      } else {
        delete newErr.comfirmpassword;
      }
    } else if (value === 'phone') {
      if (e.target.value === '') {
        newErr.phone = 'Phone cannot be empty';
      } else if (!rep.test(e.target.value)) {
        newErr.phone = 'Invalid phone';
      } else {
        delete newErr.phone;
      }
    }

    setErr(newErr);
    setData({ ...datas, [value]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErr = {};
    if (datas.name === '') newErr.name = 'Please enter a name';
    if (datas.email === '') {
      newErr.email = 'Please enter a name';
    }

    if (datas.password === '') {
      newErr.password = 'Please enter your password';
    }
    if (datas.comfirmpassword === '') {
      newErr.comfirmpassword = 'Please enter your comfirmpassword';
    }

    if (datas.phone === '') {
      newErr.phone = 'Please enter your phone ';
    }

    setErr(newErr);
    if (Object.keys(newErr).length === 0) {
      setData({
        name: '',
        email: '',
        password: '',
        comfirmpassword: '',
        phone: '',
      });
      alert('Submit susscess');
    }
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const newErr = {};

  //     if (datas.name === '') {
  //       newErr.name = 'Please enter a name';
  //     }

  //     if (datas.email === '') {
  //       newErr.email = 'Please enter an email';
  //     } else if (!validateEmail(datas.email)) {
  //       newErr.email = 'Invalid email';
  //     }

  //     if (datas.password === '') {
  //       newErr.password = 'Please enter a password';
  //     } else {
  //       const passwordError = validatePassword(datas.password);
  //       if (passwordError !== '') {
  //         newErr.password = passwordError;
  //       }
  //     }

  //     if (datas.comfirmpassword === '') {
  //       newErr.comfirmpassword = 'Please enter a confirm password';
  //     } else if (datas.comfirmpassword !== datas.password) {
  //       newErr.comfirmpassword = 'Password does not match';
  //     }

  //     if (datas.phone === '') {
  //       newErr.phone = 'Please enter a phone number';
  //     } else if (!rep.test(datas.phone)) {
  //       newErr.phone = 'Invalid phone number';
  //     }

  //     setErr(newErr);
  //     if (Object.values(newErr).length === 0) {
  //       setData({
  //         name: '',
  //         email: '',
  //         password: '',
  //         comfirmpassword: '',
  //         phone: '',
  //       });
  //       alert('Submit success');
  //     }
  //   };

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-[36px]">Form Validate</h1>
      <form className=" flex flex-col gap-5 border p-10 rounded">
        <div>
          <label>Name: </label>
          <input
            placeholder="Name"
            className=" border rounded"
            type="text"
            onChange={(e) => handleChange(e, 'name')}
            value={datas.name}
          />
          {!err.name ? '' : <p className="text-[red]">{err.name}</p>}
        </div>
        <div>
          <label>Email: </label>
          <input
            placeholder="Email"
            className=" border rounded"
            type="text"
            onChange={(e) => handleChange(e, 'email')}
            value={datas.email}
          ></input>
          {!err.email ? '' : <p className="text-[red]">{err.email}</p>}
        </div>
        <div>
          <label>Password: </label>
          <input
            placeholder="Password"
            className=" border rounded"
            type="password"
            name="password"
            onChange={(e) => handleChange(e, 'password')}
            value={datas.password}
          ></input>

          {!err.password ? '' : <p className="text-[red]">{err.password}</p>}
        </div>
        <div>
          <label>Comfirm Password: </label>
          <input
            placeholder="comfirm password"
            className=" border rounded"
            type="password"
            onChange={(e) => handleChange(e, 'comfirmpassword')}
            value={datas.comfirmpassword}
          ></input>
          {!err.comfirmpassword ? (
            ''
          ) : (
            <p className="text-[red]">{err.comfirmpassword}</p>
          )}
        </div>
        <div>
          <label>Phone: </label>
          <input
            placeholder="Phone"
            className=" border rounded"
            type="text"
            onChange={(e) => handleChange(e, 'phone')}
            value={datas.phone}
          ></input>
          {!err.phone ? '' : <p className="text-[red]">{err.phone}</p>}
        </div>
        <button
          className="text-[white] border border-[red] bg-[red] p-2"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {/* <img src="https://imagedelivery.net/z-mG00pdN_cvu951VzahyQ/f4eede3b-684c-4f8e-3138-404e2949b200/public"></img> */}
      </form>
    </div>
  );
};

export default Form;
