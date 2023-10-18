import { useEffect, useState } from 'react';



export default function TermService() {
  const [connect] = useState('Connect wallet');


  useEffect(() => {
   document.title = 'Peyem - Terms and Services'
 },[])



  
  return (
    <>
      <main
        className="term-area remove_flag_section"
        style={{ background: '#6929C4', padding: '130px 0px' }}
      >
        <h1
          className="term-header"
          style={{ color: '#fff', textAlign: 'center' }}
        >
          Peyem - Terms and Services
        </h1>
        <p
          className="term-pra text-white"
          style={{
            width: '60%',
            display: 'block',
            margin: 'auto',
            textAlign: 'center',
            fontSize: '20px',
          }}
        >
          "Peyem" is a fintech company that provides a range of financial
          services focused on cryptocurrency transactions. The company is
          committed to protecting the privacy and security of its users and
          adheres to strict privacy policies and procedures.
        </p>

        <section
          className="term"
          style={{
            width: '80%',
            padding: '0px 20px',
            margin: '50px auto',
            display: 'block',
          }}
        >
          <h2>Crypto to Fiat Transactions</h2>
          <p className="text-white" style={{ fontSize: '18px' }}>
            Peyem allows users to transfer cryptocurrency to fiat currency and
            vice versa. Users connect their cryptocurrency wallet to the Peyem
            app to initiate a transfer of cryptocurrency. Once the transaction
            is confirmed on the blockchain network, Peyem provides users with
            fiat currency by charging a fee for the service.
          </p>
          <h2>Fiat to Crypto Transactions</h2>
          <p className="text-white" style={{ fontSize: '18px' }}>
            Peyem also provides users with the ability to purchase
            cryptocurrency using fiat currency. Users connect their bank account
            or payment method to the Peyem app to initiate a purchase of
            cryptocurrency. Once the transaction is confirmed, Peyem provides
            users with the purchased cryptocurrency by charging a fee for the
            service.
          </p>
          <h2>Payment Gateway</h2>
          <p className="text-white" style={{ fontSize: '18px' }}>
            Peyem may provide a payment gateway that allows businesses to accept
            cryptocurrency payments from customers. This service can be
            integrated into an existing website or online store, making it easy
            for customers to pay with their preferred digital asset. Peyem is
            committed to protecting the privacy and security of user data and
            implements robust security measures to prevent unauthorized access.
          </p>
          <h2>User Privacy</h2>
          <p className="text-white" style={{ fontSize: '18px' }}>
            Peyem values user privacy and is committed to protecting user data.
            The company adheres to strict privacy policies and procedures to
            ensure the confidentiality, integrity, and availability of user
            data. Peyem does not share user data with third parties without user
            consent, except as required by law or regulation.
          </p>
        </section>
      </main>

    </>
  );
}