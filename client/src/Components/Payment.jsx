export default function Payment(show ='display:flex', theme = 'true', amount ='20$', number='01305420085', date='02-08-2023',method='usd', name='kiam') {
  return (
    <>
      <div className={`paymentNotification-area ${show ? 'show' : ' '} `}>
        <div
          className="paymentNotification"
          style={{
            background: theme && '#ffff',
            boxShadow: theme && '1px 1px 10px #16162328',
          }}
        >
          <div className="paymentNotification-logo-area">
            <div
              className="paymentNotification-logo-bg"
              style={{
                background: theme && '#ffff',
                boxShadow: theme && '1px 1px 10px #16162328',
              }}
            >
              <i
                className="fa-solid fa-check paymentNotification-logo"
                style={{
                  color: theme ? '#25282e' : '#fff',
                }}
              ></i>
            </div>
          </div>
          <div className="paymentNotification-text">
            <h2
              className="paymentNotification-header"
              style={{
                color: theme && '#25282E',
              }}
            >
              Payment Success!
            </h2>
            <p
              className="paymentNotification-para"
              style={{
                color: theme && '#25282E',
                margin: '16px 0',
              }}
            >
              Your payment has been successfully done.
            </p>
            <hr
              style={{
                width: '85%',
                display: 'block',
                margin: 'auto',
                textAlign: 'center',
                border: theme
                  ? '1.66539px solid #25282E '
                  : '1.66539px solid rgba(255, 255, 255, 0.72)',
              }}
            />
            <p
              className="paymentNotification-para"
              style={{
                color: theme && '#25282E',
                margin: '9px',
              }}
            >
              Total Payment.
            </p>
            <h2
              className="paymentNotification-header"
              style={{
                color: theme && '#25282E',
                fontSize: '39.9694px',
                margin: '0px',
              }}
            >
              USD ${amount}
            </h2>
          </div>
          <div
            style={{
              padding: '50px 20px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: '1fr 1fr',
              gap: ' 10px 20px',
            }}
          >
            <div
              style={{
                padding: '0 0 0 10px',
                border: theme
                  ? '1px solid #25282E'
                  : '1px solid rgba(255, 255, 255, 0.72)',
                borderRadius: '8px',
              }}
            >
              <p
                style={{
                  margin: '5px',
                  color: theme ? '#25282E' : 'rgba(255, 255, 255, 0.72)',
                }}
              >
                Ref Number
              </p>
              <p
                style={{
                  margin: '5px',
                  color: theme ? '#25282E' : '#fff',
                }}
                className="paymentNotification-number"
              >
                {number}
              </p>
            </div>
            <div
              style={{
                padding: '0 0 0 10px',
                border: theme
                  ? '1px solid #25282E'
                  : '1px solid rgba(255, 255, 255, 0.72)',
                borderRadius: '8px',
              }}
            >
              <p
                style={{
                  margin: '5px',
                  color: theme ? '#25282E' : 'rgba(255, 255, 255, 0.72)',
                }}
              >
                Payment Time
              </p>
              <p
                style={{
                  margin: '5px',
                  color: theme ? '#25282E' : '#fff',
                }}
                className="paymentNotification-date"
              >
                {date}
              </p>
            </div>
            <div
              style={{
                padding: '0 0 0 10px',
                border: theme
                  ? '1px solid #25282E'
                  : '1px solid rgba(255, 255, 255, 0.72)',
                borderRadius: '8px',
              }}
            >
              <p
                style={{
                  margin: '5px',
                  color: theme ? '#25282E' : 'rgba(255, 255, 255, 0.72)',
                }}
              >
                Payment Method
              </p>
              <p
                style={{
                  margin: '5px',
                  color: theme ? '#25282E' : '#fff',
                }}
                className="paymentNotification-method"
              >
                {method}
              </p>
            </div>
            <div
              style={{
                padding: '0 0 0 10px',
                border: theme
                  ? '1px solid #25282E'
                  : '1px solid rgba(255, 255, 255, 0.72)',
                borderRadius: '8px',
              }}
            >
              <p
                style={{
                  margin: '5px',
                  color: theme ? '#25282E' : 'rgba(255, 255, 255, 0.72)',
                }}
              >
                Sender Name
              </p>
              <p
                style={{
                  margin: '5px',
                  color: theme ? '#25282E' : '#fff',
                }}
                className="paymentNotification-name"
              >
                {name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


