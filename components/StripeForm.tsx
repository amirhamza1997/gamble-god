import React, { useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";
 
import useResponsiveFontSize from "../components/StripeResponsiveFont";
import { useRouter } from 'next/navigation';

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    [fontSize]
  );

  return options;
};

const SplitForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const router = useRouter();

  const [loading, setLoading] =useState(false)

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    setLoading(true);
    event.preventDefault();

    
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const data: any = localStorage.getItem('userDetails');
    const userData = JSON.parse(data)
    
    // const payload = await stripe.createPaymentMethod({
    //   type: "card",
    //   card: elements.getElement(CardNumberElement)
    // });
    const result = await stripe.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        confirmParams: {
          return_url: "http://localhost:3000/views/payment/pi_3Nk4xgIoLQN6MWRG1yu4Fq8V_secret_MxsaY2zlHjwm6ahsgTpr0rnIm",
        },
        redirect: 'if_required'
      });
      
      fetch(`https://gamble-god.uc.r.appspot.com/user/updatePayment`,
        {
     
          // Adding method type
          method: "PATCH",
           
          // Adding body or contents to send
          body: JSON.stringify({
            email: userData.email,
            paymentMethod: result.paymentIntent?.payment_method,
          }),
           
          // Adding headers to the request
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          }
      }).then(res=> {

        router.push("/")
        setLoading(false)
      })
      console.log(result, "HELLO"); 
      
  };

  return (
    <form onSubmit={handleSubmit}>
<PaymentElement />
      {/* <label>
        Card number hereee
        <CardNumberElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <label>
        Expiration date
        <CardExpiryElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <label>
        CVC
        <CardCvcElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label> */}
      {/* <button type="submit" disabled={!stripe}>
        Pay
      </button> */}
        <div className='flex flex-col mt-3 lg:flex-row rounded-lg gap-3'>
            <button className='w-full border rounded-lg	p-4 bg-[#F3F4F5]'>Cancel</button>
            <button type="submit" disabled={!stripe} className='w-full rounded-lg	p-4 bg-[#D6AA28]'>{loading ? 'Loading ...' : 'Confirm'}</button>
        </div>
    </form>
  );
};

export default SplitForm;
