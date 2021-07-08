// dependencies
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css';

const Shipment = () => {
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);

   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();
   const onSubmit = (data) => console.log(data);

   console.log(watch('example')); // watch input value by passing the name of it

   return (
      <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
         <input
            defaultValue={loggedInUser.name}
            placeholder="Enter Your Name"
            {...register('name', { required: true })}
         />
         {errors.name && <span className="error">Name is required</span>}

         <input
            type="email"
            defaultValue={loggedInUser.email}
            placeholder="Enter Your Email"
            {...register('email', { required: true })}
         />
         {errors.email && <span className="error">Email is required</span>}

         <input
            placeholder="Enter Your Address"
            {...register('address', { required: true })}
         />
         {errors.address && <span className="error">Address is required</span>}

         <input
            type="number"
            placeholder="Enter Your Phone"
            {...register('phone', { required: true })}
         />
         {errors.phone && <span className="error">Phone is required</span>}

         <input className="btn" type="submit" />
      </form>
   );
};

export default Shipment;
